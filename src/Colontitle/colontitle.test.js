import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ColonTitle from './index';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Colontitle test", () => {
    const className = "props-colontitle";

    act(() => {
        render(<ColonTitle className={className}/>, container);
    });

    expect(
        container.querySelector("p").classList.contains(className)
    ).toEqual(true)
});
