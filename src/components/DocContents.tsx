import { useState } from "react";
import DocsList from "./Doc";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function DocContents() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App h-screen w-screen flex bg-black overflow-hidden ">
      <div className="side w-[20vw] h-full ">
        <SideBar />
      </div>
      <div className="main w-[80vw] h-full mt-6 mr-8 flex flex-col overflow-hidden">
        <div className=" w-full bg-[#242627]  rounded-xl ">
          <NavBar
            title=" Docs You Read ..."
            searchValue={searchTerm}
            onSearch={setSearchTerm}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-[#242627]  rounded-xl mt-5">
          <div className="flex gap-4 flex-wrap">
            <DocsList searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocContents;
