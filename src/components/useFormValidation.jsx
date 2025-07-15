import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value, formData) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (
          !/^[\+]?[(]?[\d\s\-\(\)]{10,}$/.test(value.replace(/\s/g, ""))
        ) {
          error = "Please enter a valid phone number";
        }
        break;

      case "moveType":
        if (!value) {
          error = "Please select a move type";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const requiredFields = ["name", "email", "phone", "moveType"];

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field], formData);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (fieldName) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateForm,
    validateField,
    clearError,
    clearAllErrors,
  };
};

export default useFormValidation;
