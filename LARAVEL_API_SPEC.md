# SRH Laravel API Specification

> **Purpose:** This document specifies the backend API needed for the SRH React frontend.
> The React app has two forms (Contact + Join/Careers) that currently do nothing on submit.
> This spec defines the Laravel endpoints, database schema, validation, security, and email notifications.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Laravel Sanctum Setup](#2-laravel-sanctum-setup)
3. [Environment Configuration](#3-environment-configuration)
4. [Database Migrations](#4-database-migrations)
5. [Eloquent Models](#5-eloquent-models)
6. [Form Request Validation](#6-form-request-validation)
7. [API Routes](#7-api-routes)
8. [Controllers](#8-controllers)
9. [File Upload Handling](#9-file-upload-handling)
10. [Email Notifications](#10-email-notifications)
11. [CORS Configuration](#11-cors-configuration)
12. [Rate Limiting](#12-rate-limiting)
13. [Security Hardening](#13-security-hardening)
14. [React Frontend Integration](#14-react-frontend-integration)
15. [Testing](#15-testing)

---

## 1. Overview

### Forms to Implement

| # | Form | React Component | Frontend Route | Description |
|---|------|-----------------|----------------|-------------|
| 1 | **Contact Form** | `src/components/ui/ContactForm.tsx` | `/contact` (+ homepage section) | General inquiries, project quotes |
| 2 | **Join/Careers Form** | `src/components/join/JoinForm.tsx` | `/join`, `/careers` | Job applications with CV upload |

### API Endpoints Summary

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| `POST` | `/api/contact` | Submit contact form | Sanctum (cookie) |
| `POST` | `/api/join` | Submit job application (text) | Sanctum (cookie) |
| `POST` | `/api/join/upload-cv` | Upload CV file for application | Sanctum (cookie) |
| `GET` | `/api/sanctum/csrf-cookie` | Get CSRF token for SPA | None |

### Data Flow

```
CONTACT FORM:
  React → POST /api/contact → Validate → Save to `contacts` table → Email HR → JSON response

JOIN FORM:
  React → POST /api/join → Validate → Save to `job_applications` table → Return application_id
  React → POST /api/join/upload-cv → Validate file → Store in storage → Update DB → Email HR → JSON response
```

---

## 2. Laravel Sanctum Setup

### Installation

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### Publish Sanctum Config

```bash
php artisan vendor:publish --tag="sanctum-config"
```

This creates `config/sanctum.php`.

### Configure `.env`

```env
SANCTUM_STATEFUL_DOMAINS=srh-ksa.com,localhost:5173,localhost:8000
SESSION_DOMAIN=.srh-ksa.com
```

> **Important:** `SANCTUM_STATEFUL_DOMAINS` must list all domains where the React app runs.
> Use comma-separated values. No `http://` or `https://` prefix.
> For local development: `localhost:5173,localhost:8000`
> For production: `srh-ksa.com`

### Middleware Configuration

In `app/Http/Kernel.php`, ensure these middleware groups are properly configured:

```php
// api middleware group should include Sanctum's middleware
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

### Middleware Alias

```php
// app/Http/Kernel.php -> $middlewareAliases
'sanctum' => \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
```

---

## 3. Environment Configuration

### `.env` Additions

```env
# Sanctum
SANCTUM_STATEFUL_DOMAINS=srh-ksa.com,localhost:5173
SESSION_DOMAIN=.srh-ksa.com

# Mail (choose one)

# Option A: SMTP (Gmail example)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=info@srh-ksa.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=info@srh-ksa.com
MAIL_FROM_NAME="SRH - Safe Reach"

# Option B: Mailgun
MAIL_MAILER=mailgun
MAILGun_DOMAIN=mg.srh-ksa.com
MAILGUN_SECRET=key-xxxxxxxxxxxxxxx

# File Storage
FILESYSTEM_DISK=local

# Application
APP_URL=https://srh-ksa.com
```

---

## 4. Database Migrations

### Migration 1: `contacts` Table

```php
// database/migrations/xxxx_xx_xx_000001_create_contacts_table.php

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('email', 255);
            $table->string('phone', 20)->nullable();
            $table->string('project_type', 50)->nullable();
            $table->unsignedInteger('units')->nullable();
            $table->string('location', 500)->nullable();
            $table->text('message');
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent', 500)->nullable();
            $table->timestamps();

            $table->index('email');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
```

### Migration 2: `job_applications` Table

```php
// database/migrations/xxxx_xx_xx_000002_create_job_applications_table.php

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 255);
            $table->string('phone', 20);
            $table->string('email', 255);
            $table->string('country', 50);
            $table->string('department', 50);
            $table->string('cv_path', 500)->nullable();
            $table->string('cv_original_name', 255)->nullable();
            $table->text('notes')->nullable();
            $table->enum('status', ['pending', 'reviewed', 'shortlisted', 'rejected'])->default('pending');
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent', 500)->nullable();
            $table->timestamps();

            $table->index('email');
            $table->index('status');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
```

### Run Migrations

```bash
php artisan migrate
```

---

## 5. Eloquent Models

### Contact Model

```php
// app/Models/Contact.php

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'project_type',
        'units',
        'location',
        'message',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'units' => 'integer',
    ];
}
```

### JobApplication Model

```php
// app/Models/JobApplication.php

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'country',
        'department',
        'cv_path',
        'cv_original_name',
        'notes',
        'status',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'status' => 'string',
    ];

    /**
     * Get the full URL for the CV file.
     */
    public function getCvUrlAttribute(): ?string
    {
        if (! $this->cv_path) {
            return null;
        }

        return Storage::disk('local')->temporaryUrl(
            $this->cv_path,
            now()->addMinutes(60)
        );
    }

    /**
     * Check if CV has been uploaded.
     */
    public function hasCv(): bool
    {
        return ! is_null($this->cv_path);
    }
}
```

---

## 6. Form Request Validation

### ContactFormRequest

```php
// app/Http/Requests/ContactFormRequest.php

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|max:255',
            'phone'       => 'nullable|string|max:20',
            'projectType' => 'nullable|in:new-install,escalators,maintenance,modernization,other',
            'units'       => 'nullable|integer|min:1|max:99999',
            'location'    => 'nullable|string|max:500',
            'message'     => 'required|string|max:5000',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'    => 'Name is required.',
            'email.required'   => 'Email is required.',
            'email.email'      => 'Please provide a valid email address.',
            'message.required' => 'Message is required.',
            'units.min'        => 'Units must be at least 1.',
            'units.max'        => 'Units cannot exceed 99999.',
        ];
    }
}
```

### JoinFormRequest

```php
// app/Http/Requests/JoinFormRequest.php

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JoinFormRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'fullName'   => 'required|string|max:255',
            'phone'      => 'required|string|max:20',
            'email'      => 'required|email|max:255',
            'country'    => 'required|in:saudi-arabia,uae,egypt',
            'department' => 'required|in:sales,hr,technical,maintenance,accounting,marketing,executive',
            'notes'      => 'nullable|string|max:5000',
        ];
    }

    public function messages(): array
    {
        return [
            'fullName.required'   => 'Full name is required.',
            'phone.required'      => 'Phone number is required.',
            'email.required'      => 'Email is required.',
            'email.email'         => 'Please provide a valid email address.',
            'country.required'    => 'Please select a country.',
            'country.in'          => 'Invalid country selected.',
            'department.required' => 'Please select a department.',
            'department.in'       => 'Invalid department selected.',
        ];
    }
}
```

### CvUploadRequest

```php
// app/Http/Requests/CvUploadRequest.php

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CvUploadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'application_id' => 'required|integer|exists:job_applications,id',
            'cv'             => 'required|file|mimes:pdf,doc,docx|max:5120',
        ];
    }

    public function messages(): array
    {
        return [
            'application_id.required' => 'Application ID is required.',
            'application_id.exists'   => 'Invalid application.',
            'cv.required'             => 'Please select a CV file to upload.',
            'cv.file'                 => 'Invalid file.',
            'cv.mimes'                => 'Only PDF, DOC, and DOCX files are allowed.',
            'cv.max'                  => 'File size must not exceed 5MB.',
        ];
    }
}
```

---

## 7. API Routes

```php
// routes/api.php

