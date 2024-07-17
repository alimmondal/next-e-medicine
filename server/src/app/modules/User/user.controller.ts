import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  //   const user = req.body;
  console.log(req.body);
  const result = await userService.createUser(req.body);
  res.send(result);
};

export const userController = {
  createUser,
};
