import type { CardProps } from '../../../interfaces/card'

const Card: React.FC<CardProps> = ({ children, styleClass, icon }) => {
  return (
    <div className={styleClass}>
      {icon && <div className="icon">{icon}</div>}
      {children}
    </div>
  )
}

export default Card