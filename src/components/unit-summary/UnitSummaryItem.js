import React, { Component } from "react";

import UnitIcon from "../UnitIcon.js";

import "./UnitSummaryItem.scss";

function UnitSummaryItem(props) {
  return (
    <div className="UnitSummaryItem">
      <UnitIcon
        role={props.role}
        unit={props.unit}
        counts={props.counts}
        isValid={props.isValid}
      />
      <h3 className="count">x {props.counts.count}</h3>
    </div>
  );
}

export default UnitSummaryItem;
