import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senac:123@cluster0.g9617zn.mongodb.net/senac");


let db = mongoose.connection;

export default db;