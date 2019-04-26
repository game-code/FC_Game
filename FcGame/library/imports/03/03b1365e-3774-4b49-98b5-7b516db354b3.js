"use strict";
cc._RF.push(module, '03b13ZeN3RLSZi1e1Fts1Sz', 'Follow');
// script/Follow.ts

Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("./AudioManager");
var EnemySpawn_1 = require("./enemy/EnemySpawn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Follow = /** @class */ (function (_super) {
    __extends(Follow, _super);
    function Follow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.bgUpAni = null;
        _this.enemySpawn = null;
        _this.speed = 1;
        _this.isPlayerAni = false;
        _this.isboss = false;
        // 记录游戏时间，用来做触发
        _this.gameTime = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Follow.prototype.onLoad = function () {
        var act = cc.follow(this.target, new cc.Rect(0, 0, 1130 * 20, 640 * 5));
        this.node.runAction(act);
        this.enemySpawn.enabled = false;
        this.gameTime = 0;
    };
    Follow.prototype.start = function () {
    };
    Follow.prototype.update = function (dt) {
        this.gameTime += dt;
        if (this.target.x < 12877) {
            this.target.x += this.speed * dt;
            if (this.target.x > 7500 && this.target.x <= 11000 && !this.isPlayerAni) {
                var state = this.bgUpAni.play();
                state.repeatCount = 2;
                this.isPlayerAni = true;
            }
            else if (this.target.x > 11000 && this.isPlayerAni) {
                // this.bgUpAni.stop()
                // this.isPlayerAni = false
                // this.bgUpAni.node.setPositionY(350)
            }
            // cc.log('one', this.gameTime)
            if (this.gameTime > 2 && this.gameTime < 3) {
                this.enemySpawn.enabled = true;
            }
        }
        else {
            if (!this.isboss) {
                this.isboss = true;
                AudioManager_1.default.instance.playBossMusic();
            }
        }
        if (this.target.x > 2500 && this.target.x < 12000) {
            if (this.target.y <= 1520) {
                this.target.y += this.speed * dt;
            }
        }
        else if (this.target.x > 12000 && this.target.x < 12877) {
            if (this.target.y >= 923) {
                this.target.x -= this.speed * dt;
                this.target.y -= this.speed * dt;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], Follow.prototype, "target", void 0);
    __decorate([
        property(cc.Animation)
    ], Follow.prototype, "bgUpAni", void 0);
    __decorate([
        property(EnemySpawn_1.default)
    ], Follow.prototype, "enemySpawn", void 0);
    __decorate([
        property
    ], Follow.prototype, "speed", void 0);
    Follow = __decorate([
        ccclass
    ], Follow);
    return Follow;
}(cc.Component));
exports.default = Follow;

cc._RF.pop();