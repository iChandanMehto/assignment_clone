import React from "react";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Modal({ onClose }) {
  const modalRef = React.useRef();
  const [audioFormat, setAudioFormat] = React.useState("OGG");
  const [sampleRate, setSampleRate] = React.useState("48000");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = () => {
    console.log("Audio Format:", audioFormat);
    console.log("Sample Rate:", sampleRate);
    onClose();
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-contrast-75"
    >
      <div className="bg-white rounded-2xl flex-col items-center w-full md:w-[29vw] shadow-custom">
        <div className="bg-[#f5f5f5] rounded-lg flex justify-between items-center px-5 p-4">
          <h5>Audio Setting</h5>
          <button onClick={onClose} className="float-right">
            <X />
          </button>
        </div>
        <div className="w-full h-[2px] bg-gray-200 mb-4"></div>
        <div className="flex flex-col px-5">
          <div className="mb-4">
            <h3>Audio Format</h3>
            <Select value={audioFormat} onValueChange={(value) => setAudioFormat(value)}>
              <SelectTrigger className="h-12 md:w-[400px] rounded-2xl pr-8 border-[#dfdfdf] focus:border-sky-500 focus:ring-sky-500">
                <SelectValue placeholder="OGG" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MP3">MP3</SelectItem>
                <SelectItem value="WAV">WAV</SelectItem>
                <SelectItem value="OGG">OGG</SelectItem>
                <SelectItem value="AAG">AAG</SelectItem>
                <SelectItem value="OPUS">OPUS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <h3>Sample Rate</h3>
            <Select value={sampleRate} onValueChange={(value) => setSampleRate(value)}>
              <SelectTrigger className="h-12 md:w-[400px] rounded-2xl pr-8 border-[#dfdfdf] focus:border-sky-500 focus:ring-sky-500">
                <SelectValue placeholder="48000Hz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="48000">48000</SelectItem>
                <SelectItem value="44100">44100</SelectItem>
                <SelectItem value="24000">24000</SelectItem>
                <SelectItem value="22050">22050</SelectItem>
                <SelectItem value="16000">16000</SelectItem>
                <SelectItem value="8000">8000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
      onClick={handleSubmit}
       className="border-[#5095f8] w-28 md:ml-[290px] mb-5 mt-5 bg-[#5679f3] mx-1 px-4 text-xl rounded-3xl   py-1.5   border-2 hover:bg-[#5c78dc] hover:text-white items-center  " 
    > Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;


