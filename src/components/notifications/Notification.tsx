import { Toaster as Sonner, toast } from "sonner";
import { CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";

export const Toaster = () => {
  return (
    <Sonner
      position="top-right"
      expand={false}
      richColors
      closeButton
      className="sonner-toast"
      toastOptions={{
        className: "rounded-2xl border shadow-lg px-4 py-3 flex items-center gap-3",
        style: {
          fontFamily: "inherit",
        },
      }}
    />
  );
};

export const notify = {
  success: (message: string, description?: string) =>
    toast.success(message, {
      description,
      icon: <CheckCircle className="text-green-500" size={18} />,
    }),
  error: (message: string, description?: string) =>
    toast.error(message, {
      description,
      icon: <AlertCircle className="text-red-500" size={18} />,
    }),
  warning: (message: string, description?: string) =>
    toast.warning(message, {
      description,
      icon: <AlertTriangle className="text-amber-500" size={18} />,
    }),
  info: (message: string, description?: string) =>
    toast.info(message, {
      description,
      icon: <Info className="text-blue-500" size={18} />,
    }),
};
