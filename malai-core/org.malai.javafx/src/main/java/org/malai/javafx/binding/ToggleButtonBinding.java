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
package org.malai.javafx.binding;

import java.util.List;
import javafx.scene.Node;
import org.malai.command.CommandImpl;
import org.malai.javafx.instrument.JfxInstrument;
import org.malai.javafx.interaction.help.HelpAnimation;
import org.malai.javafx.interaction.library.ToggleButtonPressed;

/**
 * A widget binding for toggle buttons.
 * @param <C> The command to produce.
 * @param <I> The instrument.
 * @author Arnaud Blouin
 */
public abstract class ToggleButtonBinding<C extends CommandImpl, I extends JfxInstrument> extends JfXWidgetBinding<C, ToggleButtonPressed, I> {
	/**
	 * Creates a toggle button binding.
	 * @param ins The instrument that contains the binding.
	 * @param cmdClass The type of the command that will be created. Used to instantiate the command by reflexivity.
	 * The class must be public and must have a constructor with no parameter.
	 * @param widgets The widgets used by the binding. Cannot be null.
	 * @throws IllegalArgumentException If the given interaction or instrument is null.
	 */
	public ToggleButtonBinding(final I ins, final Class<C> cmdClass, final List<Node> widgets,
							   final boolean help, final HelpAnimation animation) {
		super(ins, false, cmdClass, new ToggleButtonPressed(), widgets, help, animation);
	}

	/**
	 * Creates a toggle button binding.
	 * @param ins The instrument that contains the binding.
	 * @param cmdClass The type of the command that will be created. Used to instantiate the command by reflexivity.
	 * The class must be public and must have a constructor with no parameter.
	 * @param widgets The widgets used by the binding. Cannot be null.
	 * @throws IllegalArgumentException If the given interaction or instrument is null.
	 */
	public ToggleButtonBinding(final I ins, final Class<C> cmdClass, final List<Node> widgets) {
		this(ins, cmdClass, widgets, false, null);
	}
}
