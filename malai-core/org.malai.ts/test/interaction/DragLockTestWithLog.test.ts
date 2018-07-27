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

import {FSMHandler} from "../../src/src-core/fsm/FSMHandler";
import {StubFSMHandler} from "../fsm/StubFSMHandler";
import {DragLock} from "../../src/interaction/library/DragLock";
import {nodeBinder} from "../../src/binding/Bindings";
import {StubCmd} from "../command/StubCmd";
import {LogLevel} from "../../src/src-core/logging/LogLevel";
import {MArray} from "../../src/util/ArrayUtil";
import {createMouseEvent} from "./StubEvents";
import {EventRegistrationToken} from "../../src/interaction/Events";

jest.mock("../fsm/StubFSMHandler");

let interaction: DragLock;
let div1: HTMLElement;
let div2: HTMLElement;
let handler: FSMHandler;

beforeEach(() => {
    jest.clearAllMocks();
    handler = new StubFSMHandler();
    interaction = new DragLock();
    interaction.log(true);
    interaction.getFsm().log(true);
    interaction.getFsm().addHandler(handler);
    document.documentElement.innerHTML = "<html><div id='divParent'><div id='div1'></div><div id='div2'></div></div></html>";
    const elt = document.getElementById("div1");
    const elt2 = document.getElementById("div2");
    if (elt && elt2 !== null) {
        div1 = elt;
        div2 = elt2;
    }
});

test("Test normal behavior with log on Interaction", () => {
    const widgets = new MArray<EventTarget>();
    widgets.push(div1, div2);
    nodeBinder(interaction, i => new StubCmd()).log(LogLevel.INTERACTION).on(widgets).bind();
    div1.click();
    div1.click();
    div1.dispatchEvent(createMouseEvent(EventRegistrationToken.MouseMove, div1));
    div2.click();
    div2.click();
});
