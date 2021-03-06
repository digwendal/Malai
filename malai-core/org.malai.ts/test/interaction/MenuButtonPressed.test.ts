/*
 * This file is part of Malai.
 * Copyright (c) 2009-2018 Arnaud BLOUIN Gwendal DIDOT
 * Malai is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later version.
 * Malai is distributed without any warranty; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 */

//This file test the implementation of the MenuButtonPressed interaction, as this interaction is not yet support by Web browser,
//this interaction and file test are here to follow the feature of the javaFX version of Malai.

import {FSMHandler} from "../../src/src-core/fsm/FSMHandler";
import {StubFSMHandler} from "../fsm/StubFSMHandler";
import {MenuButtonPressed} from "../../src/interaction/library/MenuButtonPressed";

jest.mock("../fsm/StubFSMHandler");

let interaction: MenuButtonPressed;
let button: HTMLElement;
let handler: FSMHandler;

beforeEach(() => {
    jest.clearAllMocks();
    handler = new StubFSMHandler();
    interaction = new MenuButtonPressed();
    interaction.log(true);
    interaction.getFsm().log(true);
    interaction.getFsm().addHandler(handler);
    document.documentElement.innerHTML = "<html><div><button id='bm1' type='menu'>A Button</button></div></html>"; //ignore the type issue
    const elt = document.getElementById("bm1");
    if (elt !== null) {
        button = elt;
    }
});

test("Click on menu button starts and stops the interaction", () => {
    interaction.registerToNodes([button]);
    button.click();
    expect(handler.fsmStops).toHaveBeenCalledTimes(1);
    expect(handler.fsmStarts).toHaveBeenCalledTimes(1);
});
