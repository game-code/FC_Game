(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/enemy/EnemySpawn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ac37b7hBGZEH53uExjSDUlo', 'EnemySpawn', __filename);
// script/enemy/EnemySpawn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EnemyBase_1 = require("./EnemyBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemySpawn = /** @class */ (function (_super) {
    __extends(EnemySpawn, _super);
    function EnemySpawn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyPre = null;
        _this.enemysPool = null;
        return _this;
        // update (dt) {},
    }
    EnemySpawn_1 = EnemySpawn;
    // LIFE-CYCLE CALLBACKS:
    EnemySpawn.prototype.onLoad = function () {
        EnemySpawn_1.instance = this;
        this.enemysPool = new cc.NodePool(EnemyBase_1.default);
        for (var i = 0; i < 10; ++i) {
            var enemyNode = cc.instantiate(this.enemyPre);
            this.enemysPool.put(enemyNode);
        }
    };
    EnemySpawn.prototype.start = function () {
    };
    EnemySpawn.prototype.onEnable = function () {
        var _this = this;
        cc.log('one');
        this.schedule(function () {
            _this.createEnemy();
        }, 0.2, 5, 0);
    };
    EnemySpawn.prototype.onDisable = function () {
    };
    EnemySpawn.prototype.createEnemy = function () {
        var enemy = this.getEnemy();
        enemy.parent = this.node.parent;
        enemy.setPosition(this.node.position);
        // enemy.getComponent(EnemyBase).init()
    };
    // nodePool
    EnemySpawn.prototype.getEnemy = function () {
        var enemy;
        if (this.enemysPool.size() <= 0) {
            var enemyNode = cc.instantiate(this.enemyPre);
            this.enemysPool.put(enemyNode);
        }
        enemy = this.enemysPool.get();
        return enemy;
    };
    EnemySpawn.prototype.putEnemy = function (enemy) {
        if (enemy) {
            this.enemysPool.put(enemy);
        }
    };
    EnemySpawn.instance = null;
    __decorate([
        property(cc.Prefab)
    ], EnemySpawn.prototype, "enemyPre", void 0);
    EnemySpawn = EnemySpawn_1 = __decorate([
        ccclass
    ], EnemySpawn);
    return EnemySpawn;
    var EnemySpawn_1;
}(cc.Component));
exports.default = EnemySpawn;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=EnemySpawn.js.map
        