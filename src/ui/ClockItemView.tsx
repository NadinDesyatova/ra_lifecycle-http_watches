import { useEffect, useState } from "react";
import { ClockItemViewPropsType} from "../common/ClockComponentsTypes";
import { ClockNumber } from "./ClockNumber";
import numsCoordinates from "../assets/nums-coordinates.json";

export const ClockItemView = ({date, infoClock, elem, setInfoClock}: ClockItemViewPropsType) => {
  const [now, setNow] = useState(new Date);

  useEffect(() => {
    setNow(date);
  }, [date]);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const offset = Number(elem.timeZoneOffset);
  const UTCHours = now.getHours() + (now.getTimezoneOffset() / 60);
  const hours = 
    (UTCHours + offset) < 0 
      ? 24 + (UTCHours + offset) 
      : UTCHours + offset;

  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360 + ((minutes / 60) * 360) / 12) + 90;
  
  const onClickCloseButton = () => {
    infoClock.splice(infoClock.indexOf(elem), 1);
    setInfoClock(infoClock.concat());
  };

  return (
    <li className="clock-container">
      <div className="clock-header">
        <div>{elem.name}</div>
        <button className="close-button" onClick={onClickCloseButton}>x</button>
      </div>
      <div className="clock">
        <div className="clock-face">
          {numsCoordinates.map((item, i) => <ClockNumber item={item} key={i} index={i}/>)}
          <div className="hand hour-hand" style={{transform: `rotate(${hourDeg}deg)`}}></div>
          <div className="hand minute-hand" style={{transform: `rotate(${minuteDeg}deg)`}}></div>
          <div className="hand second-hand" style={{transform: `rotate(${secondDeg}deg)`}}></div>
        </div>
      </div>
    </li>
  );
};
