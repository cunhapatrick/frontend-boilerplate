import React, { Component } from "react";
import Button from "../../app/components/button";
import "./styles.main.less";
export default class extends Component {
  render() {
    return (
      <div className="title">
        Hello Next.js
        <Button />
      </div>
    );
  }
}
