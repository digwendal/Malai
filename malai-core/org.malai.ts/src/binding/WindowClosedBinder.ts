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

import {CommandImpl} from "../src-core/command/CommandImpl";
import {UpdateBinder} from "./UpdateBinder";
import {WindowClosed} from "../interaction/library/WindowClosed";
import {InteractionData} from "../src-core/interaction/InteractionData";

export class WindowClosedBinder<C extends CommandImpl> extends UpdateBinder<C, WindowClosed, InteractionData, WindowClosedBinder<C>> {
    public constructor(cmd: (i ?: InteractionData) => C) {
        super(new WindowClosed(), cmd);
    }
}
