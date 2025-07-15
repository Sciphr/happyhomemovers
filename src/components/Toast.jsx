import { CheckCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-800" : "bg-red-800";
  const borderColor = isSuccess ? "border-green-600" : "border-red-600";
  const textColor = isSuccess ? "text-green-100" : "text-red-100";
  const iconColor = isSuccess ? "text-green-400" : "text-red-400";

  return (
    <div className="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out">
      <div
        className={`${bgColor} ${borderColor} ${textColor} border-l-4 p-4 rounded-lg shadow-lg max-w-md`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {isSuccess ? (
              <CheckCircle className={`h-5 w-5 ${iconColor}`} />
            ) : (
              <AlertCircle className={`h-5 w-5 ${iconColor}`} />
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={onClose}
              className={`${textColor} hover:text-white transition-colors duration-200 cursor-pointer`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
