import React, { FC, Fragment } from "react";
import Button from "../../../lib/button";

const LinkButtons: FC = () => (
    <Fragment>
        <Button to="#">Default</Button>
        &nbsp; &nbsp;
        <Button to="#" hover={true}>
            Hover
        </Button>
        &nbsp; &nbsp;
        <Button to="#" active={true}>
            Active
        </Button>
        &nbsp; &nbsp;
        <Button to="#" disabled={true}>
            Disabled
        </Button>
    </Fragment>
);

export default LinkButtons;
