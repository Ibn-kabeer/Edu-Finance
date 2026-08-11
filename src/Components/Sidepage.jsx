import { Link } from "react-router-dom";

import Group from "../assets/Group.png";
import DashboardIcon from "../assets/_2/Content.png";
import ExpensesIcon from "../assets/_5/expenses.png";
import IncomeIcon from "../assets/_2/image.png";
import AiAssistantIcon from "../assets/_2/ai assistant.png";
import SettingsIcon from "../assets/settings.png";

const Sidepage = () => {
  return (
    <>
      <div>
        <div className="bg-black h-screen w-[280px]">

          {/* Logo */}
          <img
            src={Group}
            alt="EduFinance Logo"
            className="p-10"
          />

          {/* Navigation */}
          <div className="grid">

            <Link to="/Dashboard">
              <button className="hover:bg-gray-700 transition duration-300">
                <img
                  src={DashboardIcon}
                  alt="Dashboard"
                />
              </button>
            </Link>

            <Link to="/Expenses">
              <button className="hover:bg-gray-700 transition duration-300">
                <img
                  src={ExpensesIcon}
                  alt="Expenses"
                />
              </button>
            </Link>

            <Link to="/Income">
              <button className="hover:bg-gray-700 transition duration-300">
                <img
                  src={IncomeIcon}
                  alt="Income"
                />
              </button>
            </Link>

            <Link to="/Aiassistant">
              <button className="hover:bg-gray-700 transition duration-300">
                <img
                  src={AiAssistantIcon}
                  alt="AI Assistant"
                />
              </button>
            </Link>

            <Link to="/Settings">
              <button className="hover:bg-gray-700 transition duration-300">
                <img
                  src={SettingsIcon}
                  alt="Settings"
                />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidepage;