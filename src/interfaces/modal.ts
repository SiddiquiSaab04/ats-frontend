export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    styleClass?: string;
    title?: string;
    titleStyle?: string;
    description?: string;
    descriptionStyle?: string;
    footer?: React.ReactNode;
    footerStyle?: string;
    header?: React.ReactNode;
    headerStyle?: string;
    icon?: React.ReactNode;
    iconStyle?: string;
    closeButton?: React.ReactNode;
    closeButtonStyle?: string;
    content: React.ReactNode;
    contentStyle?: string;
    overlayStyle?: string;
    
}