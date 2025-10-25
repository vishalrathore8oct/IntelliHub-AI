import { useEffect, useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ImageSkeleton = () => (
  <div className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3 animate-pulse">
    <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
    <div className="absolute bottom-3 left-6">
      <div className="h-4 w-24 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  const fetchCreations = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreations();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <ImageSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (creations.length === 0) {
      return (
        <div className="flex justify-center items-center h-full w-full">
          <p className="text-gray-500">No published creations found.</p>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3"
          >
            <img
              src={creation.content}
              alt=""
              className="w-full h-full object-cover rounded-lg aspect-square"
            />
            <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-linear-to-b from-transparent to-black/80 text-white rounded-lg">
              <p className="text-sm hidden group-hover:block text-white mb-2">
                {creation.prompt}
              </p>
              <div className="flex gap-1 items-center text-white">
                <p>{creation.likes.length}</p>
                <Heart
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user?.id)
                      ? "fill-red-500 text-red-600"
                      : "text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold">Community Creations</h1>
      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3">
        {renderContent()}
      </div>
    </div>
  );
};

export default Community;
