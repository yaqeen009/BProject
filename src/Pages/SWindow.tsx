import Systems from "../Components/Systems/Systems";
import UserInfo from "../Components/UserInfo/UserInfo";

const DWindow: React.FC = () => {
  return (
    <div className="SWindow">
      <div className="flex flex-row ">
        <div className="basis-[60%] mx-3">
          <Systems />
        </div>
        <div className="basis-[30%] ml-3 ">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default DWindow;
