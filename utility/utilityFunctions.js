import Cookies from "universal-cookie";

export const setHeaders = (token) => {
  const headers = {
    Authorization: "Bearer" + " " + token,
  };
  return headers;
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("shipSimpleToken");
  }
};

export const maskPhoneNumber = (input) => {
  const regex = /^(\d{3})(\d{3})(\d{4})$/;
  const match = regex.exec(input);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return input;
};

export const logout = () => {
  const cookie = new Cookies();
  cookie.remove("shipSimpleToken", { path: "/" });
  cookie.remove("user", { path: "/" });
  cookie.remove("destinationAdded", { path: "/" });
  cookie.remove("shipmentId", { path: "/" });
  cookie.remove("rateID", { path: "/" });
  cookie.remove("profile", { path: "/" });
  return true;
};

export const handleErrorMessage = (errors, name) => {
  if (name in errors) {
    return errors[name]?.message;
  }
  return "";
};
