import React, { FC, Fragment } from "react";
import ColorSample, { ColorSampleProps } from "../../../lib/color-sample";

export interface PaletteProps {
    colors: ColorSampleProps[];
}

const Palette: FC<PaletteProps> = props => (
    <Fragment>
        {props.colors.map(color => (
            <ColorSample key={color.name} {...color} />
        ))}
    </Fragment>
);

export default Palette;
