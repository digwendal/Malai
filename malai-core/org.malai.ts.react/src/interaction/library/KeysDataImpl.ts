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

import {Optional} from "../../util/Optional";
import {KeysData} from "./KeysData";

export class KeysDataImpl implements KeysData {

    /**
     * The keys involve in the interaction
     */
    protected keys: Array<String> | undefined;

    /**
     * The target of the event that trigger the interaction
     */
    protected target : EventTarget | undefined;

    public constructor() {}

    public reinitData(): void {
        this.keys = undefined;
        this.target = undefined;
    }

    public getKeys(): Array<String> {
        return this.keys === undefined ? [] : this.keys;
    }

    public getTarget(): Optional<EventTarget> {
        return Optional.ofNullable(this.target);
    }

    public setKeysDataTarget(event: KeyboardEvent) {
        this.target = event.target === null ? undefined : event.target;
    }

    public addKeysDataKey(event: KeyboardEvent) {
        this.keys === undefined ? this.keys = [event.code] : this.keys.push(event.code);
    }

    public removeKeysDataKey(event: KeyboardEvent) {
        if (this.keys === undefined) {
            this.keys = [];
        } else {
            const index = this.keys.indexOf(event.code, 0);
            if (index > -1) {
                this.keys.splice(index, 1);
            }
        }
    }
}
