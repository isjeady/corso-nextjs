import React, { FC, PropsWithChildren } from "react";
import Menu from "../Menu";

const LayoutDetails: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="w-full py-2 mx-auto text-center gap-2 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          modifica
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Elimina
        </button>
      </div>
      {children}
    </div>
  );
};

export default LayoutDetails;
