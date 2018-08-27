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

import {Transition} from "../src-core/fsm/Transition";
import {OutputState} from "../src-core/fsm/OutputState";
import {InputState} from "../src-core/fsm/InputState";
import * as React from "react";

export abstract class TSTransition extends Transition<React.SyntheticEvent> {
    protected constructor(srcState: OutputState<React.SyntheticEvent>, tgtState: InputState<React.SyntheticEvent>) {
        super(srcState, tgtState);
    }
}
