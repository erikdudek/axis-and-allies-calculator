import React, { Component } from "react";

import "./ModCounter.scss";
import Button2 from "../Button2.js";

class ModCounter extends Component {
  handleClick(delta) {
    this.props.onUpdateMod(delta);
  }

  render() {
    let classes = this.props.enabled ? "ModCounter" : "ModCounter disabled";

    return (
      <div className={classes}>
        <Button2
          onClick={() => this.handleClick(-1)}
          enabled={this.props.enabled}
        >
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </Button2>
        <div className="mod-display">
          <h2 className="mod">{this.props.modCount}</h2>
        </div>
        <Button2
          onClick={() => this.handleClick(1)}
          enabled={this.props.enabled}
        >
          <svg className="plus" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </Button2>
      </div>
    );
  }
}

export default ModCounter;
