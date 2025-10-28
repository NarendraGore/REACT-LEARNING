import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect( () => {
    console.log("Interval Has Been Setup")
    const intervalId = setInterval(()=> {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the Interval")
    }
  }, [])

  return (
    <p className="lead">
      This is The Current Time:{time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
