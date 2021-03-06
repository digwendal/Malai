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
import {AnonNodeBinding} from "./AnonNodeBinding";
import {KeyBinder} from "./KeyBinder";
import {KeysData} from "../interaction/library/KeysData";
import {KeysPressed} from "../interaction/library/KeysPressed";
import {TSWidgetBinding} from "./TSWidgetBinding";

export class KeyNodeBinder<C extends CommandImpl> extends KeyBinder<C, KeyNodeBinder<C>> {

    public constructor(cmdPoducer: (i ?: KeysData) => C) {
        super(cmdPoducer);
    }

    public bind(): TSWidgetBinding<C, KeysPressed, KeysData> {
        return new AnonNodeBinding(false, this.interaction, this.cmdProducer,
            this.initCmd,
            () => {},
            () => this.checkCode,
            this.onEnd,
            () => {},
            () => {},
            () => {},
            this.widgets,
            this.additionalWidgets,
            this.targetWidgets,
            this._async,
            false,
            this.logLevels);
    }
}
