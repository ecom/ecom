import React, { FC } from "react";
import Container from "../../../lib/container";
import Palette from "./palette";

const Colors: FC = () => (
    <Container>
        <h1>Colors</h1>
        <h2>Palette</h2>
        <Palette
            colors={[
                {
                    name: "$ecom-black",
                    value: "#000000"
                }
            ]}
        />
    </Container>
);

export default Colors;
