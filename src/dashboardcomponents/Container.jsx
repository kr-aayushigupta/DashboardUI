import React from "react";
import Upperbox from "@/dashboardcomponents/main/Upperbox";
import Sidebox from "@/dashboardcomponents/main/Sidebox";
import Lowerbox from "@/dashboardcomponents/main/Lowerbox";
const Container = () => {


{/* If user is login then show him this */}
  return (
    // <div>
    //   <div className="grid grid-rows-2 grid-cols-2 gap-4 w-full h-full">
    //     <div className="col-span-1">
    //       <Upperbox />
    //       <Lowerbox />
    //     </div>
    //     <div className="col-span-1">
    //       <Sidebox />
    //     </div>
    //   </div>
    // </div>

// ======================================================================
  //   <div className="w-full h-full p-4">
   
  //   <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full lg:grid-cols-1">
      
  //     <div className="col-span-1 space-y-4">
  //       <Upperbox />
  //       <Lowerbox />
  //     </div>
      
      
  //     <div className="col-span-1">
  //       <Sidebox />
  //     </div>
  //   </div>
  // </div>

  // ===================================================================

  <div className="w-full h-full">
  {/* Responsive Grid Layout */}
  <div className="w-full h-[100%] grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Left Section (Upperbox + Lowerbox) */}
    <div className="flex flex-col h-full space-y-6">
          <div className="h-[25%] min-h-[150px]">
            <Upperbox />
          </div>
          <div className="h-[75%] min-h-[200px]">
            <Lowerbox />
          </div>
        </div>

    {/* Right Section (Sidebox) */}
    <div className="rounded-4xl overflow-auto bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700">
      <Sidebox />
    </div>
  </div>
</div>
  );
};

export default Container;
