import React, { Component } from "react";
import Button from "../../app/components/button";
import "./styles.main.less";
export default class extends Component {
  render() {
    return (
      <div className="title">
        <span className="example">Hello Conaz</span>
        <Button />
      </div>
    );
  }
}
