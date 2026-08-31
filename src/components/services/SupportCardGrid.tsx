import { Reveal } from '../layout/Reveal'

export type SupportCard = {
  title: string
  text: string
}

type SupportCardGridProps = {
  cards: SupportCard[]
  className?: string
}

export function SupportCardGrid({ cards, className = '' }: SupportCardGridProps) {
  return (
    <div className={`detail-grid ${className}`}>
      {cards.map((card, index) => (
        <Reveal key={card.title} delay={index * 90} className="detail-card">
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </Reveal>
      ))}
    </div>
  )
}