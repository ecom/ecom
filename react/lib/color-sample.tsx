import React, { Component } from "react";

export interface ColorSampleProps {
    name: string;
    value: string;
}

export default class ColorSample extends Component<ColorSampleProps> {
    render() {
        const { name, value } = this.props;

        return (
            <div className="ecom-color-sample">
                <div
                    className="ecom-color-sample__fill"
                    style={{
                        backgroundColor: value
                    }}
                />
                <pre className="ecom-color-sample__name">{name}</pre>
                <pre className="ecom-color-sample__value">{value}</pre>
            </div>
        );
    }
}