<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\JoinController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Sanctum SPA authentication routes.
| The React app sends requests with credentials (cookies) included.
|
*/

// CSRF cookie endpoint — React calls this on app load
Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['status' => 'ok']);
});

// Public (rate-limited only) — no auth needed for form submission
// BUT we protect with Sanctum to prevent spam/bots
Route::middleware('sanctum')->group(function () {

    // Contact Form
    Route::post('/contact', [ContactController::class, 'store'])
        ->middleware('throttle:contact');

    // Join / Career Application
    Route::post('/join', [JoinController::class, 'store'])
        ->middleware('throttle:join');

    Route::post('/join/upload-cv', [JoinController::class, 'uploadCv'])
        ->middleware('throttle:join-upload');
});
```

---

## 8. Controllers

### ContactController

```php
// app/Http/Controllers/Api/ContactController.php

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactSubmissionMail;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactFormRequest $request): JsonResponse
    {
        $validated = $request->validated();

        // Add request metadata for security/audit
        $validated['ip_address'] = $request->ip();
        $validated['user_agent'] = $request->userAgent();

        // Strip any HTML tags from text fields for security
        $validated['name']     = strip_tags($validated['name']);
        $validated['message']  = strip_tags($validated['message']);
        $validated['location'] = isset($validated['location'])
            ? strip_tags($validated['location'])
            : null;

        $contact = Contact::create($validated);

        // Send notification email to HR
        try {
            Mail::to('info@srh-ksa.com')
                ->cc('hr@srh-ksa.com')
                ->send(new ContactSubmissionMail($contact));
        } catch (\Exception $e) {
            // Log the error but don't fail the request
            \Log::error('Failed to send contact email: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Your message has been received. We will get back to you shortly.',
        ], 201);
    }
}
```

### JoinController

```php
// app/Http/Controllers/Api/JoinController.php

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JoinFormRequest;
use App\Http\Requests\CvUploadRequest;
use App\Mail\JobApplicationMail;
use App\Mail\JobApplicationCvMail;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class JoinController extends Controller
{
    /**
     * Store job application text fields.
     */
    public function store(JoinFormRequest $request): JsonResponse
    {
        $validated = $request->validated();

        // Add request metadata
        $validated['ip_address'] = $request->ip();
        $validated['user_agent'] = $request->userAgent();

        // Sanitize text fields
        $validated['full_name'] = strip_tags($validated['full_name']);
        $validated['notes']     = isset($validated['notes'])
            ? strip_tags($validated['notes'])
            : null;

        $application = JobApplication::create($validated);

        return response()->json([
            'success'        => true,
            'application_id' => $application->id,
            'message'        => 'Application received. Please upload your CV.',
        ], 201);
    }

    /**
     * Upload CV file for an existing application.
     */
    public function uploadCv(CvUploadRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $application = JobApplication::findOrFail($validated['application_id']);

        // Check if CV already uploaded (prevent re-upload)
        if ($application->hasCv()) {
            // Delete old CV
            Storage::disk('local')->delete($application->cv_path);
        }

        $file = $request->file('cv');

        // Generate secure unique filename
        $extension = $file->getClientOriginalExtension();
        $filename  = 'cv_' . time() . '_' . Str::random(20) . '.' . $extension;
        $path      = $file->storeAs('cvs', $filename, 'local');

        // Update application record
        $application->update([
            'cv_path'          => $path,
            'cv_original_name' => $file->getClientOriginalName(),
        ]);

        // Send CV notification email to HR
        try {
            Mail::to('info@srh-ksa.com')
                ->cc('hr@srh-ksa.com')
                ->send(new JobApplicationCvMail($application));
        } catch (\Exception $e) {
            Log::error('Failed to send CV email: ' . $e->getMessage());
        }

        // If this is the first time CV is uploaded, also send the full application email
        if ($application->wasRecentlyCreated || !$application->wasChanged('cv_path')) {
            try {
                Mail::to('info@srh-ksa.com')
                    ->cc('hr@srh-ksa.com')
                    ->send(new JobApplicationMail($application));
            } catch (\Exception $e) {
                Log::error('Failed to send application email: ' . $e->getMessage());
            }
        }

        return response()->json([
            'success'  => true,
            'cv_url'   => $application->cv_url,
            'filename' => $file->getClientOriginalName(),
            'message'  => 'CV uploaded successfully.',
        ]);
    }
}
```

---

## 9. File Upload Handling

### Storage Configuration

The CV files should be stored in `storage/app/private/cvs/` (not publicly accessible).

```php
// config/filesystems.php — 'local' disk already points to storage/app
// No changes needed. Files stored via Storage::disk('local') go to storage/app/
```

### Directory Structure

```
storage/
  app/
    private/
      cvs/
        cv_1693420800_aB3xYz9kLmNoPqRsTuVw.pdf
        cv_1693420855_cDeFgHiJkLmNoPqRsTuVw.docx
