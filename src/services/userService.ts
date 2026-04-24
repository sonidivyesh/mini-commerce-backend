import prisma from "../config/prisma.js";

export const createUserService = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await prisma.user.create({
    data,
  });
};

export const getAllUsersService = async () => {
  return await prisma.user.findMany();
};
