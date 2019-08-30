import React, { Component } from "react";

export interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export default class Button extends Component<SectionProps> {
  render() {
    const { className, children, ...rest } = this.props;
    return (
      <section className={["ecom-section"].join(" ")} {...rest}>
        {children}
      </section>
    );
  }
}
