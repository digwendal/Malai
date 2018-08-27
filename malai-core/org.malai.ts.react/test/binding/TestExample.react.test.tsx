/*
 * This file is part of Malai.
 * Copyright (c) 2009-2018 Arnaud BLOUIN
 * Malai is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later version.
 * Malai is distributed without any warranty; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 */

import * as React from "react";
import {fireEvent, render} from "react-testing-library";
import {nodeBinder} from "../../src/binding/Bindings";
import {ButtonPressed} from "../../src/interaction/library/ButtonPressed";
import {AnonCmd} from "../../src/src-core/command/AnonCmd";

export interface IProps {}

export class TestButtonComponent extends React.Component {

    public buttonRef: HTMLButtonElement | null;

    public constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        nodeBinder(new ButtonPressed(), i => new AnonCmd(() => console.log("Test"))).on(this.buttonRef).bind();
    }

    public render() {
        return(
            <div><button ref={elem => this.buttonRef = elem}>Test</button></div>
        );
    }
}


test("Test binding React", () => {
    const {getByText, debug} = render(<TestButtonComponent/>);
    const testButton = getByText("Test");
    fireEvent.click(testButton);
    debug();
});
