/*
 * This file is part of Malai.
 * Copyright (c) 2005-2017 Arnaud BLOUIN
 * Malai is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later version.
 * Malai is distributed without any warranty; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 */
package org.malai.javafx.interaction2.library;

import javafx.event.Event;
import javafx.scene.control.ChoiceBox;
import org.malai.fsm.TerminalState;
import org.malai.javafx.interaction2.JfxChoiceBoxTransition;
import org.malai.javafx.interaction2.JfxFSM;
import org.malai.javafx.interaction2.JfxInteraction;

public class ChoiceBoxSelectedFSM extends JfxFSM<ChoiceBox<?>> {
	public ChoiceBoxSelectedFSM() {
		super();
	}

	@Override
	protected void buildFSM(final JfxInteraction<?, ChoiceBox<?>> interaction) {
		super.buildFSM(interaction);
		final TerminalState<Event> selected = new TerminalState<>(this, "selected");
		addState(selected);
		new JfxChoiceBoxTransition(interaction, initState, selected);
	}
}