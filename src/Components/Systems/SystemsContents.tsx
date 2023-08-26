interface SiteProps{
    siteName: string,
    siteLink: string
}

const SystemsContents: React.FC<SiteProps> = ({siteName, siteLink}) => {    
  return (
    <div className="SystemsContents">
      <div>
        <a href={siteLink}>
          <div className="h-[20vh] w-[50vw] bg-[#DEF7F9] my-4 border-2 rounded-lg flex flex-row items-center hover:bg-blue-400 hover:duration-1000 hover:text-white">
            <p className="basis-[80%] ml-8 text-[36px]">{siteName}</p>
            <img src="/assets/Arrow.svg" alt="" className="basis-[20%] h-[20px] w-[20px]"/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SystemsContents;
