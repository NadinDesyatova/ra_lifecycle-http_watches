import { ClockItemView } from "./ClockItemView";
import { ClockMainPropsType } from "../common/ClockComponentsTypes";


export const ClocksListView = ({infoClock, setInfoClock}: ClockMainPropsType) => {
  return (
    <div className="clocks-list">
      {
        infoClock.map((elem, i) => {
          return <ClockItemView
            key={i}
            infoClock={infoClock}
            elem={elem}
            setInfoClock={setInfoClock} />;
        })
      }
    </div>
  );
}
