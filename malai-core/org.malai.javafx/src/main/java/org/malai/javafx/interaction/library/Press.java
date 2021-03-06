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

import javafx.event.Event;
import javafx.scene.input.MouseEvent;

public class Press extends PointInteraction<FullPointData, PressFSM, Event> {
	private final PressFSM.PressFSMHandler handler;

	public Press() {
		super(new PressFSM());

		handler = new PressFSM.PressFSMHandler() {
			@Override
			public void initToPress(final MouseEvent event) {
				setPointData(event);
			}

			@Override
			public void reinitData() {
				Press.this.reinitData();
			}
		};

		fsm.buildFSM(handler);
	}

	@Override
	public FullPointData getData() {
		return this;
	}
}
