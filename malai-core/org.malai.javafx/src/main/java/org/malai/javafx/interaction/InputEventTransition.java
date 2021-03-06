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

import javafx.event.Event;
import javafx.scene.input.InputEvent;
import org.malai.fsm.InputState;
import org.malai.fsm.OutputState;
import org.malai.fsm.Transition;

/**
 * This abstract transition defines a model for transitions based on input events.
 * @author Arnaud Blouin
 */
public abstract class InputEventTransition<T extends InputEvent> extends Transition<Event> {
	protected T event;

	/**
	 * Creates a transition.
	 * @param srcState The source state of the transition.
	 * @param tgtState The srcObject state of the transition.
	 * @throws IllegalArgumentException If one of the given parameters is null or not valid.
	 */
	public InputEventTransition(final OutputState<Event> srcState, final InputState<Event> tgtState) {
		super(srcState, tgtState);
	}

	/**
	 * @return The events at the origin of the transition. Cannot be null.
	 */
	public T getEvent() {
		return event;
	}

	/**
	 * Sets the event of the transition.
	 * @param evt The new transition. Cannot be null.
	 */
	public void setEvent(final T evt) {
		if(evt != null) {
			event = evt;
		}
	}
}
