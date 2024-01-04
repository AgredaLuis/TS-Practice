import gsap from "gsap";
import { useEffect, useState, useRef} from "react";


const MAXIMUN_COUNT = 10;
const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleCLick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {


    /* if (counter < 10) return;
    console.log("llego a 10");
 */

    const tl = gsap.timeline();


    tl.to( counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
    tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
  }, [counter]);
  

  return (
    <>
      <h1>CounterEffet</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleCLick}>+1</button>
    </>
  );
};

export default CounterEffect;
