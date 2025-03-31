import { useEffect, useState } from "react";
import { ClockItemView } from "./ClockItemView";
import { ClockListPropsType } from "../common/ClockComponentsTypes";


export const ClocksListView = ({infoClock, setInfoClock}: ClockListPropsType) => {
  const [date, setDate] = useState(new Date);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDate(new Date);
    }, 1000);

    return () => {      
      clearTimeout(timeout);
    };
  }, [date]);
  
  return (
    <div className="clocks-list">
      {
        infoClock.map((elem, i) => {
          return <ClockItemView
            date={date}
            key={i}
            infoClock={infoClock}
            elem={elem}
            setInfoClock={setInfoClock} />;
        })
      }
    </div>
  );
}
