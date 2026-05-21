import React, { useEffect } from "react";
import { X } from "lucide-react";
import type { ModalProps } from "../../interfaces/modal";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  styleClass = "",
  title,
  titleStyle = "",
  description,
  descriptionStyle = "",
  footer,
  footerStyle = "",
  header,
  headerStyle = "",
  icon,
  iconStyle = "",
  closeButton,
  closeButtonStyle = "",
  content,
  contentStyle = "",
  overlayStyle = "",
}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${overlayStyle}`}
        onClick={onClose}
      />
      {/* Modal Content */}
      <div
        className={`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in slide-in-from-bottom-4 ${styleClass}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 z-20 ${closeButtonStyle}`}
        >
          {closeButton || <X size={20} />}
        </button>

        <div className="flex flex-col h-full">
          {/* Header */}
          {(title || description || icon || header) && (
            <div className={`p-6 pb-2 ${headerStyle}`}>
              {header ? (
                header
              ) : (
                <div className="flex items-start gap-4">
                  {icon && (
                    <div className={`mt-1 p-2 rounded-xl bg-blue-50 text-blue-600 ${iconStyle}`}>
                      {icon}
                    </div>
                  )}
                  <div className="flex-1">
                    {title && (
                      <h3 className={`text-xl font-bold text-gray-900 ${titleStyle}`}>
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className={`mt-1 text-sm text-gray-500 leading-relaxed ${descriptionStyle}`}>
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Body */}
          <div className={`p-6 flex-1 overflow-y-auto ${contentStyle}`}>
            {content}
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className={`p-6 pt-2 bg-gray-50/50 border-t border-gray-100 flex justify-end items-center gap-3 ${footerStyle}`}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;