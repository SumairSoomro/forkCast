import React from "react";
import { Menu} from 'lucide-react'; //ChevronLeft, ChevronRight 
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const toProfile = (): void => {
    navigate('/profile');
  };

  const toCalendar = (): void => {
    navigate('/calendar');
  };

  const toFavorites = (): void => {
    navigate('/favorites');
  };

  return (
    <div>
          {/*div at top for navbar*/}
      <nav className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Forkcast</div>
            
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="hover:text-green-200">Login</a>
              <a href="#" className="hover:text-green-200">Sign Up</a>
              <a href="#" className="hover:text-green-200">Contact Us</a>
            </div>
            
            <div className="md:hidden">
              <button className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        <button className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700" onClick={toCalendar}>
            <h1 className="text-xl font-bold">Calendar</h1>
          </button>

          <button className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700" onClick={toFavorites}>
            <h1 className="text-xl font-bold">Favorites</h1>
          </button>

          <button className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700" onClick={toProfile}>
            <h1 className="text-xl font-bold">Profile</h1>
          </button>

        


    {/*search bar*/}

    {/*recently viewedd recipes*/}


    {/*popular recipes*/}

    {/*footer*/}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to My Website!</h1>
        <p>This is the homepage.</p>
      </div>
    </div>

  );
};

export default HomePage;
