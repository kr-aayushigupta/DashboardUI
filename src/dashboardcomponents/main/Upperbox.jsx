import React from "react";
import Image from "next/image";

// import connectToDatabase from "@/lib/mongodb";
// import User from "@/models/users";

// now you need to fetch details from database : no.of users and no.of females and no.of working professionals

 function Upperbox() {

    const countusers=0;

// try{
//     await connectToDatabase();
//     console.log("Upperbox connected to database")
//     countusers=await User.countDocuments();
// }catch(err){
//     console.log(err);
// }
    

  return (
    <div className=" my-6 ml-4">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="min-h-40 min-w-40 rounded-2xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-800 ">
          <div className="flex justify-center items-center">
            <Image
              src="/atom.png"
              alt="React logo"
              width={80}
              height={80}
              priority
              className="mt-2"
            />
          </div>

          <div>Registered Users</div>
          {/* <div>{countusers}</div> */}
          
        </div>

        <div className="min-h-40 min-w-40 rounded-2xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-800 ">
          <div className="flex justify-center items-center">
            <Image src="/pie.png" alt="Count" width={80} height={80} priority className="mt-2" />
          </div>

          <div>Profession</div>
        </div>

        <div className="min-h-40 min-w-40 rounded-2xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-800 ">
          <div className="flex justify-center items-center">
            <Image
              src="/transwoman.png"
              alt="GEnder"
              width={80}
              height={80}
              priority
              className="mt-2"
            />
          </div>

          <div>Gender</div>
        </div>
      </div>
    </div>
  );
}

export default Upperbox;
