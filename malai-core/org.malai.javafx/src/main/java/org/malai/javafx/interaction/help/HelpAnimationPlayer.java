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
package org.malai.javafx.interaction.help;

import java.util.ArrayList;
import java.util.List;
import javafx.animation.SequentialTransition;

public final class HelpAnimationPlayer {
	public static final HelpAnimationPlayer INSTANCE = new HelpAnimationPlayer();

	private SequentialTransition mainAnimation;
	private List<HelpAnimation> currentAnimations;

	private HelpAnimationPlayer() {
		super();
		mainAnimation = null;
		currentAnimations = null;
	}

	public void add(final HelpAnimation animation) {
		if(animation != null) {
			if(mainAnimation == null) {
				mainAnimation = new SequentialTransition();
				currentAnimations = new ArrayList<>();
				mainAnimation.setCycleCount(-1);
			}

			if(currentAnimations.stream().noneMatch(anim -> anim.getZonePane() == animation.getZonePane())) {
				animation.getHelpPane().setDisable(false);
				animation.getHelpPane().setVisible(true);
			}

			mainAnimation.stop();
			currentAnimations.add(animation);
			mainAnimation.getChildren().add(animation.getAnimation());
			mainAnimation.play();
		}
	}

	public void stop(final HelpAnimation animation) {
		if(animation != null && mainAnimation != null && animation.isInstalled()) {
			mainAnimation.stop();
			currentAnimations.remove(animation);
			mainAnimation.getChildren().remove(animation.getAnimation());

			if(currentAnimations.stream().noneMatch(anim -> anim.getZonePane() == animation.getZonePane())) {
				animation.getHelpPane().setDisable(true);
				animation.getHelpPane().setVisible(false);
			}

			if(!currentAnimations.isEmpty()) {
				mainAnimation.play();
			}
		}
	}
}
