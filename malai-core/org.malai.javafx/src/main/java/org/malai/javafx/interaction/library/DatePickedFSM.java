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
package org.malai.javafx.interaction.library;

import javafx.event.ActionEvent;
import javafx.event.Event;
import org.malai.fsm.TerminalState;
import org.malai.javafx.interaction.FSMDataHandler;
import org.malai.javafx.interaction.JfxDatePickedTransition;
import org.malai.javafx.interaction.JfxFSM;

public class DatePickedFSM extends JfxFSM<DatePickedFSM.DatePickedFSMHandler> {
	public DatePickedFSM() {
		super();
	}

	@Override
	protected void buildFSM(final DatePickedFSMHandler dataHandler) {
		if(states.size() > 1) return;
		super.buildFSM(dataHandler);
		final TerminalState<Event> picked = new TerminalState<>(this, "picked");
		addState(picked);
		new JfxDatePickedTransition(initState, picked) {
			@Override
			public void action(final Event event) {
				if(dataHandler != null && event instanceof ActionEvent) {
					dataHandler.initToPickedHandler((ActionEvent) event);
				}
			}
		};
	}

	interface DatePickedFSMHandler extends FSMDataHandler {
		void initToPickedHandler(ActionEvent event);
	}
}
