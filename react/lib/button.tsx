import classNames from "classnames";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    progress?: number;
    active?: boolean;
    hover?: boolean;
    to?: string;
}

export default class Button extends Component<ButtonProps> {
    render() {
        const {
            active,
            className,
            children,
            disabled,
            hover,
            progress,
            to,
            ...rest
        } = this.props;

        const computedClassName = classNames(
            "ecom-button",
            { active, hover, disabled },
            className
        );

        const content = (
            <Fragment>
                {children}
                {typeof progress === "number" && (
                    <div className="ecom-button__progress">
                        <div
                            className="ecom-button__progress__bar"
                            style={{ width: progress * 100 + "%" }}
                        />
                    </div>
                )}
            </Fragment>
        );

        if (to) {
            return (
                <Link className={computedClassName} to={to}>
                    {content}
                </Link>
            );
        }

        return (
            <button
                type="button"
                className={computedClassName}
                disabled={disabled}
                {...rest}
            >
                {content}
            </button>
        );
    }
}
