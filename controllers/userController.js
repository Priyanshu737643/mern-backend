import userModel from "../models/userModel.js";

//! addUser
const addUser = async (req, res) => {
  const result = await userModel.create(req.body);
  res.json(result);
};

//! showUsers
const showUsers = async (req, res) => {
  const result = await userModel.find();
  res.json(result);
};

//! deleteUser
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await userModel.findByIdAndDelete(id);
  res.json(result);
};

export { addUser, showUsers, deleteUser };
