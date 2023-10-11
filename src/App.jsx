import { useEffect, useState } from "react";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import desktopDivider from "./assets/pattern-divider-desktop.svg";
import dieIcon from "./assets/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState([]);
  const fetchAdvice = () => {
    // timestap is appended to prevent caching
    const timestamp = Date.now();
    fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <section className="bg-darkBlue h-screen flex flex-col justify-center p-10 font-manrope ">
      <div className="flex flex-col p-10 bg-darkGreyishBlue justify-center rounded-[1rem] md:w-[45%] lg:w-[30%] md:mx-auto">
        <h1 className="uppercase text-center text-neonGreen mb-4 font-bold tracking-[0.2rem]">
          advice #{advice.id}
        </h1>
        <div className="text-textColor font-bold">
          <q>{advice.advice}</q>
          <img
            src={mobileDivider}
            alt=""
            className="mt-4 sm:hidden md:hidden lg:hidden xl:hidden"
          />
          <img
            src={desktopDivider}
            alt=""
            className="mt-4 hidden sm:flex md:flex "
          />
        </div>
        <button
          className="text-center p-5 -mb-[4.5rem] mx-auto mt-5 rounded-full w-[4rem] h-[4rem] bg-neonGreen hover:bg-greyishBlue"
          onClick={fetchAdvice}
        >
          <img src={dieIcon} alt="" className="" />
        </button>
      </div>
    </section>
  );
}

export default App;
