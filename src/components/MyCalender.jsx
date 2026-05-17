import React, { useState } from "react";

const MyCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get month/year info
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Start of month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null); // empty cells
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Helpers
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", ];

  return (
    <div
      className="w-[368px] h-[372px] p-4 rounded-[12px]  mb-[-40px] "
      
    >
      {/* Header: Month & Navigation */}
      <div className="flex justify-between items-center mb-8 mt-[-20px]">
        
        <h3
  className="text-[20px] font-outfit font-semibold leading-[25px] tracking-[0px] opacity-100"
  style={{
    width: "107px",
    height: "25px",
    opacity: 1,
    position: "relative",
    lineHeight: "25px",
    letterSpacing: "0%",
    verticalAlign: "middle",
    
    color: "var(--GoInt-Text, #212322)",
  }}
>
  {currentDate.toLocaleString("default", { month: "short" })} {year}
</h3>

<span className="flex gap-4">  
 <button onClick={handlePrevMonth} className="text-[#2A2A2A] ">
          &lt;
        </button>
        <button onClick={handleNextMonth} className="text-[#2A2A2A] ">
          &gt;
        </button>
</span>
       
      </div>

      {/* Weekday Row */}
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
  {weekdays.map((day) => (
    <div
      key={day}
      className="flex items-center justify-center"
      style={{
        width: "29px",
        height: "23px",
        opacity: 1,
        left: "-0.3px",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "18.89px",
        lineHeight: "23px",
        letterSpacing: "0%",
        textAlign: "center",
        verticalAlign: "middle",
        color: "#2D2D2D",
      }}
    >
      {day}
    </div>
  ))}
</div>


      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`h-10 flex items-center  justify-center rounded-full cursor-pointer
              ${
                isToday(day)
                  ? "bg-[#005A58] text-white font-bold"
                  : day
                  ? "hover:bg-[#81FD48]/20"
                  : ""
              }
              
            ` } 
            style={{
             
    
    opacity: 1,
    top: "96.05px",
    left: "211.47px",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "18.89px",
    lineHeight: "23px",
    letterSpacing: "0%",
    textAlign: "center",
    verticalAlign: "middle",}}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalender;
