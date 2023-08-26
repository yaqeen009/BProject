import DashBoard from "../Components/Dashboard/DashBoard";
import UserInfo from "../Components/UserInfo/UserInfo";

const DWindow: React.FC = () => {
  return (
    <div className="DWindow">
      <div className="flex flex-row ">
        <div className="basis-[60%] mx-3">
          <DashBoard />
        </div>
        <div className="basis-[30%] ml-3 ">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default DWindow;
