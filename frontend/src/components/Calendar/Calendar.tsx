import React from "react";
import "./Calendar.css";

interface MealTask {
  time: string;
  recipe: string;
}

interface DaySchedule {
  day: number;
  schedule: MealTask[];
}

interface CalendarProps {
  month: string;
  days: DaySchedule[];
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC<CalendarProps> = ({ month, days }) => {
    const firstDay = new Date(`${month}-01`).getDay();

    const [year, monthNum] = month.split("-").map(Number);
    const daysInMonth = new Date(year, monthNum, 0).getDate();

    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
    <div className="calendar-container">
        <h2 className="calendar-title">Meal Plan - {month}</h2>
        <div className="calendar-grid">
        {daysOfWeek.map((day) => (
            <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, index) => (
            <div key={"empty-" + index} className="calendar-day empty"></div>
        ))}
        {calendarDays.map((day) => {
            const daySchedule = days.find((item) => item.day === day);
            return (
            <div key={day} className="calendar-day">
                <span className="calendar-date">{day}</span>
                {daySchedule?.schedule.map((task, index) => (
                <p key={index} className="calendar-task">{task.time}: {task.recipe}</p>
                ))}
            </div>
            );
        })}
        </div>
    </div>
    );
};

export default Calendar;
