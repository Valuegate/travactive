import api from "./api";

export const login = async (email, password,userType) => {
  const response = await api.post("/auths/sign-in", {
    email,
    password,
    userType
  });

  return response.data;
};