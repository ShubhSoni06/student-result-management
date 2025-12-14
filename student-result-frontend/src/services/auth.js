export const login = (email, password) => {
  if (email === "admin@mail.com") {
    return { role: "ADMIN", token: "fake-token" };
  }
  return { role: "STUDENT", token: "fake-token" };
};
