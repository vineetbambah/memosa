import {House, Notebook, NotebookPen, CircleUserRound} from "lucide-react";
const Home = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="p-2 rounded-md h-2/4 left-1 bg-white shadow-[#8A63D2]/30 shadow-lg absolute flex flex-col items-center space-evenly justify-around">
      <div></div>
        <div>
          <House className="scale-150 m-auto mb-6 cursor-pointer"  />
          <a><Notebook className="scale-150 m-auto mb-6 cursor-pointer"/></a>
          <a><NotebookPen className="scale-150 mb-6 m-auto cursor-pointer"/></a>
          <button className="bg-purple-200 rounded-md p-2 w-12 text-xl cursor-pointer font-bold">+</button>
        </div>
        <a><CircleUserRound className="scale-150 cursor-pointer"/></a>
      </div>
      <div className=" w-full h-screen">
      <h1 className="font-bold text-2xl">Memosa <span className="text-[#8A63D2]">AI</span></h1>
      </div>
      <div className="bg-blue-200 fixed bottom-2 w-1/2 rounded-md">dock</div>
    </div>
  );
}
export default Home;