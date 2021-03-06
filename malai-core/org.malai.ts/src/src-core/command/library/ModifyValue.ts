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

import {CommandImpl} from "../CommandImpl";

/**
 * Initialises the command with the value to set.
 * @param {*} value The value to set.
 * @class
 * @extends CommandImpl
 * @author Arnaud Blouin
 */
export abstract class ModifyValue extends CommandImpl {
    /**
     * The new value of the property.
     */
    protected value: Object | undefined;

    protected constructor(value?: Object) {
        super();
        this.value = value;
    }

    /**
     *
     */
    public flush(): void {
        super.flush();
        this.value = undefined;
    }

    /**
     *
     * @return {boolean}
     */
    public canDo(): boolean {
        return this.value !== undefined && this.isValueMatchesProperty();
    }

    /**
     * Sets the new value of the parameter to change.
     * @param {*} newValue The new value.
     */
    public setValue(newValue: Object): void {
        this.value = newValue;
    }

    /**
     * This method executes the job of methods undo, redo, and do
     * @param {*} obj The value to set. Must not be null.
     * @throws NullPointerException If the given value is null.
     */
    public abstract applyValue(obj: Object): void;

    /**
     * @return {boolean} True: the object to modified supports the selected property.
     */
    public abstract isValueMatchesProperty(): boolean;
}
