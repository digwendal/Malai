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
import {AnonCmd} from "../../src/src-core/command/AnonCmd";
import {Click} from "../../src/interaction/library/Click";

export interface IProps {}

export class ClickComponent extends React.Component {

    public clickRef: HTMLDivElement | null;

    public constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        nodeBinder(new Click(), i => new AnonCmd(() => console.log("Test"))).on(this.clickRef).bind();
    }

    public render() {
        return(
            <div ref={elem => this.clickRef = elem}>Click</div>
        );
    }
}


test("Test click binding", () => {
    const {getByText, debug} = render(<ClickComponent/>);
    const click = getByText("Click");
    fireEvent.click(click);
    debug();
});
