import bcrypt from "bcryptjs";
export const hashPassword = async (password) => {
  let salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const validatePassword = async (password, password2) => {
  return await bcrypt.compare(password, password2);
};
