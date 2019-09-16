'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class ShadowDOM extends React.Component {
  componentDidMount() {
    this.shadowRoot = this.node.attachShadow({ mode: this.props.mode });
    this.shadowRoot.innerHTML += this.props.css;
    this.forceUpdate();
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <div { ...rest } ref={ node => (this.node = node) }>
        { this.shadowRoot && ReactDOM.createPortal(children, this.shadowRoot) }
      </div>
    );
  };
};