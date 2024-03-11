import useTheme from "../../hooks/useTheme";
import { Outlet } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (): JSX.Element => {
  const { isDark, changeTheme } = useTheme();

  return (
    <>
      <nav className="w-full px-20 py-6 flex justify-between items-center shadow-primary dark:bg-dark-elements">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Where in the world?
        </h2>
        <button
          onClick={() => changeTheme()}
          className="p-1 flex items-center gap-2 text-xl font-semibold"
        >
          {isDark ? (
            <>
              <IoSunny />
              <p>Light Mode</p>
            </>
          ) : (
            <>
              <IoMoon />
              <p>Dark Mode</p>
            </>
          )}
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
