import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full items-center justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-8xl sm:text-9xl md:text-[150px] 2xl:text-[200px] font-extrabold mx-auto leading-none text-gray-800">
          404
        </h1>

        <h2 className="text-3xl sm:text-5x1 md:text-6xl 2xl:text-7x1 font-semibold mx-auto leading-[1.2] mt-6">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-xs sm:max-w-lg 2x1:max-w-xl m-auto text-lg text-gray-600">
          Oops! It looks like you've followed a broken link or entered a URL
          that doesn't exist on our site.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer font-medium"
        >
          Go back to Home
        </button>
        <button
          onClick={() => navigate("/ai")}
          className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer font-medium text-gray-700"
        >
          Explore AI Tools
        </button>
      </div>
    </div>
  );
};

export default NotFound;
