import { useState , useEffect } from "react";
import axios from "axios";
import Card from "./Card";

type Contents = {
  _id: string;
  title: string;
  link: string;
  type: string; 
  uploadedAt?: string;
}

type ContentsProps = {
  contents: Contents[];
}


function VideosList() {
    const [contents, setContents] = useState<Contents[]>([]);
    useEffect(() => {
    const fetchContents = async () => {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          console.warn("No token found!");
          return;
        }

        const response = await axios.get<ContentsProps>("http://localhost:3000/api/v1/user/contents", {
          headers: {
            Authorization: token, // send token
          },
        });

        const tweetContents = response.data.contents.filter(
          (content) => content.type === "youtube"
        )

        setContents(tweetContents);
      } catch (err) {
        console.error("Error fetching contents:", err);
      }
    };

    fetchContents();
  }, []);

    return ( 
        <>
        {contents.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 text-4xl flex justify-center items-center h-[70vh] w-full">
            <div className="para"> No Videos available. Please add some!</div>
          </div>
        ) : (
          contents.map((content) => (
            <Card key={content._id} title={content.title} link={content.link} type={content.type} uploadedAt={content.uploadedAt ?? ""}/>
          ))
        )}
        
        </>
     );
}

export default VideosList;