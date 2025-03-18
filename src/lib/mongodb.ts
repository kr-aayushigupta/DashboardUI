import mongoose from 'mongoose';

// use non-null assertion operator ! it tells ts that something that looks like it coulld be null ,it can trust you that its not null
const MONGODB_URI=process.env.MONGO!;

if(!MONGODB_URI){
    throw new Error ("Please define mongo environment variable")
}

async function connectToDatabase(){
    if(mongoose.connection.readyState===1){
        return mongoose;
    }

    // By default, Mongoose queues operations if the database is not connected yet.
    // Setting false ensures that queries fail immediately if MongoDB is unavailable.
    const opts={
        bufferCommands:false,
    }
    await mongoose.connect(MONGODB_URI,opts);
    return mongoose;

}
export default connectToDatabase;