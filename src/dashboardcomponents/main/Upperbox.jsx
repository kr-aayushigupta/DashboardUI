"use client";
import React from "react";
import Image from "next/image";
// import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Upperbox() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    femaleUsers: 0,
    workingUsers: 0,
  });

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const resp = await fetch("/api/count");
        if (!resp.ok) {
          throw new Error(
            "Failed to fetch user counts : error from upperbox useeffect"
          );
        }
        const data = await resp.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching counts from upperbox catch:", error);
      }
    };
    fetchCount();
  }, []);

  return (
    
      <div className="grid grid-cols-3 gap-6 h-[100%]">

        <div className=" rounded-4xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-700 flex flex-col justify-center items-center">


          <div className="flex justify-center items-center">
            <Image
              src="/atom.png"
              alt="React logo"
              width={100}
              height={100}
              priority
              className="mt-2"
            />
          </div>

          <div className="break-words w-full overflow-hidden text-wrap text-3xl pt-2">
            <div >Registered Users</div>
            <div className="font-semibold  text-4xl">{stats.totalUsers}</div>
          </div>
        </div>

        <div className=" rounded-4xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-700 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/pie.png"
              alt="Count"
              width={100}
              height={100}
              priority
              className="mt-2"
            />
          </div>

          <div className="break-words w-full overflow-hidden text-wrap text-3xl pt-2">
            <div> Working Users</div>
            <div className="font-semibold  text-4xl">
              {stats.workingUsers}/{stats.totalUsers}
            </div>
          </div>
        </div>

        <div className=" rounded-4xl text-center text-white bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-700 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/transwoman.png"
              alt="Gender"
              width={100}
              height={100}
              priority
              className="mt-2"
            />
          </div>

          <div className="break-words w-full overflow-hidden text-wrap text-3xl pt-4">
            <div>Females</div>
            <div className="font-semibold  text-4xl">
              {stats.femaleUsers}/{stats.totalUsers}
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Upperbox;
