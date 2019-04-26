"use strict";
cc._RF.push(module, 'd5d0eCivclCJKMRvFSHOxAL', 'Bird');
// script/enemy/Bird.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EnemyBase_1 = require("./EnemyBase");
var EnemySpawn_1 = require("./EnemySpawn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSpeed = -200;
        return _this;
    }
    Bird.prototype.start = function () {
        var actArr = [];
        var act1 = cc.moveBy(0.5, cc.p(this.moveSpeed * 0.1, 25));
        var act2 = cc.moveBy(1, cc.p(this.moveSpeed * 0.2, -50));
        var act3 = cc.moveBy(1, cc.p(this.moveSpeed * 0.2, 50));
        actArr.push(act1);
        for (var i = 0; i < 10; i++) {
            actArr.push(act2);
            actArr.push(act3);
        }
        this.node.runAction(cc.sequence(actArr));
    };
    Bird.prototype.update = function (dt) {
    };
    Bird.prototype.onCollisionEnter = function (other, self) {
        cc.log(self, other);
        if (other.node.group == 'playerzidan' || other.node.group == 'player') {
            EnemySpawn_1.default.instance.putEnemy(this.node);
        }
    };
    Bird = __decorate([
        ccclass
    ], Bird);
    return Bird;
}(EnemyBase_1.default));
exports.default = Bird;

cc._RF.pop();