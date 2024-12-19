import React from "react";
import useStore from "../store/store"
import { StoreType } from "../types/chainCalculator";

const InitialValueInput = () => {
  const {initialValue, setInitialValue} = useStore((state: StoreType) =>  state);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    const formattedValue = +value;
    if(!isNaN(formattedValue)){
      setInitialValue(formattedValue);
    }
  }

  return (
    <div className='absolute top-[184px] -left-32 w-[115px]' id="func-input">
        <p className='text-center text-white font-medium text-xs bg-CustomYellow rounded-2xl p-1'>Initial Value of x</p>
        <div className='border-2 border-CustomYellow rounded-2xl mt-1 flex bg-white'>
            <input className='w-3/5 rounded-s-2xl focus:outline-none p-2 px-2 text-lg' value={initialValue} onChange={onChange} />
            <p className='bg-[#FFEED5] w-[1px]'></p>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-4 h-4 border-[#dbdbdb] border-2 rounded-full flex justify-center items-center">
                <span className="w-2 h-2 bg-[#66A3FF] rounded-full" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default InitialValueInput