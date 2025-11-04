export const Button = (children) => {
  return (
    <>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 text-center me-2 mb-2"
      >
        {children}
      </button>
    </>
  );
};
