"use strict";
cc._RF.push(module, 'd30ccdpycxBT4DpjwPJK/Ul', 'EnemyBase');
// script/enemy/EnemyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyBase = /** @class */ (function (_super) {
    __extends(EnemyBase, _super);
    function EnemyBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    // init() {
    // }
    EnemyBase.prototype.start = function () {
    };
    EnemyBase = __decorate([
        ccclass
    ], EnemyBase);
    return EnemyBase;
}(cc.Component));
exports.default = EnemyBase;

cc._RF.pop();