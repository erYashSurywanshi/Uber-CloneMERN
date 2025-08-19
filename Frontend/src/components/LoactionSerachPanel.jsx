import React from "react";

const location = [
  "Rua do Comércio, Lisbon, Portugal",
  "Shibuya Crossing, Tokyo, Japan",
  "La Rambla, Barcelona, Spain",
  "Abbey Road, London, UK",
  "Lombard Street, San Francisco, USA ",
];

const LoactionSerachPanel = (props) => {
  return (
    <div>
      {
        location.map(function(elem,idx){
           return  <div key={idx} onClick={()=>{
            props.setvehiclePanel(true);
            props.setpalenopen(false);
           }} className=" flex items-center mx-3  border-2   border-gray-50 active:border-black rounded-xl justify-start gap-2  mt-2 ">
            <h2 className="h-7 w-12 ml-7 mt-2 flex items-center justify-center bg-gray-200 rounded-full px-1 py-1">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h3 className="font-semibold text-[15px]">
              {elem}
              
            </h3>
          </div>
    
          })
      }
    </div>
  );
};

export default LoactionSerachPanel;
