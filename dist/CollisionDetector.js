"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionDetector = void 0;
const gamecraft_utils_1 = require("gamecraft-utils");
class CollisionDetector {
    static addImpactor(view) {
        CollisionDetector.impactors.push(view);
    }
    static removeImpactor(view) {
        CollisionDetector.impactors = CollisionDetector.impactors.filter(el => el !== view);
    }
    static addCollisionZone(view) {
        CollisionDetector.collisionZones.push(view);
    }
    static removeCollisionZone(view) {
        CollisionDetector.collisionZones = CollisionDetector.collisionZones.filter(el => el !== view);
    }
    static checkForCollisions() {
        for (const impactor of CollisionDetector.impactors) {
            for (const zone of CollisionDetector.collisionZones) {
                if (CollisionDetector.isColliding(impactor, zone) && impactor !== zone) {
                    CollisionDetector.collisionDetectedSignal.emit(zone);
                }
            }
        }
    }
    static isColliding(impactor, zone) {
        return (impactor.x < zone.x + zone.width &&
            impactor.x + impactor.width > zone.x &&
            impactor.y < zone.y + zone.height &&
            impactor.y + impactor.height > zone.y);
    }
    static clear() {
        CollisionDetector.collisionZones = [];
        CollisionDetector.impactors = [];
    }
    static init(renderer) {
        renderer.ticker.add(() => {
            CollisionDetector.checkForCollisions();
        });
    }
}
exports.CollisionDetector = CollisionDetector;
CollisionDetector.impactors = [];
CollisionDetector.collisionZones = [];
CollisionDetector.collisionDetectedSignal = new gamecraft_utils_1.Signal();
