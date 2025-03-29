import { useState } from "react";
import { ClockForm } from "./ClockForm";
import { ClocksListView } from "./ClocksListView";
import { InfoClockType } from "../common/ClockComponentsTypes";


export const WidgetClock = () => {
  const [infoClock, setInfoClock] = useState<InfoClockType>([]);
  
  return (
    <>
      <ClockForm infoClock={infoClock} setInfoClock={setInfoClock} />
      <ClocksListView infoClock={infoClock} setInfoClock={setInfoClock} />
    </>
  );
};
