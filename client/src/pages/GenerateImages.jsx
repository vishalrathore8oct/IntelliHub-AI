import React, { useState } from "react";
import { Hash, Image, Sparkles } from "lucide-react";

const GenerateImages = () => {
  const ImageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "Realistic style",
    "3D style",
    "Portrait style",
  ];
  const [selectedStyle, setSelectedStyle] = useState(ImageStyle[0]);
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    console.log(selectedStyle);
    console.log(publish);
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-wrap items-start gap-4 text-slate-700">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe Your Image</p>
        <textarea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
          placeholder="Describe What you want to see in the Image...."
        />
        <p className="mt-4 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {ImageStyle.map((item, index) => (
            <span
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedStyle === item
                  ? "bg-green-50 text-green-700"
                  : "text-gray-500 border-gray-300"
              }`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />

            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>

            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>

          <p className="text-sm">Make this image Public</p>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {" "}
          <Image className="w-5" /> Generate Title
        </button>
      </form>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-88">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />

          <h1 className="text-xl font-semibold">Generated Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image className="w-9 h-9" />

            <p>Enter a topic and click “Generate Image” to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
