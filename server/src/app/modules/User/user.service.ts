import { PrismaClient } from "@prisma/client";
// import { UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: any) => {
  // console.log(data);
  const userData = {
    name: data.name,
    email: data.email,
    role: data.role,
    passwored: data.passwored,
  };

  const user = await prisma.user.create({ data: userData });

  return user;
};

export const userService = { createUser };
