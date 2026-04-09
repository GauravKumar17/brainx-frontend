import TypingComponent from "../assets/animations/TypingComponent";
import { BugIcon } from "../icons/Bug";
import  DiscordIcon from "../icons/discord.svg";
import  InstaIcon from "../icons/insta.svg";
import  TweetIcon from "../icons/tweet.svg";
import  GitIcon from "../icons/github.svg";
import  YoutubeIcon from "../icons/yt.svg";
import { useState } from "react";
import * as motion from "motion/react-client"
import SignupForm from "./SignupForm";
import VantaBackground from "../assets/animations/Vanta";
import SignInForm from "./SigninForm";
import brainx from "../icons/brainx2.png";
import brainx2 from "../icons/brainxTransp.png";



function Signup(){
    const [active,setActive] = useState("signup");

    return(
        
        <VantaBackground>
        <div className="main h-[100vh] w-[100vw] flex justify-center items-center ">
            {/* right section */}
      <div className="left w-[28vw] h-[80vh] transparent rounded-[2rem] p-4 flex flex-col items-center">
        {/* Toggle Buttons */}
        <div className="flex w-[80%] h-[6%] rounded-xl justify-between items-center mt-10 border relative bg-transparent shadow">
          {["signup", "signin"].map((type) => (
            <div
              key={type}
              onClick={() => setActive(type)}
              className={`w-1/2 h-full flex items-center justify-center text-xl font-semibold cursor-pointer z-10 ${
                active === type ? "text-white" : "text-black"
              }`}
            >
              {type === "signup" ? "SignUp" : "SignIn"}
            </div>
          ))}

          {/* Animated Indicator */}
          <motion.div
            layout
            className={`absolute top-0 bottom-0 w-1/2 ${active === "signup" ? "bg-blue-700" : "bg-blue-700"} rounded-xl z-0`}
            initial={false}
            animate={{ x: active === "signup" ? "0%" : "100%" }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Active Form Placeholder */}
        <div className="mt-8 w-[90%] flex-1 flex justify-center items-center ">
          {active === "signup" ? (
            <div className="text-xl font-semibold h-full w-full"> <SignupForm/> </div>
          ) : (
            <div className="text-xl font-semibold h-full w-full"> <SignInForm/> </div>
          )}
        </div>
      </div>





            {/* left section */}
            <div className="right w-[28vw] h-[80vh]  transparent p-8 rounded-4xl ">
                <div className="logo text-4xl font-normal font-serif flex gap-2 text-blue-700 mt-4"><img src={brainx} className=" h-[10vh] w-[15vw] rounded-xl " alt="brainx logo" /></div>

                <div className="text font-bold text-7xl text-black mt-10">Revolutionize! Your Work With BrainX.
                </div>
                <div className="text2 font-semibold text-md text-white mt-5 "><TypingComponent para="The Second Memory For Your Brain."/></div>
                <div className="review mt-10 ">
                    <div className="para text-white mt-5 font-semibold text-sm"><p>"BrainX has made it so easy to save and organize my ideas, links, and notes. 
                        It really feels like an extension of my memory. Clean design, fast, and super helpful for staying focused and creative. 
                        Loved it!"</p></div>
                    <div className="image flex space-x-4 mt-6">
                        <div className="img rounded-[100%] bg-white h-9 w-9 flex items-center justify-center"><BugIcon size="lg"/></div>
                        <div className="text-sm font-semibold text-white"> <p>Gaurav Kumar</p><p>Software Engineer at DevCore</p> </div>
                    </div>
                </div>
                <div className="social mt-15">
                    <div className="a mb-3">Join us at <hr/></div>
                    <div className="logo h-[4vh] w-full flex">
                        <img src={DiscordIcon}  className="h-full w-full hover:size-15"/>
                        <img src={InstaIcon} className="h-full w-full hover:size-15" />
                        <img src={GitIcon} className="h-full w-full hover:size-15" />
                        <img src={YoutubeIcon} className="h-full w-full hover:size-15" />
                        <img src={TweetIcon} className="h-full w-full hover:size-15"/>
                    </div>
                </div>
            </div>
        </div>
        </VantaBackground>
    
    );
}
export default Signup;