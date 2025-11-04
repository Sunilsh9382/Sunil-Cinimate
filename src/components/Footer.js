import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-10 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to ="/" className="hover:underline">
          Cinemate™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-base font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.instagram.com" target="_Blank" className="hover:underline me-4 md:me-6" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_Blank" className="hover:underline me-4 md:me-6" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_Blank" className="hover:underline me-4 md:me-6" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_Blank" className="hover:underline" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
