import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import { DaySchedule } from "../../mocks/mockTypes";
import "./Calendar.css";



const CalendarPage: React.FC = () => {
  const [days, setDays] = useState<DaySchedule[]>([]);

  useEffect(() => {
    const fetchMealPlan = async () => {
      try {

        // Make an API call to the backend
        const response = await fetch("http://localhost:4006/mealplan/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Include the access token
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch meal plan: ${response.statusText}`);
        }

        const data: DaySchedule[] = await response.json();
        setDays(data);
      } catch (err) {
        console.error("Error fetching meal plan:", err);
      }
    };

    fetchMealPlan();
  }, []);

  const navItems = [
    { label: "Homepage", path: "/homepage" },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="calendar-page">
      <Navbar brand="Forkcast" items={navItems} />

      <main className="main-content">
        <div className="content-container">
          {days.length > 0 ? (
            <Calendar month="2025-04" days={days} />
          ) : (
            <p>Loading meal plan...</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalendarPage;