```

### Serving Files (Signed URLs)

The CV files are private. To provide temporary access:

```php
// In JobApplication model (already defined above)
public function getCvUrlAttribute(): ?string
{
    if (! $this->cv_path) {
        return null;
    }

    // Returns a URL valid for 60 minutes
    return Storage::disk('local')->temporaryUrl(
        $this->cv_path,
        now()->addMinutes(60)
    );
}
```

### Cleanup Job (Optional but Recommended)

Delete CVs for applications older than 30 days that have no status change:

```php
// app/Jobs/CleanupOrphanedCvs.php

<?php

namespace App\Jobs;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Storage;

class CleanupOrphanedCvs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable;

    public function handle(): void
    {
        JobApplication::where('status', 'pending')
            ->where('cv_path', '!=', null)
            ->where('created_at', '<', now()->subDays(30))
            ->each(function ($application) {
                Storage::disk('local')->delete($application->cv_path);
                $application->update(['cv_path' => null, 'cv_original_name' => null]);
            });
    }
}
```

Register in `routes/console.php`:

```php
use App\Jobs\CleanupOrphanedCvs;
use Illuminate\Support\Facades\Schedule;

Schedule::daily()->job(new CleanupOrphanedCvs);
```

---

## 10. Email Notifications

### ContactSubmissionMail

```php
// app/Mail/ContactSubmissionMail.php

