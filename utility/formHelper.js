
export const passwordPattern = {
  value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/,
  message:
    "Password must be at least 8 characters and contain at least one uppercase character, one number, and one special character",
};

export const useFormError = () => {
  const setFormError = (errors, setError) => {
    if (!errors) return;
    
    for (let key in errors) {
      setError(key, {
        type: "manual",
        message: errors[key][0],
      });
    }
  };
  return {
    setFormError,
  };
};
