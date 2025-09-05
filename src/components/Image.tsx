import { useState } from "react";
import { IoIosClose, IoIosMore } from "react-icons/io";
import { motion } from "framer-motion";
import { FaShare } from "react-icons/fa6";

function Image({ image, index }: { image: string; index: number }) {
  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4" key={index}>
      <div className=" relative overflow-hidden rounded shadow-md group">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex sm:hidden cursor-pointer rounded-lg m-1 absolute group-hover:flex z-10 sm:text-black h-12 w-12 top-0 sm:bg-slate-300/40  items-center justify-center right-0 hover:bg-slate-900 hover:text-white bg-slate-900 text-white"
        >
          <button className="">
            {isMenuOpen ? <IoIosClose /> : <IoIosMore />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute z-20 top-1 left-1  text-white w-3/4 flex gap-2">
            <a
              href={image}
              download={image.split("/").pop()}
              className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-slate-300 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <div
              className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-slate-300 hover:text-slate-900"
              onClick={() => {
                navigator.share({
                  title: "Jordan & Justice",
                  text: "Check out this image from Jordan and Justice's wedding! And view the rest at https://jordan-and-justice.dobler.studio/",
                  url: image,
                });
              }}
            >
              <FaShare />
            </div>
          </div>
        )}
        <a href={image} target="_blank" className="position  h-full w-full">
          {typeof image === "string" ? (
            <motion.img
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
              src={image}
              alt={image}
              className="object-cover w-full h-full aspect-w-1 aspect-h-1"
            />
          ) : (
            <span className="w-full h-full bg-slate-300/40"></span>
          )}
        </a>
      </div>
    </div>
  );
}

export default Image;
