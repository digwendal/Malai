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
package org.malai.javafx.interaction;

import java.util.Collections;
import java.util.Set;
import javafx.event.Event;
import javafx.scene.control.TabPane;
import org.malai.fsm.InputState;
import org.malai.fsm.OutputState;
import org.malai.javafx.interaction.library.TabEvent;

/**
 * An FSM transition for tabs.
 * @author Arnaud BLOUIN
 */
public class JfxTabSelectedTransition extends JfxWidgetTransition<TabPane> {
	public JfxTabSelectedTransition(final OutputState<Event> srcState, final InputState<Event> tgtState) {
		super(srcState, tgtState);
	}

	@Override
	public boolean accept(final Event e) {
		return e != null && e.getEventType() == TabEvent.SELECTED;
	}

	@Override
	public Set<Object> getAcceptedEvents() {
		return Collections.singleton(TabEvent.SELECTED);
	}
}
