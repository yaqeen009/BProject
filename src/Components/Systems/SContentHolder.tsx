
import SystemsContents from "./SystemsContents";

const SContentHolder = () => {
  return (
    <div className="ContentHolder">
      <div className="w-[60vw] h-[40vh]  m-10 flex flex-col items-center">
        <div className="basis-2">
          <SystemsContents siteName="MIS" siteLink="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login"/>
        </div>
        <div className="basis-2">
          <SystemsContents siteName="STS" siteLink="https://sts.ug.edu.gh/"/>
        </div>
        <div className="basis-2">
          <SystemsContents siteName="SAKAI" siteLink="https://sakai.ug.edu.gh/portal"/>
        </div>
      </div>
    </div>
  );
};

export default SContentHolder;
