import "./App.css";
import ImageGrid from "./components/ImageGrid";
import main from "/photos/DM004914.jpg";
import { motion } from "framer-motion";

function App() {
  const loadingVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="h-screen">
      <motion.nav
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3 }}
        className="h-[45%] md:h-screen relative"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 5 }}
          className="z-10 absolute left-0 right-0 top-0 bottom-5 flex flex-col items-center justify-end text-white background-slate-900/20"
        >
          <h1 className="font-bold text-4xl lg:text-6xl z-10">
            Jordan & Justice
          </h1>
          <strong className="text-6xl lg:text-8xl"> Gilliam</strong>
          <h2 className="text-2xl lg:text-4xl z-10">Feburary 24th, 2024</h2>
          <a
            href="#img-grid"
            className="hover:border-slate-300 hover:text-slate-300 border-2 border-white rounded-lg px-4 my-2"
          >
            View
          </a>
        </motion.div>
        <img
          src={main}
          alt="Jordan & Justice Gilliam"
          className="absolute top-0 z-0 object-cover h-full w-full"
        />
      </motion.nav>
      <div id="img-grid" className="pt-4">
        <ImageGrid />
      </div>
      <footer>
        <span className="flex flex-col items-end w-full p-4 mt-6 text-xs">
          <span className="text-sm">
            Website and photography by{" "}
            <a
              href="https://portfolio.dobler.studio"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-600 underline"
            >
              Jake Dobler
            </a>{" "}
          </span>
          &copy; Dobler Media 2024
        </span>
      </footer>
    </div>
  );
}

export default App;
