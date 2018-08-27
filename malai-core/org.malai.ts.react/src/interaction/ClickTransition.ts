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

import {TSTransition} from "./TSTransition";
import {InputState} from "../src-core/fsm/InputState";
import {OutputState} from "../src-core/fsm/OutputState";
import {EventRegistrationToken} from "./Events";
import * as React from "react";

/**
 * This transition corresponds to a pressure of a button of a pointing device.
 * @author Arnaud BLOUIN
 */
export class ClickTransition extends TSTransition {
    /**
     * Creates the transition.
     */
    public constructor(srcState: OutputState<React.SyntheticEvent>, tgtState: InputState<React.SyntheticEvent>) {
        super(srcState, tgtState);
    }

    public accept(event: React.SyntheticEvent): boolean {
        return event.type === "click" ;
    }

    public isGuardOK(event: React.SyntheticEvent): boolean {
        return true;
    }

    public getAcceptedEvents(): Set<string> {
        return new Set([EventRegistrationToken.Click]);
    }
}
