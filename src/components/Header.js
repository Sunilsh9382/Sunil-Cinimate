import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
  });

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    e.target.reset();

    return navigate(`/search?q=${searchValue}`);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const activeClass =
    "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-lg";
  const inActiveClass =
    "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg";

  return (
    <header className="border-b-2">
      <nav className="bg-white border-gray-200 p-auto sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Cinemate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cinemate-Sunil
            </span>
          </Link>

          <div id="mobile-nav" className="flex items-center gap-2 md:order-2">
            {/* --- Dark Mode Toggle (placed BEFORE Search nav) --- */}
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
            >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H1.75m15.364-6.364L18.5 6.75M5.5 17.25l1.136 1.136m0-12.772L5.5 6.75M18.5 17.25l-1.136 1.136M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.75 12.84c-.6.07-1.21.11-1.84.11a9 9 0 1 1-9-9c.63 0 1.25.04 1.84.11A.75.75 0 0 1 13 3a10.5 10.5 0 1 0 10.5 10.5.75.75 0 0 1-.75-.66z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded={!hidden}
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* desktop search */}
            <div className="hidden relative md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar-desktop"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                  required
                />
              </form>
            </div>

            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={!hidden}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* collapsible area */}
          <div
            className={`${
              hidden ? "hidden " : ""
            }justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            {/* mobile search */}
            <div className="relative mt-3 md:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar-mobile"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search..."
                autoComplete="off"
                required
              />
            </div>

            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie/popular"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie/top"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
