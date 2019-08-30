import React, { FC } from "react";
import Container from "../../../lib/container";
import BasicButtons from "./basic-buttons";
import LinkButtons from "./link-buttons";

const Buttons: FC = () => (
    <Container>
        <h1>Buttons</h1>
        <h2>Features</h2>
        <ol>
            <li>success and error state</li>
            <li>icons at left/right side</li>
            <li>spinners</li>
            <li>progress bar</li>
        </ol>
        <h2>Basic</h2>
        <BasicButtons />
        <h2>Links</h2>
        <LinkButtons />
    </Container>
);

export default Buttons;
