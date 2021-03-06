package org.malai.swing.binding;

import java.awt.Component;

import org.malai.instrument.Instrument;
import org.malai.swing.interaction.library.ButtonPressed;
import org.malai.swing.widget.MButton;

/**
 * This widget binding binds a button to an action that shows a JComponent.<br>
 * <br>
 * This file is part of Malai.<br>
 * Copyright (c) 2005-2014 Arnaud BLOUIN<br>
 * <br>
 * Malai is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later version.
 * <br>
 * Malai is distributed without any warranty; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.<br>
 * <br>
 * @author Arnaud BLOUIN
 * @since 0.2
 * @param <N> The type of the instrument that will contain this binding.
 */
public class Button2ShowComponent<N extends Instrument> extends Interaction2ShowComponent<ButtonPressed, N> {
	/** The button used to shows the component. */
	protected MButton button;

	public Button2ShowComponent(final N ins, final Component component, final MButton button)
			throws InstantiationException, IllegalAccessException {
		super(ins, false, ButtonPressed.class, component);
		this.button = button;
	}

	@Override
	public boolean isConditionRespected() {
		return interaction.getButton()==button;
	}
}
