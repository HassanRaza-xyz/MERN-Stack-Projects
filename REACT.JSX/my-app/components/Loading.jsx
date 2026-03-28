import { useState, useEffect } from "react";
const DashboardSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
      {loading 
      ? Array(6)
      .fill(0)
      .map((_, idx ) => (
        <div key={idx} className="h-40 bg-gray-300 rounded-lg animate-pulse"></div>
      )
    ) : Array(6)
    .fill(0)
    .map((_, idx) => (
      <div key={idx} className="h-40 bg-blue-200 rounded-lg flex items-center text-xl font-bold ">Card {idx+1}</div>
    ) )}
    </div>
  );
};
export default DashboardSkeleton;
