function Loader() {
  return (
    <div className="flex flex-wrap">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="rounded-lg p-2 bg-[#3b3a3a] m-2 shadow-gray-500 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="h-60 w-40 bg-[#4a4949] rounded"></div>

          {/* Text placeholders */}
          <div className="h-18 mt-2 space-y-2">
            <div className="h-4 w-32 bg-[#4a4949] rounded"></div>
            <div className="h-4 w-16 bg-[#4a4949] rounded"></div>
          </div>

          {/* Button placeholder */}
          <div className="h-8 w-16 mt-2 bg-[#4a4949] rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
