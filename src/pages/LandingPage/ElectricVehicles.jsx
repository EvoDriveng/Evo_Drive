import React from "react";
import vehicle from "../../assets/vehicles/vehicle.png";

const ElectricVehicles = () => {
  return (
    <section className="w-full bg-[#FFFF] rounded-2xl md:rounded-[36px] flex flex-col items-center px-3 mt-10 py-2">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="font-clash font-semibold text-black text-center text-[23px] md:text-4xl mt-4 max-w-lg mb-2">
          Electric Vehicles
          <br />
          <span className="text-blue-500">Are Coming.</span>
        </h2>

        <p className="px-4 py-1 rounded-full text-sm font-archivo max-w-xl text-center">
          EVODrive is preparing for Nigeria's EV Future including charging
          stations visibility and and EV-friendly rentals.
        </p>
      </div>
      <div className="overflow-hidden rounded-4xl flex flex-col pt-4">
        <img
          src={vehicle}
          alt="Vehicle"
          className="h-70 md:h-98 w-full object-center object-cover md:rounded-[100px] rounded-4xl"
        />
      </div>
    </section>
  );
};

export default ElectricVehicles;
