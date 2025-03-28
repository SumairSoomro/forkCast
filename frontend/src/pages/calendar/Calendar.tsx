import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Calendar from "../../components/Calendar/Calendar";
import "./Calendar.css";

const CalendarPage: React.FC = () => {
  const navItems = [
    { label: 'Homepage', path: '/homepage' },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: 'Contact Us', path: '/contact' }
  ];

  const mealPlan = [
    { day: 1, schedule: [{ time: "08:00 AM", recipe: "Avocado Toast" }] },
    { day: 5, schedule: [{ time: "12:00 PM", recipe: "Grilled Chicken Salad" }] },
    { day: 12, schedule: [{ time: "06:00 PM", recipe: "Pasta Primavera" }] },
    { day: 20, schedule: [{ time: "07:00 PM", recipe: "Salmon & Veggies" }] },
  ];

  return (
    <div className="calendar-page">
      <Navbar brand="Forkcast" items={navItems} />

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <Calendar month="2025-04" days={mealPlan} />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <h1 className="footer-title">Welcome to Forkcast!</h1>
          <p className="footer-text">Plan and prep your meals with ease.</p>
        </div>
      </footer>
    </div>
  );
};

export default CalendarPage;
