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

import {KeysPressed} from "../interaction/library/KeysPressed";
import {KeysData} from "../interaction/library/KeysData";
import {CommandImpl} from "../src-core/command/CommandImpl";
import {Binder} from "./Binder";

/**
 * The binding builder to create bindings between a combobox interaction and a given command.
 * @param <C> The type of the command to produce.
 * @author Gwendal Didot
 */

export class KeyBinder<C extends CommandImpl, B extends KeyBinder<C, B>> extends Binder<C, KeysPressed, KeysData, B> {
    private readonly codes: Array<String>;
    public readonly checkCode: boolean;

    public constructor(cmdProducer: (i ?: KeysData) => C) {
        super(new KeysPressed(), cmdProducer);
        this.codes = [];
        this.checkCode =  this.isPresent(this.codes, this.interaction.getData());
    }

    private isPresent(codes: Array<String>, data: KeysData): boolean {
        let keys: Array<String>;
        keys = data.getKeys();
        return (codes.length === 0 || codes.length === keys.length && keys.every( value => codes.indexOf(value) >= 0));
    }

    public with(codes: Array<String>): B  {
        codes.forEach(value => this.codes.push(value));
        return this as {} as B;
    }
}
