import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  bio:{
    type: String,
  },
  skills:{
    type: [String],
  },
  resume:{
    type: String, //url of the resume
  },
  resumeOriginalName:{
    type: String,
  },
  profilePicture:{
    type: String, //url of the profile picture
    default: ""
  },
  company:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company" 
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{timestamps: true})

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;