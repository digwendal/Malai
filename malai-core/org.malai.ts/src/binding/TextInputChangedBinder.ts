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

import {CommandImpl} from "../src-core/command/CommandImpl";
import {UpdateBinder} from "./UpdateBinder";
import {TextInputChanged} from "../interaction/library/TextInputChanged";
import {WidgetData} from "../src-core/interaction/WidgetData";

export class TextInputChangedBinder<C extends CommandImpl> extends UpdateBinder<C, TextInputChanged,
    WidgetData<Element>, TextInputChangedBinder<C>> {

    public constructor(cmdProducer: (i?: WidgetData<Element>) => C) {
        super(new TextInputChanged(), cmdProducer);
    }

}
