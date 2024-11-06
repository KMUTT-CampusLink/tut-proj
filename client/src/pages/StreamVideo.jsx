import { useUploadFilesMutation } from "../services/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIds } from "../services/queries";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { helix } from "ldrs";
import { z } from "zod";
helix.register();

const StreamVideo = () => {
  const [vdUrl, setVdUrl] = useState(null);
  const [pstrUrl, setPstrUrl] = useState(null);
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useIds();
  // const { mutate, isPending } = useUploadFilesMutation(queryClient, reset);

  if (isLoading) return <div>Fetching...</div>;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 font-georama">
      <h1 className="text-4xl font-semibold">Video Streaming</h1>
      <div className="flex items-center justify-center w-full h-full border-[1.5px] border-red-400 p-4 gap-8">
        {/* Uploading */}
        <form className="flex flex-col items-start justify-center gap-4 font-geologica">
          {/* Video Title */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            Title
            <input type="text" className="grow" placeholder="Video Title" />
          </label>

          {/* Poster */}
          <div className="flex flex-row items-center justify-center gap-1 w-full">
            <span>Poster:</span>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm file-input-accent w-full max-w-xs"
            />
          </div>

          {/* Video */}
          <div className="flex flex-row items-center justify-center gap-1 w-full">
            <span>Video:</span>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm file-input-accent w-full max-w-xs"
            />
          </div>

          <button className="btn btn-primary text-white w-full">Upload</button>
        </form>

        {/* Streaming */}
        <div className="flex flex-col items-start justify-center gap-4">
          {/* Streaming Panel */}
          <video src="" controls width="700"></video>

          <div className="flex items-center justify-center gap-4">
            {/* Poster Preview */}
            <div className="w-full flex-1">
              <img
                className="w-[15rem] h-[15rem] object-cover"
                src="/profile-pic.png"
                alt=""
              />
            </div>

            {/* Video List */}
            <ul className="menu bg-base-200 rounded-box w-56 font-semibold">
              <li className="menu-title">Choose a video</li>
              {data?.data.map((url, key) => (
                <li
                  onClick={() => {
                    setPstrUrl(url[1]);
                    setVdUrl(`${import.meta.env.VITE_MINIO_URL}/${url[2]}`);
                  }}
                  key={url[0]}
                >
                  <a>Video {key + 1}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamVideo;
