import React, { Component } from "react";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: number | "small" | "medium" | "large" | "fluid";
}

export default class Container extends Component<ContainerProps> {
  static defaultProps = {
    size: "medium"
  };

  render() {
    const { children, className, size, ...rest } = this.props;
    return (
      <div
        className={["ecom-container", "ecom-container--" + size].join(" ")}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
