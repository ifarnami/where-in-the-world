import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-light-bg dark:bg-dark-bg min-h-screen dark:text-dark-text">
      <Outlet />
    </main>
  );
};

export default Layout;