<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactSubmissionMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Contact $contact
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Contact Submission — ' . $this->contact->name,
            from: config('mail.from.address'),
        );
    }

    public function content(): Content
    {
        return new Content(
            htmlString: $this->buildHtml(),
        );
    }

    private function buildHtml(): string
    {
        $contact = $this->contact;

        $projectTypeLabels = [
            'new-install'    => 'New Installation',
            'escalators'     => 'Escalators',
            'maintenance'    => 'Maintenance',
            'modernization'  => 'Modernization',
            'other'          => 'Other',
        ];

        $projectType = $contact->project_type
            ? ($projectTypeLabels[$contact->project_type] ?? $contact->project_type)
            : '—';

        return <<<HTML
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1e293b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .body { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
                .field { margin-bottom: 12px; }
                .label { font-weight: bold; color: #475569; }
                .value { color: #1e293b; }
                .footer { text-align: center; padding: 15px; font-size: 12px; color: #94a3b8; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Contact Submission</h2>
                </div>
                <div class="body">
                    <div class="field">
                        <span class="label">Name:</span>
                        <span class="value">{$contact->name}</span>
                    </div>
                    <div class="field">
                        <span class="label">Email:</span>
                        <span class="value"><a href="mailto:{$contact->email}">{$contact->email}</a></span>
                    </div>
                    <div class="field">
                        <span class="label">Phone:</span>
                        <span class="value">{$contact->phone ?? '—'}</span>
                    </div>
                    <div class="field">
                        <span class="label">Project Type:</span>
                        <span class="value">{$projectType}</span>
                    </div>
                    <div class="field">
                        <span class="label">Units:</span>
                        <span class="value">{$contact->units ?? '—'}</span>
                    </div>
                    <div class="field">
                        <span class="label">Location:</span>
                        <span class="value">{$contact->location ?? '—'}</span>
                    </div>
                    <div class="field">
                        <span class="label">Message:</span>
                        <div class="value">{$contact->message}</div>
                    </div>
                    <div class="field">
                        <span class="label">Submitted:</span>
                        <span class="value">{$contact->created_at->format('Y-m-d H:i:s')}</span>
                    </div>
                    <div class="field">
                        <span class="label">IP Address:</span>
                        <span class="value">{$contact->ip_address ?? '—'}</span>
                    </div>
                </div>
                <div class="footer">
                    SRH — Safe Reach for Elevators | Auto-generated from website contact form
                </div>
            </div>
        </body>
        </html>
        HTML;
    }
}
```

### JobApplicationMail

```php
// app/Mail/JobApplicationMail.php

<?php

namespace App\Mail;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class JobApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public JobApplication $application
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Job Application — ' . $this->application->full_name,
            from: config('mail.from.address'),
        );
    }

    public function content(): Content
    {
        return new Content(
            htmlString: $this->buildHtml(),
        );
    }

    private function buildHtml(): string
    {
        $app = $this->application;

        $countryLabels = [
            'saudi-arabia' => 'Saudi Arabia',
            'uae'          => 'UAE',
            'egypt'        => 'Egypt',
        ];

        $deptLabels = [
            'sales'       => 'Sales',
            'hr'          => 'Human Resources',
            'technical'   => 'Technical',
            'maintenance' => 'Maintenance',
            'accounting'  => 'Accounting',
            'marketing'   => 'Marketing',
            'executive'   => 'Executive',
        ];

        $country = $countryLabels[$app->country] ?? $app->country;
        $dept    = $deptLabels[$app->department] ?? $app->department;

        $cvSection = $app->hasCv()
            ? "<p><strong>CV:</strong> <a href='{$app->cv_url}'>Download CV</a> ({$app->cv_original_name})</p>"
            : "<p><strong>CV:</strong> <em>Not yet uploaded</em></p>";

        return <<<HTML
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1e293b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .body { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
                .field { margin-bottom: 12px; }
                .label { font-weight: bold; color: #475569; }
                .value { color: #1e293b; }
                .footer { text-align: center; padding: 15px; font-size: 12px; color: #94a3b8; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Job Application</h2>
                </div>
                <div class="body">
                    <div class="field">
                        <span class="label">Full Name:</span>
                        <span class="value">{$app->full_name}</span>
                    </div>
                    <div class="field">
                        <span class="label">Email:</span>
                        <span class="value"><a href="mailto:{$app->email}">{$app->email}</a></span>
                    </div>
                    <div class="field">
                        <span class="label">Phone:</span>
                        <span class="value">{$app->phone}</span>
                    </div>
                    <div class="field">
                        <span class="label">Country:</span>
                        <span class="value">{$country}</span>
                    </div>
                    <div class="field">
                        <span class="label">Department:</span>
                        <span class="value">{$dept}</span>
                    </div>
                    <div class="field">
                        <span class="label">Notes:</span>
                        <div class="value">{$app->notes ?? '—'}</div>
                    </div>
                    {$cvSection}
                    <div class="field">
                        <span class="label">Submitted:</span>
                        <span class="value">{$app->created_at->format('Y-m-d H:i:s')}</span>
                    </div>
                </div>
                <div class="footer">
                    SRH — Safe Reach for Elevators | Auto-generated from careers form
                </div>
            </div>
        </body>
        </html>
        HTML;
    }
}
```

### JobApplicationCvMail

```php
// app/Mail/JobApplicationCvMail.php

<?php

namespace App\Mail;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Queue\SerializesModels;

class JobApplicationCvMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public JobApplication $application
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'CV Uploaded — ' . $this->application->full_name,
            from: config('mail.from.address'),
        );
    }

    public function content(): Content
    {
        return new Content(
            htmlString: <<<HTML
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"></head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2>CV Uploaded</h2>
                <p><strong>{$this->application->full_name}</strong> has uploaded their CV.</p>
                <p><strong>Department:</strong> {$this->application->department}</p>
                <p><strong>Email:</strong> {$this->application->email}</p>
                <p><strong>Phone:</strong> {$this->application->phone}</p>
                <p>The CV is attached to this email.</p>
            </body>
            </html>
            HTML,
        );
    }

    public function attachments(): array
    {
        return [
            Attachment::fromStorageDisk('local', $this->application->cv_path)
                ->as($this->application->cv_original_name)
                ->withMime($this->getMimeType()),
        ];
    }

    private function getMimeType(): string
    {
        $extension = pathinfo($this->application->cv_original_name, PATHINFO_EXTENSION);

        return match (strtolower($extension)) {
            'pdf'  => 'application/pdf',
            'doc'  => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            default => 'application/octet-stream',
        };
    }
}
```

---

## 11. CORS Configuration

```php
// config/cors.php

<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Settings for the CORSMiddleware that handles OPTIONS preflight requests
    | and adds appropriate CORS headers.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['POST', 'OPTIONS'],

    'allowed_origins' => [
        'https://srh-ksa.com',
        'http://localhost:5173',   // Vite dev server
        'http://localhost:8000',   // Laravel dev server
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => [
        'Content-Type',
        'X-Requested-With',
        'XSRF-TOKEN',           // Sanctum CSRF token
        'Authorization',         // If using bearer tokens later
    ],

    'exposed_headers' => [],

    'max_age' => 3600,

    'supports_credentials' => true,  // Required for Sanctum cookie auth
];
```

---

## 12. Rate Limiting

### Register Rate Limiters

```php
// app/Providers/AppServiceProvider.php

<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Contact form: 5 requests per minute per IP
        RateLimiter::for('contact', function ($request) {
            return Limit::perMinute(5)->by(
                $request->ip() . '|' . ($request->userAgent() ?? '')
            );
        });

        // Join form: 3 requests per minute per IP
        RateLimiter::for('join', function ($request) {
            return Limit::perMinute(3)->by(
                $request->ip() . '|' . ($request->userAgent() ?? '')
            );
        });

        // CV upload: 5 requests per minute per IP
        RateLimiter::for('join-upload', function ($request) {
            return Limit::perMinute(5)->by(
                $request->ip() . '|' . ($request->userAgent() ?? '')
            );
        });

        // Force HTTPS in production
        if ($this->app->environment('production')) {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }
    }
}
```

### Rate Limit Response

When rate limited, Laravel returns `429 Too Many Requests`. The React frontend should handle this:

```json
{
    "message": "Too Many Requests. Please try again later."
}
```

---

## 13. Security Hardening

### 13.1 Honeypot Field (Anti-Spam)

Add a hidden field to both forms that bots will fill but humans won't.

**React (add to both forms):**
```tsx
{/* Honeypot — hidden from humans, bots will fill it */}
<input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  className="absolute opacity-0 w-0 h-0 pointer-events-none"
  aria-hidden="true"
