package org.malai.interaction;

import org.malai.stateMachine.TargetableState;

/**
 * This state defines a aborting state that aborts the interaction.<br>
 * <br>
 * This file is part of Malai.<br>
 * Copyright (c) 2009-2012 Arnaud BLOUIN<br>
 * <br>
 * Malai is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later version.
 * <br>
 * Malai is distributed without any warranty; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.<br>
 * <br>
 * 05/19/2010<br>
 * @author Arnaud BLOUIN
 * @since 0.1
 */
public class AbortingState extends State implements TargetableState {
	/**
	 * @see State#State(String)
	 */
	public AbortingState(final String name) {
		super(name);
	}


	@Override
	public void onIngoing() {
		stateMachine.onAborting();
	}
}
