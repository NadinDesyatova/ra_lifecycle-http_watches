import { ClockNumberPropsType } from "../common/ClockComponentsTypes";

export const ClockNumber = ({item, index}: ClockNumberPropsType) => {
  return (
    <div className="number" style={
      {
        top: `${item.top}`,
        left: `${item.left}`
      }
    }>{index + 1}</div>
  )
};
