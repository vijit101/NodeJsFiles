// Please don't change the pre-written code
// Import the necessary modules here

import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  // Write your code here
  let alluser = await userModel();
  let userdata = alluser.data;
  console.log(userdata);
  return res.render('index',{users: userdata.users});
};
