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
import javafx.scene.control.ToggleButton;
import org.malai.fsm.InputState;
import org.malai.fsm.OutputState;

/**
 * An FSM transition for toggle buttons.
 * @author Arnaud BLOUIN
 */
public class JfxToggleButtonPressedTransition extends JfxWidgetTransition<ToggleButton> {
	public JfxToggleButtonPressedTransition(final OutputState<Event> srcState, final InputState<Event> tgtState) {
		super(srcState, tgtState);
	}
}
