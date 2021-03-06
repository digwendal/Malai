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

/**
 * Defines an interface to zoomable objects.
 * @author Arnaud BLOUIN
 * @since 0.1
 * @class
 */
export interface Zoomable {
    /**
     * @return {number} The zoom increment used when zooming in/out.
     */
    getZoomIncrement(): number;

    /**
     * @return {number} The maximal level of zooming allowed.
     */
    getMaxZoom(): number;

    /**
     * @return {number} The minimal level of zooming allowed.
     */
    getMinZoom(): number;

    /**
     * @return {number} The zoom level.
     * @since 0.1
     */
    getZoom(): number;

    /**
     * Zooms in the zoomable object.
     * @param {number} zoomingLevel The zooming level.
     * @param {number} x The X-coordinate of the location to zoom.
     * @param {number} y The Y-coordinate of the location to zoom.
     * @since 0.1
     */
    setZoom(x: number, y: number, zoomingLevel: number): void;

    /**
     * Transforms the given point in a point which coordinates have been modified to
     * take account of the zoom level.
     * @param {number} x The X-coordinate of the point to modify.
     * @param {number} y The Y-coordinate of the point to modify.
     * @return The transformed point.
     * @since 0.2
     */
    getZoomedPoint(x: number, y: number): void;
}
