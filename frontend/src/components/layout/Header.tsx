import TopHeader from "../headerComponent/TopHeader";
import MiddleHeader from "../headerComponent/MiddleHeader";
import Navbar from "../headerComponent/Navbar";

export const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <TopHeader />
      <MiddleHeader />
      <Navbar />
    </div>
  );
};
