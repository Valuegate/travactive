
import { useState, useEffect } from "react";

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  useEffect(() => {
    setIsOn(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={handleToggle}
      />

      <div
        className={`
          w-[35.09px] h-[19.25px]
          rounded-full
          relative
          transition-colors
          ${isOn ? "bg-[#023436]" : "bg-gray-300"}
        `}
      >
        <div
          className={`
            absolute
            
            top-[2px]
            w-[16.92px] h-[16.92px]
            bg-white
            rounded-full
            transition-all duration-200
            ${isOn ? "left-[18px]" : "left-[2px]"}
          `}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
