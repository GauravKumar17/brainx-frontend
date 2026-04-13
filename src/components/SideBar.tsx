import { BugIcon } from "../icons/Bug";
import { LinkIcon } from "../icons/Link"
import { VideoIcon } from "../icons/Video";
import TweetIcon from "../icons/tweet.svg";
import { DocIcon } from "../icons/Doc";
import { HashIcon } from "../icons/Hash";
import LogoutButton from "./Logout";
import SettingIcon from "../icons/Setting.svg";
import ReferIcon from "../icons/refer.svg";
import LogoutIcon from "../icons/Logout.svg";
import { Link } from "react-router-dom";
import brainx from "../icons/brainx2.png";
function SideBar() {
    const username = localStorage.getItem("username") || "User"; // Get username from localStorage
    return (
        <div className='main h-full w-full p-4 flex flex-col bg-black  ' >
            <div className="logo text-3xl font-normal font-serif flex gap-2 text-blue-600 mt-5 "><img src={brainx} className=" h-[8vh] " alt="brainx logo" /></div>
            <div className="container flex flex-col justify-between h-full w-full">
            <div className="flex flex-col justify-between gap-4 p-3 text-xl mt-5 text-white">
                <div className="cont flex gap-4 pl-3 h-[6vh] text-2xl items-center hover:text-blue-600 hover:underline hover:bg-[#242627] hover:rounded-xl"> <Link to="/home">Workspace </Link></div>
                <div className="tweets flex gap-4 pl-3 h-[6vh] items-center hover:text-blue-600 hover:underline hover:bg-[#242627] hover:rounded-xl"><img src={TweetIcon} alt="Tweet" className="
                h-8 w-8  " /> <Link to="/home/tweets">Tweets</Link></div>
                <div className="videos flex gap-4 pl-3 h-[6vh] items-center hover:text-blue-600 hover:underline hover:bg-[#242627]  hover:rounded-xl"><VideoIcon size="lg"/><Link to="/home/videos">Videos</Link></div>
                <div className="doc flex gap-4 pl-3 h-[6vh] items-center hover:text-blue-600 hover:underline hover:bg-[#242627] hover:rounded-xl"><DocIcon size="lg"/> <Link to="/home/docs">Documents</Link></div>
                <div className="links flex gap-4 pl-3 h-[6vh] items-center hover:text-blue-600 hover:underline hover:bg-[#242627] hover:rounded-xl"><LinkIcon size="lg"/><Link to="/home/links">Links</Link></div>
                <div className="tags flex gap-4 pl-3 h-[6vh] items-center hover:text-blue-600 hover:underline hover:bg-[#242627] hover:rounded-xl"><HashIcon size="lg"/><Link to="/home/tags">Tags</Link> </div>
            </div>
            <div className="logout h-[25vh] bg-[#242627]  text-white p-4 rounded-lg flex flex-col  transition duration-300 cursor-pointer">
                <div className="cont flex gap-2 items-center p-3 mb-2   ">
                <div className="icon text-2xl mb-2 border-2 rounded-full text-white bg-black p-2"><BugIcon size="lg" /></div>
                <div className="text-white text-2xl mb-2   ">{username}</div>
                </div>
                
                 <div className="tweets flex gap-4 pl-3 h-[6vh] text-xl items-center hover:text-blue-600 hover:underline hover:bg-black hover:rounded-xl"><img src={SettingIcon} alt="Settings" className="
                h-8 w-8  " /> <Link to="/home/settings">Setting</Link></div>
                <div className="tweets flex gap-4 pl-3 h-[6vh]  text-xl  items-center hover:text-blue-600 hover:underline hover:bg-black hover:rounded-xl"><img src={ReferIcon} alt="Refer" className="
                h-8 w-8  " /> <Link to="/home/refer">Refer</Link></div>
                <div className="tweets flex gap-4 pl-3 h-[6vh]  text-xl  items-center hover:text-blue-600 hover:underline hover:bg-black hover:rounded-xl"><img src={LogoutIcon} alt="Tweet" className="
                h-7 w-7  " /><LogoutButton /></div>
                </div>
                
            </div>
            </div>
    );
}

export default SideBar;
