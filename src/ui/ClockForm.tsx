import { ChangeEvent, useState } from "react";
import { ClockMainPropsType } from "../common/ClockComponentsTypes";


export const ClockForm = ({infoClock, setInfoClock}: ClockMainPropsType) => {
  const [inputInfo, setInputInfo] = useState({
    name: "", 
    timeZoneOffset: 0
  });

  const handlerChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setInputInfo((prev) => ({
      ...prev, 
      [name]: name === "timeZoneOffset" ? Number(value) : value 
    }));
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInfoClock(infoClock.concat([inputInfo]));
    setInputInfo({
      name: "", 
      timeZoneOffset: 0
    });
  };

  
  return (
    <form className="clock-input-form" onSubmit={handlerSubmit}>
      <label className="clock-input_label" htmlFor="input_name-zone">
        <h4>Название</h4>
        <input id="input_name-zone" type="text" name="name" onChange={handlerChange} value={inputInfo.name} required/>
      </label>
      <label className="clock-input_label" htmlFor="input_zone-offset">
        <h4>Временная зона</h4>
        <input id="input_zone-offset" type="number" name="timeZoneOffset" onChange={handlerChange} value={inputInfo.timeZoneOffset} min={-12} max={12}/>
      </label>
      <button className="add-button">Добавить</button>
    </form>
  );
};
