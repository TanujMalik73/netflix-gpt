const Maincontainertitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] md:pt-80 px-5 md:px-20 w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-[15px] md:text-5xl text-white font-serif md:my-6">{title}</h1>
      <p className=" w-44 md:w-80 text-[10px] md:text-base md:font-bold text-white opacity-60 my-1 md:my-4">{overview}</p>
      <div>
        <button className="text-black bg-white opacity-40 md:opacity-100 md:p-2  font-bold rounded-lg  md:text-xl w-16 md:w-32 hover:opacity-70">
          Play
        </button>
        <button className="text-black bg-gray-200 opacity-40 md:p-2 rounded-lg md:text-xl mx-4 w-20 h-6 md:h-12 md:w-32 hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Maincontainertitle;
