import type { HeaderProps } from '../../interfaces/header'

const Title: React.FC<HeaderProps> = ({ heading, description, headingStyle, descriptionStyle, styleClass, icon, iconStyle }) => {
    return (
        <div className={styleClass + ` flex ${icon ? " items-center gap-2" : " flex-col items-center"}`}>
            {
                icon && (
                    <div className={iconStyle}>{icon}</div>
                )
            }
            <h1 className={headingStyle}>{heading}</h1>
            <p className={descriptionStyle}>{description}</p>
        </div>
    )
}

export default Title