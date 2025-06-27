import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';
 
const SpecialityMenu= () => { 
    return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of medical specialities.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-center"
          >
            <img
              className="w-16 h-16 rounded-full border shadow-sm"
              src={item.image}
              alt={`${item.speciality} icon`}
            />
            <p className="mt-2 text-sm font-medium capitalize">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
