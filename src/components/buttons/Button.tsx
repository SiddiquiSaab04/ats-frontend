import type { ButtonProps } from "../../interfaces/button";

const Button: React.FC<ButtonProps> = ({ children, btnStyle, onClick, type, disabled, icon, iconStyle }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={btnStyle}
        >
            {icon && <span className={iconStyle}>{icon}</span>}
            {children}
        </button>
    )
}

export default Button