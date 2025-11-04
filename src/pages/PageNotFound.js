import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <main className="max-w-full">
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-6">
          <p className="text-7xl text-gray-700 font-bold dark:text-white decoration-8">
            404, Oops!
          </p>

          <div className="max-w-xl m-8">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404-PageNotFoundImage"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 text-center me-2 mb-2"
            >
              Back to Home
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 text-center me-2 mb-2"
            >
              Back to Cinimate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
