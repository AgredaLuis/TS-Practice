import gsap from "gsap";
import { useEffect, useState } from "react";


const MAXIMUN_COUNT = 10;
const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);

  const handleCLick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log("llego a 10");


    gsap.to( 'h1', {y: -10, duration: 0.2, ease: 'ease.out'}).then(() => {
      gsap.to('h1', {y: 0, duration: 1, ease: 'bounce.out'});
    });
  }, [counter]);




  return (
    <>
      <h1>CounterEffet</h1>
      <h1 >{counter}</h1>

      <button onClick={handleCLick}>+1</button>
    </>
  );
};

export default CounterEffect;
