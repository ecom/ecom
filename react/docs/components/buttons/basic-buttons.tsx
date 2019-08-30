import React, { FC, Fragment } from "react";
import Button from "../../../lib/button";

const BasicButtons: FC = () => (
    <Fragment>
        <Button>Default</Button>
        &nbsp; &nbsp;
        <Button hover={true}>Hover</Button>
        &nbsp; &nbsp;
        <Button active={true}>Active</Button>
        &nbsp; &nbsp;
        <Button disabled={true}>Disabled</Button>
    </Fragment>
);

export default BasicButtons;
