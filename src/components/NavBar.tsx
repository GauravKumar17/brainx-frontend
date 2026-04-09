"use client";
import Button from './ui/Button';
import brainx from "../icons/brainx2.png";
import { PlusIcon } from "../icons/Plus";
import { ShareIcon } from "../icons/Send";
import { BugIcon } from "../icons/Bug";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

type AddContents = {
  title: string;
  link: string;
  type: string;
};

function NavBar({title}: {title: string}) {
  const [expand, setExpand] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AddContents>();

  // 🚀 Form Submit
  const onSubmit = async (data: AddContents) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/contents",
        data,
        {
          headers: { Authorization: token},
        }
      );

      alert("Content added successfully"); 
      window.location.reload(); // Reload the page to see the new content
      reset(); 
      setExpand(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add content");
    }
  };

  return (
    <>
      <div className="h-[8vh] w-full navbar flex justify-between items-center p-4 font-serif bg-[#242627] rounded-xl ">
        <div className="logo text-4xl font-normal text-white">{title} </div>
        <div className="cont flex gap-2">
          <Button
            variant="primary"
            size="lg"
            title="Add Contents"
            onClick={() => setExpand(!expand)}
            startIcon={<PlusIcon size="md" />}
          />
          <Button
            variant="secondary"
            size="lg"
            title="Share Brain"
            startIcon={<ShareIcon size="md" />}
          />
        </div>
      </div>

      {expand && (
        <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-95 flex justify-center items-center z-100">
          <div className="main bg-white h-[65vh] w-[25vw] flex flex-col items-center justify-around relative rounded-lg ">
            <div className="logo text-4xl font-normal font-serif flex gap-2 text-first bg-[#28AEF3] h-full mb-6 rounded-lg">
              <img src={brainx} className=' mt-2' alt="" />
            </div>
            <div className="a mb-20 text-center w-full">
            <div className="para text-2xl font-semibold mb-8 ">
              Save Contents To Your Second Brain
            </div>

            
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-6 w-full px-6 "
            >
              <input
                {...register("title", { required: "Title is required" })}
                placeholder="Title"
                className="w-[90%] h-[5vh] border rounded-lg text-center"
              />
              {errors.title && <p className="text-red-500  bg-black">{errors.title.message}</p>}

              <input
                {...register("link", { required: "Link is required" })}
                placeholder="Paste Link"
                className="w-[90%] h-[5vh] border rounded-lg text-center"
              />
              {errors.link && <p className="text-red-500">{errors.link.message}</p>}

              <select
                {...register("type", { required: "Type is required" })}
                className="w-[90%] h-[5vh] border rounded-lg text-center "
              >
                <option value="">Select Type</option>
                <option value="youtube">Video</option>
                <option value="tweet">Tweet</option>
                <option value="doc">Document</option>
              </select>
              {errors.type && <p className="text-red-500">{errors.type.message}</p>}

              <div className="flex justify-around items-center space-x-8 w-full mt-4 mb-4">
                <Button
                  variant="secondary"
                  size="lg"
                  title="Close"
                  onClick={() => setExpand(false)}
                />
                <Button
                  variant="primary"
                  size="lg"
                  title="Add"
                  startIcon={<PlusIcon size="md" />}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
