import Announcements from "./Announcements";
import ContentHolder from "./ContentHolder";

const DashBoard: React.FC = () => {
  return (
    <div className="DashBoard">
      <div className="h-[80vh] w-[65vw]  rounded-xl border-2">
        <div className="flex flex-col">
          <div className="basis-[30%]"><Announcements/></div>
          <div className="basis-[70%]"><ContentHolder/></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
