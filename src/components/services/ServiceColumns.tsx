import { Reveal } from '../layout/Reveal'

export type ServiceColumn = {
  title: string
  items?: string[]
  text?: string
}

type ServiceColumnsProps = {
  columns: ServiceColumn[]
}

export function ServiceColumns({ columns }: ServiceColumnsProps) {
  return (
    <div className="service-columns-grid">
      {columns.map((column, index) => (
        <Reveal key={column.title} delay={index * 90} className="service-column">
          <h2>{column.title}</h2>
          {column.items ? (
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{column.text}</p>
          )}
        </Reveal>
      ))}
    </div>
  )
}