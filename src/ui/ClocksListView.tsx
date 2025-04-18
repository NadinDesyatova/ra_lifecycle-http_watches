import { useEffect, useState } from "react";
import { ClockItemView } from "./ClockItemView";
import { ClockMainPropsType } from "../common/ClockComponentsTypes";


export const ClocksListView = ({infoClock, setInfoClock}: ClockMainPropsType) => {
  const [date, setDate] = useState(new Date);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDate(new Date);
      console.log(timeout);
    }, 1000);

    return () => {      
      window.clearTimeout(timeout);
      console.log(timeout);
    };
  }, [date]);
  
  return (
    <>
      {infoClock.length !== 0 && 
        <ul className="clocks-list">
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
        </ul>
      }
    </>
  ) ;
}
