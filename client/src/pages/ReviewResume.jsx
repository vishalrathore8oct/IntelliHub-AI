import { FileText, Sparkles } from "lucide-react";
import { useState } from "react";

const ReviewResume = () => {
  const [input, setInput] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Input", input);
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-wrap items-start gap-4 text-slate-700">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          type="file"
          accept="application/pdf"
          required
        />
        <p className="text-xs to-gray-500 font-light mt-1">
          Supprots PDF Formats Resume Only.
        </p>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {" "}
          <FileText className="w-5" /> Review Resume
        </button>
      </form>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-88">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00DA83]" />

          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText className="w-9 h-9" />

            <p>Upload a Resuem Pdf and click “Review Resume” to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
