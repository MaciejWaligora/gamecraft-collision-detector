import { Signal } from "gamecraft-utils";
import { View, ViewConfig } from "gamecraft-view";
import * as PIXI from 'pixijs';
export declare class CollisionDetector {
    static impactors: View<ViewConfig>[];
    static collisionZones: View<ViewConfig>[];
    static collisionDetectedSignal: Signal<View<ViewConfig>>;
    static addImpactor(view: View<ViewConfig>): void;
    static removeImpactor(view: View<ViewConfig>): void;
    static addCollisionZone(view: View<ViewConfig>): void;
    static removeCollisionZone(view: View<ViewConfig>): void;
    static checkForCollisions(): void;
    private static isColliding;
    static clear(): void;
    static init(renderer: PIXI.Application): void;
}