/>
```

**Laravel validation (add to both FormRequests):**
```php
public function rules(): array
{
    return [
        'website' => 'nullable|max:0', // Must be empty
        // ... other rules
    ];
}
```

### 13.2 Time-Based Anti-Spam

Reject submissions that happen too quickly (< 3 seconds).

**React — add hidden timestamp to forms:**
```tsx
const [formLoadTime] = useState(() => Date.now())

// In <form>:
<input type="hidden" name="loaded_at" value={formLoadTime} />
```

**Laravel — add validation:**
```php
'loaded_at' => 'required|numeric|min:0',
// Then in controller:
$timeDiff = (time() * 1000) - (int) $request->loaded_at;
if ($timeDiff < 3000) {
    return response()->json(['message' => 'Form submitted too quickly.'], 422);
}
```

### 13.3 Input Sanitization

Always sanitize user input before storage:

```php
use Illuminate\Support\Str;

// Strip all HTML tags
$clean = strip_tags($input);

// Or use HTMLPurifier for more control
$clean = app('purifier')->clean($input);
```

**Fields to sanitize:**
- `name`, `fullName` — `strip_tags()`
- `message`, `notes` — `strip_tags()` (or allow basic formatting with HTMLPurifier)
- `location` — `strip_tags()`

### 13.4 Security Headers Middleware

```php
// app/Http/Middleware/SecurityHeaders.php

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

        if (app()->environment('production')) {
            $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        }

        return $response;
    }
}
```

Register in `Kernel.php`:
```php
protected $middlewareGroups = [
    'web' => [
        // ... existing middleware
        \App\Http\Middleware\SecurityHeaders::class,
    ],
];
```

### 13.5 Logging

Log all API submissions for audit trail:

```php
// In controllers, after creating the record:
\Log::info('Contact form submission', [
    'id'         => $contact->id,
    'email'      => $contact->email,
    'ip'         => $request->ip(),
    'user_agent' => $request->userAgent(),
]);
```

---

## 14. React Frontend Integration

### API Client File

Create `src/lib/api.ts`:

```typescript
const API_BASE = import.meta.env.VITE_API_URL || '/api'

