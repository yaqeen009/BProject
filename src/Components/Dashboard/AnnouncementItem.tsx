interface ItemProps{
 itemNumber: number
}

const AnnouncementItem: React.FC<ItemProps>  = ({itemNumber}) => {
    return (
        <div className="Item">
            <div className="h-[25vh] w-[20vw] bg-[#626262] m-5 border-2 rounded-lg hover:scale-110 hover:duration-500 duration-500">
                <p className="text-white m-4 mt-[20vh]">Announcement {itemNumber}</p>
            </div>
        </div>
    );
};

export default AnnouncementItem;