import AnnouncementItem from "./AnnouncementItem";

const Announcements: React.FC = () => {
  return (
    <div className="Announcements">
      <div className="w-[60vw] h-[30vh]  mt-3 mx-9 overflow-x-auto whitespace-nowrap flex flex-row">
          <AnnouncementItem itemNumber={1}/>
          <AnnouncementItem itemNumber={2}/>
          <AnnouncementItem itemNumber={3}/>
      </div>
    </div>
  ); 
};

export default Announcements;
