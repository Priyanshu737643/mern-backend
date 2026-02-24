import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

//! addUser
const addUser = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
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

const login = async (req, res) => {
  const { email, password } = req.body;
  //? ({email:email}) = > key email : extracted email === ({email})
  const found = await userModel.findOne({ email });
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
      res.status(200).json({ message: "Login Success" });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User Not Found" });
  }
};

export { addUser, showUsers, deleteUser, login };
