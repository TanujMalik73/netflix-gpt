const Maincontainertitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-20  w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl text-white font-serif my-6">{title}</h1>
      <p className="w-80 font-bold text-white my-4">{overview}</p>
      <div>
        <button className="text-black bg-white p-2  font-bold rounded-lg text-xl  w-32 hover:opacity-70">
          Play
        </button>
        <button className="text-black bg-gray-200 opacity-50 p-2 rounded-lg text-xl mx-4 w-32 hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Maincontainertitle;
