import rive from "@rive/react";
import Home from ".";
import "../../scss/lib/index.scss";
import Components from "./components";
import Buttons from "./components/buttons";

rive.config({
    name: "ECOM",
    description: "Design System Framework for eCommerce Applications",
    copyright: "2019 Guo Yunhe"
});

rive.addPage({
    path: "/",
    title: "Home",
    component: Home
});

rive.addPage({
    path: "/components",
    title: "Components",
    component: Components
});

rive.addPage({
    path: "/components/buttons",
    title: "Buttons",
    component: Buttons
});

rive.render();
