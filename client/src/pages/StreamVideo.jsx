const StreamVideo = () => {
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

          {/* Username */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            Username
            <input type="text" className="grow" placeholder="Vermillion" />
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            Password
            <input type="text" className="grow" placeholder="Strong" />
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

          <button className="btn btn-primary btn-wide text-white">
            Upload
          </button>
        </form>

        {/* Streaming */}
        <div className="flex flex-col items-start justify-center gap-4">
          {/* Streaming Panel */}
          <video src="" controls width="700"></video>

          {/* Video List */}
          <ul className="menu bg-base-200 rounded-box w-56 font-semibold">
            <li className="menu-title">Choose a video</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StreamVideo;
