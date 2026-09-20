import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ContentArea from "./components/ContentArea";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// who said that I hacve to endlessly read and not do work - can read and work on the examples provided
// task - 1 practise useEffect with pointer move

{
  /**
   * prothoome x and y co-ordinates 0 te state create kpra hoise
   * handleMove callback with event parameter and inside a useEffect and setPosition with window.addEventListener set to pointerMove and handlemove callback
   * last e window.remove eventListener
   * This "addEventListener('pointermove', handleMove)" means on event listener pointerMove call handleMove amd handleMove fixes co-ordinates of pointercursor with evebt.clientX
   *
   */
}

{
  /** This means i am calling the function the function right away which is not what i want, i want this to be called on each listened event of pointermove, but the above version means that i have 
     *  defined the function above, just passing the reference to that function 
     * therefore handPointerMove is a callback function - cannot fucking remember how many times i have read the actual defintion 
     * the browser eventlistener pointer move supplies e. 
     // function App() {
     //   const [pointerCoordinates, setPointerCoordinates] = useState({ x: 0, y: 0 });
     //   useEffect(()=>{
     //     handePointerMove((e)=>{
     //       setPointerCoordinates({x:e.ClientX,y:e.ClientY} -> this also means to execute the funciton right
     //     })
     //     window.addEventListener('pointermove', handePointerMove(e))
     //     return () =>{
     //       window.removeEventListener('pointermove')
     //     }
     
     //   },[])
     * 
     */
}

function App() {
  const [pointerCoordinates, setPointerCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handePointerMove(e) {
      setPointerCoordinates({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handePointerMove);
    return () => {
      window.removeEventListener("pointermove", handePointerMove); /// this must have the function reference to the pointermove listener
    };
  }, []);

  return (
    <>
      {" "}
      {/* <div
        style={{
          position: "fixed",
          backgroundColor: "grey",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${pointerCoordinates.x}px, ${pointerCoordinates.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 30,
          // cursor: "none",
          zIndex: 10,
          height: 30,
        }}
        /> */}{" "}
      {/* <Header /> */}
      {/* <Form /> */}
      <ContentArea />
      {/* <Footer /> */}
    </>
  );
}

export default App;
