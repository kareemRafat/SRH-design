export type Employee = {
  /** Unguessable random key. This IS the QR target: /id/<token>. Never sequential. */
  token: string
  name: string
  nameAr?: string
  title: string
  titleAr?: string
  idNo: string
  department: string
  departmentAr?: string
  /** Absolute public path, e.g. /employees/ahmed.webp. Empty = initials avatar. */
  photo?: string
  phone?: string
}

export function findEmployeeByToken(token: string | undefined): Employee | undefined {
  if (!token) return undefined
  return EMPLOYEES.find((e) => e.token === token)
}

export function employeeUrl(token: string): string {
  return `/id/${token}`
}

export function employeeAbsoluteUrl(token: string): string {
  return `${window.location.origin}/id/${token}`
}

// ---------------------------------------------------------------------------
// Placeholder data. Replace with real employees.
// New token: node -e "console.log(require('crypto').randomBytes(16).toString('base64url'))"
// ---------------------------------------------------------------------------
export const EMPLOYEES: Employee[] = [
  {
    token: 'kX7mQ2vL9pR4tW8nZb3YnA',
    name: 'Eng. Ahmed Saqr',
    nameAr: 'م. أحمد صقر',
    title: 'Chief Executive Officer',
    titleAr: 'الرئيس التنفيذي',
    idNo: 'SRH-001',
    department: 'Executive',
    departmentAr: 'الإدارة التنفيذية',
    photo: '/assets/images/leaders/ceo.webp',
  },
  {
    token: 'dR5tY8uI3oP6aS9dF2gH1J',
    name: 'Eng. Hamada Kandil',
    nameAr: 'م. حمادة قنديل',
    title: 'Technical Director',
    titleAr: 'المدير الفني',
    idNo: 'SRH-002',
    department: 'Technical',
    departmentAr: 'الإدارة الفنية',
    photo: '/assets/images/leaders/td.webp',
  },
  {
    token: 'mN4bV6cX1zL8kJ7hG3fD5S',
    name: 'Mohammed Al-Qahtani',
    nameAr: 'محمد القحطاني',
    title: 'Installation Supervisor',
    titleAr: 'مشرف تركيبات',
    idNo: 'SRH-003',
    department: 'Technical',
    departmentAr: 'الإدارة الفنية',
    photo: '',
    phone: '+966 55 000 0003',
  },
]
