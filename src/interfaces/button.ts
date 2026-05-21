export interface ButtonProps {
    children?: React.ReactNode;
    btnStyle?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
}