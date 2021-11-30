import { useState } from "react";

export default useStopwatch = () => {
  const [running, setRunning] = useState(false);
  const [lap, setLap] = useState([]);
  const [now, setNow] = useState(0);
  const [begin, setBegin] = useState(0);
  const [run, setRun] = useState();

  const start = () => {
    const timeStamp = new Date().getTime();
    setRunning(true);
    setBegin(timeStamp);
    setNow(timeStamp);
    setLap([0]);
    setRun(
      setInterval(() => {
        setNow(new Date().getTime());
      }, 10)
    );
  };

  const stop = () => {
    setRunning(false);
    clearInterval(run);

    const [firstLap, ...other] = lap;

    setLap([firstLap + now - begin, ...other]);
    setNow(0);
    setBegin(0);
  };

  const reset = () => {
    setNow(0);
    setBegin(0);
    setLap([]);
  };

  const resume = () => {
    setRunning(true);
    const timeStamp = new Date().getTime();
    setBegin(timeStamp);
    setNow(timeStamp);

    setRun(
      setInterval(() => {
        setNow(new Date().getTime());
      }, 10)
    );
  };

  const getLap = () => {
    const timeStamp = new Date().getTime();
    const [firstLap, ...other] = lap;
    setLap([0, firstLap + now - begin, ...other]);
    setBegin(timeStamp);
    setNow(timeStamp);
  };

  const interval = now - begin;

  return {
    running,
    start,
    lap,
    stop,
    reset,
    resume,
    getLap,
    interval,
  };
};
