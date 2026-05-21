import type { TemplateProps } from '../../../interfaces/template'

const Template: React.FC<TemplateProps> = ({children, styleClass}) => {
  return (
    <div className={styleClass + " px-8 py-6"}>
        {children}
    </div>
  )
}

export default Template;