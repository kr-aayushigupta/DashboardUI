import bcrypt from 'bcryptjs';

import { NextResponse } from 'next/server';
import User from '@/models/users';
import connectToDatabase from '@/lib/mongodb';


export async function POST(request:Request){
console.log("---------------------------------------------");

    // await request
    const {name,email,password,confirmpassword,profession,maritalstatus,gender}=await request.json();

    const isValidEmail=(email:string)=>{
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!name || !email || !password || !confirmpassword){
        return NextResponse.json({message:"All fields are required"},{status:400})
    }
    if(!isValidEmail(email)){
        return NextResponse.json({message:"Invalid Email Format"},{status:400})
    }
    if(confirmpassword!== password){
        return NextResponse.json({message:"Password do not match"},{status:400})
    }
    if(password.length<6){
        return NextResponse.json({message:"Password must be of atleast 8 characters"},{status:400})
    }


    try{

        // wait till connection to database is established
        console.log("------------------------1--------");
        await connectToDatabase();
        console.log("-----------------------2---------");
        
        
        // wait till we search the database for an existing user
        const existingUser=await User.findOne({email});

        if(existingUser){
            return NextResponse.json({message:"User Already Exists "},{status:400})
        }
        // wait till we hash the password
        const hashedPassword=await bcrypt.hash(password,10);
        // if new user create new user object
        const newUser=new User({
            email,
            name,
            password:hashedPassword,
            gender,
            profession,
            maritalstatus,

        });
        // wait till we save the new user details in database
        await newUser.save();
        
        return NextResponse.json({message:"User created"},{status:201})

    }catch(error){
        return NextResponse.json({message:"Something went Wrong here"},{status:500})

    }
}
