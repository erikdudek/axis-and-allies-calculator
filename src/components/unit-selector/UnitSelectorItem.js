import React, { Component } from "react";

import UnitIcon from "../UnitIcon.js";
import UnitCounter from "./UnitCounter.js";
import ModCounter from "./ModCounter.js";
import Button from "../Button.js";
import Button2 from "../Button2.js";
import "./UnitSelectorItem.scss";

class UnitSelectorItem extends Component {
  handleUpdate(delta) {
    this.props.onUpdate(delta);
  }

  render() {
    let classes = this.props.enabled
      ? "UnitSelectorItem"
      : "UnitSelectorItem disabled";

    let stats = [
      {
        name: "Atk",
        val: this.props.unit.attack,
      },
      {
        name: "Def",
        val: this.props.unit.defense,
      },
      {
        name: "Mov",
        val: this.props.unit.move,
      },
    ];

    let statSpans = stats.map((s, i) => {
      if (i < stats.length - 1) {
        return (
          <span className="stat" key={s.name}>
            {s.name}&nbsp;{s.val}&nbsp;/{" "}
          </span>
        );
      } else {
        return (
          <span className="stat" key={s.name}>
            {s.name}&nbsp;{s.val}
          </span>
        );
      }
    });

    return (
      <li className={classes}>
        <UnitIcon unit={this.props.unit} enabled={this.props.enabled} />
        <div className="unit-info">
          <h4 className="unit-title">{this.props.unit.name}</h4>
          <p className="unit-description">{statSpans}</p>
        </div>
        <h4 className="unit-cost">{this.props.unit.cost}</h4>
        <UnitCounter
          count={this.props.count}
          enabled={this.props.enabled}
          onUpdate={(delta) => this.handleUpdate(delta)}
        />
        <ModCounter
          modCount={this.props.modCount}
          enabled={this.props.enabled}
          onUpdateMod={(delta) => this.props.onUpdateMod(delta)}
        />
      </li>
    );
  }
}

export default UnitSelectorItem;
