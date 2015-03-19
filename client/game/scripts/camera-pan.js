angular.module('game.scripts.camera-pan', ['components.script', 'three'])
    .run(['ScriptBank', 'THREE', function (ScriptBank, THREE) {
        'use strict';

        var PanScript = function (entity) {
            this.entity = entity;
        };

        PanScript.prototype.update = function (dt, elapsed, timestamp) {
            // this script should be attached to an entity with a camera component....
            var cameraComponent = this.entity.getComponent('camera');

            if (!cameraComponent) {
                // throw error?
                return;
            }

            cameraComponent.camera.position.set(Math.cos(timestamp / 10) * 40, 20, Math.sin(timestamp / 10) * 20);
            cameraComponent.camera.lookAt(new THREE.Vector3(-10, 15, 0));
        };

        ScriptBank.add('/scripts/built-in/camera-pan.js', PanScript);
    }]);
