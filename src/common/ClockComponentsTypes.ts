import React from "react";

export type ClockUseStateType = {
  name: string,
  timeZoneOffset: number
};

export type InfoClockType = ClockUseStateType[];

export type SetInfoClockType = React.Dispatch<React.SetStateAction<InfoClockType>>;

export type ClockMainPropsType = {
  infoClock: InfoClockType,
  setInfoClock: SetInfoClockType
};

export type ClockListPropsType = {
  infoClock: InfoClockType,
  setInfoClock: SetInfoClockType
};

export type ClockItemViewPropsType = {
  date: Date,
  infoClock: InfoClockType,
  elem: ClockUseStateType,
  setInfoClock: SetInfoClockType
};

export type ClockNumberPropsType = {
  item: {top: string, left: string},
  index: number
};

