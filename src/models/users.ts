import mongoose,{Document,Model,Schema} from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    gender:string;
    profession:string;
    maritalstatus:string
    id:string;
}
const UserSchema:Schema<IUser> = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    profession:{
        type:String,
        required:true,
    },
    maritalstatus:{
        type:String,
        required:true,
    }
    
    
})
const User:Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",UserSchema,"iucusers");

export default User;