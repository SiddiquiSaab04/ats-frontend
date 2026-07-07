import { type ReactNode } from "react";

export type InputType = 
  | "text" 
  | "password" 
  | "email" 
  | "number" 
  | "tel" 
  | "url" 
  | "date" 
  | "datetime-local" 
  | "select" 
  | "creatable-select" 
  | "textarea" 
  | "checkbox" 
  | "radio" 
  | "file";

export interface SelectOption {
  label?: string;
  value: string | number;
}

 export interface Field {
  name: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  defaultValue?: any;
  options?: SelectOption[]; // For select, radio
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  rows?: number; // For textarea
  accept?: string; // For file
  multiple?: boolean; // For file/select
}

export interface GenericFormProps {
  fields: Field[];
  onSubmit: (data: any) => void;
  submitLabel?: string;
  layout?: "grid" | "flex" | "vertical";
  columns?: number;
  className?: string;
  submitButtonClassName?: string;
  children?: ReactNode;
}
