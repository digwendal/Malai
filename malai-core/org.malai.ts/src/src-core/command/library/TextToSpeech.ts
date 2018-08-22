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

export class TextToSpeech extends CommandImpl {

    private readonly speechSynth: SpeechSynthesis;
    private readonly speechSynthUtterance: SpeechSynthesisUtterance;

    private readonly textToSpeech: string;
    private readonly pitch: number;
    private readonly rate: number;
    private readonly lang: string;
    private readonly voice: SpeechSynthesisVoice;
    private readonly volume: number;

    /**
     *
     * @param {string} data
     * @param {number} [pitch=0] The value of utter.pitch
     * @param {number} [rate=0] The value of utter.rate
     * @param {string} [lang="en-UK"] The lang use by the utter
     * @param {SpeechSynthesisVoice} [voice] The voice use by the utter, if not provide it will picked the voice suit for the utter.lang
     * @param {number} [volume=1] The volume of the utter will speak
     */

    public constructor(data: string, pitch ?: number, rate ?: number, lang ?: string, voice ?: SpeechSynthesisVoice, volume ?: number) {
        super();
        this.speechSynth = new SpeechSynthesis();
        this.speechSynthUtterance = new SpeechSynthesisUtterance();
        this.textToSpeech = data;
        this.pitch = pitch ? pitch : 0;
        this.rate = rate ? rate : 0;
        this.lang = lang ? lang : "en-UK";
        if (voice !== undefined) {
            this.voice = voice;
        }
        this.volume = volume ? volume : 1;
    }

    public canDo(): boolean {
        return false;
    }

    protected doCmdBody(): void {
        const synth = this.speechSynth;
        const utter = this.speechSynthUtterance;
        utter.text = this.textToSpeech;
        utter.pitch = this.pitch;
        utter.rate = this.rate;
        utter.lang = this.lang;
        utter.voice = this.voice;
        utter.volume = this.volume;
        synth.speak(utter);
    }
}
