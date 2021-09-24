import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Preview from "./index";

let container = null as unknown as HTMLDivElement;

beforeEach(() => {
    container =  document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null as unknown as HTMLDivElement;
});