interface ApiResponse {
  success: boolean
  message?: string
  application_id?: number
  cv_url?: string
  error?: string
  errors?: Record<string, string[]>
}

async function request<T = ApiResponse>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`

  const config: RequestInit = {
    credentials: 'include', // Send cookies (Sanctum)
    headers: {
      'Accept': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  // Don't set Content-Type for FormData (browser sets boundary automatically)
  if (!(options.body instanceof FormData)) {
    (config.headers as Record<string, string>)['Content-Type'] = 'application/json'
  }

  const res = await fetch(url, config)
  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message || 'Request failed') as Error & { errors?: Record<string, string[]> }
    error.errors = data.errors
    throw error
  }

  return data as T
}

// Contact Form
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  projectType?: string
  units?: number
  location?: string
  message: string
  website?: string    // honeypot
  loaded_at?: number  // anti-spam
}

export async function submitContact(data: ContactFormData): Promise<ApiResponse> {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// Join Form
export interface JoinFormData {
  fullName: string
  phone: string
  email: string
  country: string
  department: string
  notes?: string
  website?: string    // honeypot
  loaded_at?: number  // anti-spam
}

export async function submitJoinApplication(data: JoinFormData): Promise<ApiResponse & { application_id: number }> {
  return request('/join', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// CV Upload
export interface CvUploadResponse extends ApiResponse {
  cv_url: string
  filename: string
}

export async function uploadCv(applicationId: number, file: File): Promise<CvUploadResponse> {
  const formData = new FormData()
  formData.append('application_id', String(applicationId))
  formData.append('cv', file)

  return request('/join/upload-cv', {
    method: 'POST',
    body: formData,
  })
}

// Fetch CSRF cookie (call on app initialization)
export async function fetchCsrfCookie(): Promise<void> {
  await fetch(`${API_BASE}/sanctum/csrf-cookie`, {
    credentials: 'include',
  })
}
```

