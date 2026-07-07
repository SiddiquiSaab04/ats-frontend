import React from "react";
import type { Field, GenericFormProps } from "../../../interfaces/form";

export const FormField = React.forwardRef<any, Field>(({
  type = "text",
  label,
  error,
  leftIcon,
  rightIcon,
  containerClassName = "",
  inputClassName = "",
  options = [],
  name,
  ...props
}, ref) => {
  const baseInputClasses = `w-full transition-all duration-200 outline-none ${
    leftIcon ? "pl-10" : "pl-4"
  } ${
    rightIcon ? "pr-10" : "pr-4"
  } ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
      : "border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
  } ${
    inputClassName || "bg-white border rounded-xl py-2.5"
  }`;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            ref={ref as any}
            className={`${baseInputClasses} min-h-[100px] resize-y px-4`}
            {...(props as any)}
          />
        );

      case "select":
        return (
          <select
            name={name}
            ref={ref as any}
            className={`${baseInputClasses} appearance-none bg-no-repeat bg-right pr-10`}
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"></path></svg>')`,
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1.5em',
            }}
            {...(props as any)}
          >
            <option value="" disabled selected>
              {props.placeholder || "Select an option"}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case "checkbox":
        return (
          <div className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              name={name}
              ref={ref as any}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              {...(props as any)}
            />
            <span className="text-sm text-gray-600">{props.placeholder}</span>
          </div>
        );

      case "creatable-select":
        return (
          <div className="relative">
            <input
              type="text"
              name={name}
              ref={ref as any}
              placeholder={props.placeholder || "Start typing to create..."}
              className={baseInputClasses}
              {...(props as any)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
              Creatable
            </div>
          </div>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            ref={ref as any}
            className={baseInputClasses}
            {...(props as any)}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 ml-1">
          {label}
          {props.required && <span className="text-red-500 ml-0.5"> * </span>}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
            {leftIcon}
          </div>
        )}

        {renderInput()}

        {rightIcon && type !== "select" && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <span className="text-xs text-red-500 ml-1 font-medium">{error}</span>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

const GenericForm: React.FC<GenericFormProps> = ({
  fields,
  onSubmit,
  submitLabel = "Submit",
  layout = "vertical",
  columns = 1,
  className = "",
  submitButtonClassName = "",
  children,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  const layoutClasses = {
    vertical: "flex flex-col gap-5",
    flex: "flex flex-wrap gap-5",
    grid: "grid gap-5 grid-cols-1",
  };

  const layoutStyles =
    layout === "grid"
      ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
      : {};

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className={layoutClasses[layout]} style={layoutStyles}>
        {fields.map((field) => (
          <FormField key={field.name} {...field} />
        ))}
        {children}
      </div>

      <button
        type="submit"
        className={`mt-8 px-8 py-3.5 rounded-xl font-bold transition-all duration-200 ${
          submitButtonClassName ||
          "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/25"
        }`}
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default GenericForm;
