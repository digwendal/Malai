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


import {FSM} from "../src-core/fsm/FSM";
import {CommandImpl} from "../src-core/command/CommandImpl";
import {Binder} from "./Binder";
import {KeyInteraction} from "../interaction/library/KeyInteraction";
import {KeyData} from "../interaction/library/KeyData";

export class KeyBinder<C extends CommandImpl, B extends KeyBinder<C, B>> extends
    Binder<C, KeyInteraction<KeyData, FSM<Event>, {}>, KeyData, B> {
    private readonly code: string;
}
