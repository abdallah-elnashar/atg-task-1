import { Fragment } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Details from "./components/Details";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
function App() {
  return (
    <div>
      <Navbar className=" fixed" />
      <Hero />
      <div className=" xl:px-[180px] lg:px-[90px] md:px[50px] px-0 ">
        <Categories />
        <div className="flex justify-center lg:justify-between md:gap-4 items-start mt-[40px] relative">
          <Post className=" lg:flex-[3]" />
          <Details className="  lg:flex-[1]  " />
        </div>
      </div>
    </div>
  );
}

export default App;
