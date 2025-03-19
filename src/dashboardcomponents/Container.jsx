import React from "react";
import Upperbox from "@/dashboardcomponents/main/Upperbox";
import Sidebox from "@/dashboardcomponents/main/Sidebox";
import Lowerbox from "@/dashboardcomponents/main/Lowerbox";
const Container = () => {


{/* If user is login then show him this */}
  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-2 gap-4 w-full h-full">
        <div className="col-span-1">
          <Upperbox />
          <Lowerbox />
        </div>
        <div className="col-span-1">
          <Sidebox />
        </div>
      </div>
    </div>
  );
};

export default Container;
