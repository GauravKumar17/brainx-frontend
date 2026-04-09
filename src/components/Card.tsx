import { DeleteIcon } from "../icons/Delete";
import { ShareIcon } from "../icons/Send";
import { DocIcon } from "../icons/Doc";
import TweetIcon from "../icons/tweet.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import { VideoIcon } from "../icons/Video";
import { ExpandIcon } from "../icons/Expand";
import {  useState } from "react";


interface CardProps {
    title:string,
    link:string,
    type:string,
    uploadedAt:string;
    onDelete?: ()=>void; 
}

function Card(props: CardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    console.log("Card Props:", props);

    let uploadedTime = "Unknown";
    if (props.uploadedAt && !isNaN(Date.parse(props.uploadedAt))) {  // this covers the case if uploadedAt is not present in some cards
        uploadedTime = new Date(props.uploadedAt).toLocaleString();
    }
    const youtubeEmbedUrl = props.link.replace("https://youtu.be/", "https://www.youtube.com/embed/").replace("watch?v=", "embed/").replace(/(\?si=.*$)/, "")
    return ( 
        <>
        <div className="bg-black text-white border-1 border-white  rounded-lg h-[50vh] w-[18vw] shadow-md hover:border-second hover:border-2 flex flex-col justify-between p-2" >
            <div className="upper flex justify-between items-center p-1 h-[9vh] w-full ">
                <div className="icon flex justify-between items-center p-2 gap-3 text-gray-500">
                    {props.type === "doc" && <DocIcon size="lg" />}
                    {props.type === "tweet" && <img src={TweetIcon} alt="Tweet Icon" className="size-5"/>}
                    {props.type === "youtube" && <VideoIcon size="lg" />}
                    {props.type === "linkedin" && <img src={LinkedinIcon} alt="Linkedin Icon" className="size-5"/>}
                    
                    <div className="title text-lg font-semibold text-white hover:text-blue-600 "><a href={props.link}>{props.title}</a></div>
                </div>
                <div className="flex justify-between items-center p-2 gap-3 text-gray-500 ">
                    <div className="icon hover:text-blue-600"><ShareIcon size="md" /></div>
                    <div className="icon hover:text-blue-600"><button onClick={props.onDelete}><DeleteIcon size="md" /></button></div>
                </div>
            </div>

            <div className="content h-[35vh] w-full p-1 rounded-md">
                {props.type === "youtube" && <iframe className ="h-full w-full rounded-md" width="560" height="315" src={youtubeEmbedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {props.type === "tweet" && <div className="h-full w-full rounded-md overflow-y-scroll"><blockquote className="twitter-tweet h-full w-full rounded-md">
                    <a href={props.link.replace("x.com", "twitter.com")}></a> 
                </blockquote></div>}
                
                {props.type === "doc" && <iframe className="h-full w-full rounded-md overflow-y-scroll" src={props.link} title="Document Viewer" frameBorder="0"></iframe>}
            </div>

            <div className="expand flex justify-between items-center p-2 text-gray-500 hover:text-blue-600 ">
                <div className="time text-lg w-full  text-gray-600">{uploadedTime}</div>
                <div className="p-2">
                    <button onClick={() => setIsExpanded(true)}>
                    <ExpandIcon size="lg" /></button>
                </div>
            </div>
            {isExpanded && (
                <div className="fixed top-0 left-0 w-full h-full bg-black  flex justify-center items-center z-10">
                    <div className="bg-white rounded-lg p-8 w-[90vw] h-[90vh] relative shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="absolute top-0 right-2 text-gray-600 hover:text-red-600 text-4xl font-extrabold">
                            &times;
                        </button>

                        {/* Embedded Content */}
                        <div className="w-full h-full">
                            {props.type === "youtube" && (
                                <iframe className="h-full w-full rounded-md" src={youtubeEmbedUrl} title="YouTube video player"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            )}

                            {props.type === "tweet" && (
                                <div className="h-full w-full rounded-md ">
                                    <blockquote className="twitter-tweet h-full w-full rounded-md">
                                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                                    </blockquote>
                                </div>
                            )}

                            {props.type === "doc" && (
                                <iframe className="h-full w-full rounded-md overflow-y-scroll" src={props.link}
                                    title="Document Viewer" frameBorder="0"></iframe>
                            )}
                        </div>
                    </div>
                </div>
            )}


        </div>

        

        </> 
    );
}

export default Card;

