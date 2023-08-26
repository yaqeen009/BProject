

const UserInfo: React.FC = () => {
    const name: string = "Doludolu";
    const mail: string = "doludolu@st.edu.ug.gh";
    const course: string = "Computer Engineering"
    return (
        <div className="h-[80vh] w-[25vw] drop-shadow-sm rounded-xl border-[1px] flex flex-col items-center">
            <div className="">
                <img src="/assets/user.png" alt="" className="mt-[8vh]"/>
            </div>
            <div className="text-[24px] text-[#6C6969] mt-[20px]">
                <p>{name}</p>
                <p>{mail}</p>
                <p>{course}</p>
            </div>
            <div className="mt-[15vh] ">
                <a href="" className="px-[15px] py-2 bg-[#4A6FF3] border-[0.5px] rounded-2xl text-white hover:bg-[#5A37E8] hover:text-[#3b191e] duration-200 hover:duration-200">Sign Out</a>
            </div>
        </div>
    );
};

export default UserInfo;