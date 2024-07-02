import React, { Component } from "react";

import UnitSelectorItem from "./UnitSelectorItem.js";

import "./UnitSelectorList.scss";

class UnitSelectorList extends Component {
  handleUpdate(unitKey, delta) {
    this.props.onUpdate(unitKey, delta);
  }
  handleUpdateMod(unitKey, delta) {
    this.props.onUpdateMod(unitKey, delta);
  }
  render() {
    let unitConfig = this.props.units.configForDomain(this.props.domain);
    let items = Object.entries(unitConfig).map(([unitKey, unit]) => {
      let count = this.props.units.unitCount(this.props.side, unitKey);
      let modCount = this.props.units.modCount(this.props.side, unitKey);
      let enabled = count > 0 || unit.valid(this.props.units, this.props.side);
      return (
        <UnitSelectorItem
          key={unitKey}
          unit={unit}
          count={count}
          modCount={modCount}
          enabled={enabled && this.props.enabled}
          onUpdate={(delta) => this.handleUpdate(unitKey, delta)}
          onUpdateMod={(delta) => this.handleUpdateMod(unitKey, delta)}
        />
      );
    });

    return (
      <div className="UnitSelectorList">
        <div className="list-header">
          <h4 className="head-text cost">Cost</h4>
          <h4 className="head-text units">Units</h4>
          <h4 className="head-text mod">Modifer</h4>
        </div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default UnitSelectorList;
