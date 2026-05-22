import React, { useState } from "react";

const MyCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

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

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="w-full max-w-[350px] mx-auto p-4 rounded-[12px]">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-[#212322]">
          {currentDate.toLocaleString("default", { month: "short" })} {year}
        </h3>

        <div className="flex gap-3">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            &lt;
          </button>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* WEEKDAYS */}
      <div className="grid grid-cols-7 text-center mb-2 text-xs sm:text-sm font-medium text-gray-600">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center rounded-full text-sm sm:text-base cursor-pointer transition
              ${
                isToday(day)
                  ? "bg-[#005A58] text-white font-semibold"
                  : day
                  ? "hover:bg-[#81FD48]/20"
                  : ""
              }
            `}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalender;
