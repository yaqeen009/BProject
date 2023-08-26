interface ContentInfo{
    name: string,
}
const DashBoadrContent:React.FC<ContentInfo> = ({name}) => {
    return (
        <div className='DashBoardContent'>
            <div className='h-[25vh] w-[20vw] bg-white border-2 rounded-lg mx-3 my-5 hover:scale-110 hover:duration-500 duration-500'>
                <div className="h-[20vh]  bg-[#764AF3] rounded-t-lg"></div>
                <p className="text-center">{name}</p>
            </div>
        </div>
    );
};

export default DashBoadrContent;