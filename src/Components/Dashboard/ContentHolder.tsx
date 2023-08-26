import DashBoadrContent from "./DashBoadrContent";

const ContentHolder = () => {
  return (
    <div className="ContentHolder">
      <div className="w-[60vw] h-[40vh]  m-10 overflow-x-scroll flex flex-row items-center">
        <DashBoadrContent name="Announcements"/>
        <DashBoadrContent name="Past Questions"/>
        <DashBoadrContent name="Clubs"/>
        <DashBoadrContent name="Slides"/>
        <DashBoadrContent name="[Add Name]"/>
        <DashBoadrContent name="[Add Name]"/>
      </div>
    </div>
  );
};

export default ContentHolder;