### Environment File

Create `.env` in the React root:

```env
VITE_API_URL=https://srh-ksa.com/api
```

For local development:

```env
VITE_API_URL=http://localhost:8000/api
```

### Updated JoinForm.tsx Submit Handler

Replace the simulated submission in `src/components/join/JoinForm.tsx`:

```typescript
import { useState, useRef, type ChangeEvent, type DragEvent, type FormEvent } from 'react'
import { useToast } from '../../hooks/useToast'
import { useLanguage } from '../../hooks/useLanguage'
import { submitJoinApplication, uploadCv } from '../../lib/api'

export function JoinForm() {
  const { showToast } = useToast()
  const { t, lang } = useLanguage()

  const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<'idle' | 'submitting' | 'uploading' | 'done'>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formLoadTime = useRef(Date.now())

  // ... keep existing file handlers (handleFileChange, handleDragOver, etc.) ...

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setUploadProgress('submitting')

    try {
      const formData = new FormData(form)

      // Step 1: Submit text fields
      const result = await submitJoinApplication({
        fullName: formData.get('fullName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        country: formData.get('country') as string,
        department: formData.get('department') as string,
        notes: (formData.get('notes') as string) || undefined,
        loaded_at: formLoadTime.current,
      })

      // Step 2: Upload CV if selected
      const cvFile = formData.get('cv') as File | null
      if (cvFile && cvFile.size > 0) {
        setUploadProgress('uploading')
        await uploadCv(result.application_id, cvFile)
      }

      setUploadProgress('done')
      showToast(t('joinPage.form.toast'))
      form.reset()
      handleRemoveFile()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Submission failed. Please try again.'
      showToast(message)
    } finally {
      setIsSubmitting(false)
      setUploadProgress('idle')
    }
  }

  // ... rest of component (JSX) stays the same ...
}
```

### Updated ContactForm.tsx Submit Handler

Replace the simulated submission in `src/components/ui/ContactForm.tsx`:

