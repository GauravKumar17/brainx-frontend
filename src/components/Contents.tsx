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


function ContentsList() {
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

        setContents(response.data.contents);
      } catch (err) {
        console.error("Error fetching contents:", err);
      }
    };

    fetchContents();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.delete(
        `http://localhost:3000/api/v1/user/contents/${id}`,
        { headers: { Authorization: token } }
      );
      alert("Content deleted successfully");
      // Update local state to remove deleted content
      setContents(contents.filter(c => c._id !== id));
    } catch (err) {
      console.error("Error deleting content:", err);
    }
  };

    return ( 
        <>
        {contents.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 text-4xl flex justify-center items-center h-[70vh] w-full">
            <div className="para"> No contents available. Please add some!</div>
          </div>
        ) : (
          contents.map((content) => (
            <Card key={content._id} title={content.title} link={content.link} type={content.type} onDelete={()=>handleDelete(content._id)} uploadedAt={content.uploadedAt ?? ""}/>
          ))
        )}
        
        </>
     );
}

export default ContentsList;