import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 my-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Product Store</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
