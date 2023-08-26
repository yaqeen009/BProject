const DashBoardTab: React.FC = () => {
  return (
    <div className="DashBoardTab">
      <div className="h-[40vh] flex items-center opacity-75  hover:bg-[#e83752] duration-300 hover:duration-300">
        <img
          src="/assets/dashboardicon.svg"
          alt=""
          className="h-[40px] w-[40px] mx-[11px]"
        />
      </div>
    </div>
  );
};

export default DashBoardTab;
