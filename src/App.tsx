import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DWindow from "./Pages/DWindow";
import SWindow from "./Pages/SWindow";
import DashBoardTab from "./Components/NavPanel/DashBoardTab";
import SystemsTab from "./Components/NavPanel/SystemsTab";

function App() {
  return (
    <BrowserRouter>
      <p className="text-5xl ml-8 mt-4 text-[#6D6C6C]">
        Welcome Back <br /> <span className="text-4xl">DoluDolu! </span>
      </p>
      <div className="mt-2 flex flex-row ">
        <nav className="basis-[5%]">
          <div className="NavBar">
            <div className="flex flex-col drop-shadow-md bg-white divide-y divide-solid  w-[5vw]">
              <NavLink
                to="/"
                className={({ isActive}) =>
                  isActive ? "bg-[#5A37E8] opacity-75" : "bg-white"
                }
              >
                <DashBoardTab />
              </NavLink>
              <NavLink to="/SWindow" className={({ isActive}) =>
                  isActive ? "bg-[#5A37E8] opacity-75" : "bg-white"
                }>
                <SystemsTab />
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="basis-[90%]">
          <Routes>
            <Route path="/" element={<DWindow />} />
            <Route path="/SWindow" element={<SWindow />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