```typescript
import { useState, type FormEvent } from 'react'
import { useToast } from '../../hooks/useToast'
import { useLanguage } from '../../hooks/useLanguage'
import { submitContact } from '../../lib/api'

// In the component:
const [isSubmitting, setIsSubmitting] = useState(false)
const formLoadTime = useRef(Date.now())

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const form = event.currentTarget

  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  setIsSubmitting(true)

  try {
    const formData = new FormData(form)

    await submitContact({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      projectType: (formData.get('projectType') as string) || undefined,
      units: formData.get('units') ? Number(formData.get('units')) : undefined,
      location: (formData.get('location') as string) || undefined,
      message: formData.get('message') as string,
      loaded_at: formLoadTime.current,
    })

    showToast(t('form.toast'))
    form.reset()
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Submission failed. Please try again.'
    showToast(message)
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## 15. Testing

### Manual API Testing with cURL

**Test Contact Form:**
```bash
# First get CSRF cookie
curl -c cookies.txt -b cookies.txt https://srh-ksa.com/sanctum/csrf-cookie

# Submit contact form
curl -b cookies.txt -X POST https://srh-ksa.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Hello from API test"
  }'
```

**Test Join Form:**
```bash
# Submit application
curl -b cookies.txt -X POST https://srh-ksa.com/api/join \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Applicant",
    "phone": "+966501234567",
    "email": "applicant@test.com",
    "country": "saudi-arabia",
    "department": "technical"
  }'

# Upload CV
curl -b cookies.txt -X POST https://srh-ksa.com/api/join/upload-cv \
  -F "application_id=1" \
  -F "cv=@/path/to/test.pdf"
```

### Expected Responses

**Success — Contact:**
```json
{
    "success": true,
    "message": "Your message has been received. We will get back to you shortly."
}
```

**Success — Join:**
```json
{
    "success": true,
    "application_id": 1,
    "message": "Application received. Please upload your CV."
}
```

**Success — CV Upload:**
```json
{
    "success": true,
    "cv_url": "https://srh-ksa.com/storage/cvs/cv_1693420800_aB3xYz9kLm.pdf",
    "filename": "my_resume.pdf",
    "message": "CV uploaded successfully."
}
```

**Validation Error:**
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "email": ["The email field is required."],
        "fullName": ["The full name field is required."]
    }
}
```

**Rate Limited:**
```json
{
    "message": "Too Many Requests. Please try again later."
}
```

### Laravel Test Commands

```bash
# Run migration
php artisan migrate

# Test routes
php artisan route:list --path=api

# Clear config cache after changes
php artisan config:clear
php artisan cache:clear
php artisan route:clear

# Test mail (log driver for dev)
MAIL_MAILER=log php artisan tinker
```

---

## File Summary

### Laravel Files to Create

| File | Purpose |
|------|---------|
| `app/Http/Controllers/Api/ContactController.php` | Handle contact form |
| `app/Http/Controllers/Api/JoinController.php` | Handle join form + CV upload |
| `app/Http/Requests/ContactFormRequest.php` | Validate contact input |
| `app/Http/Requests/JoinFormRequest.php` | Validate join input |
| `app/Http/Requests/CvUploadRequest.php` | Validate CV upload |
| `app/Models/Contact.php` | Contact Eloquent model |
| `app/Models/JobApplication.php` | Job application Eloquent model |
| `app/Mail/ContactSubmissionMail.php` | Contact notification email |
| `app/Mail/JobApplicationMail.php` | Application notification email |
| `app/Mail/JobApplicationCvMail.php` | CV upload notification email |
| `app/Http/Middleware/SecurityHeaders.php` | Security headers |
| `database/migrations/xxxx_create_contacts_table.php` | Contacts migration |
| `database/migrations/xxxx_create_job_applications_table.php` | Applications migration |

### Laravel Files to Modify

| File | Changes |
|------|---------|
| `routes/api.php` | Add 4 API routes |
| `app/Providers/AppServiceProvider.php` | Add rate limiters + HTTPS |
| `config/cors.php` | Configure CORS for React domain |
| `app/Http/Kernel.php` | Add SecurityHeaders middleware |
| `.env` | Add Sanctum + mail config |

### React Files to Create/Modify

| File | Changes |
|------|---------|
| `src/lib/api.ts` | **Create** — API client functions |
| `.env` | **Create** — API base URL |
| `src/components/join/JoinForm.tsx` | Replace simulated submit with real API calls |
| `src/components/ui/ContactForm.tsx` | Replace simulated submit with real API calls |
| `.gitignore` | Add `.env` if not present |
