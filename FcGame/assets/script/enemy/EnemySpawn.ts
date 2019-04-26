import EnemyBase from "./EnemyBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemySpawn extends cc.Component {

    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;

    enemysPool: cc.NodePool = null

    static instance: EnemySpawn = null
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        EnemySpawn.instance = this
        this.enemysPool = new cc.NodePool(EnemyBase)
        for (let i = 0; i < 10; ++i) {
            let enemyNode = cc.instantiate(this.enemyPre)
            this.enemysPool.put(enemyNode)
        }
    }

    start() {

    }

    onEnable() {
        cc.log('one')
        this.schedule(() => {
            this.createEnemy()
        }, 0.2, 5, 0)
    }

    onDisable() {

    }

    createEnemy() {
        let enemy = this.getEnemy()
        enemy.parent = this.node.parent
        enemy.setPosition(this.node.position)
        // enemy.getComponent(EnemyBase).init()
    }


    // nodePool
    getEnemy(): cc.Node {
        let enemy: cc.Node
        if (this.enemysPool.size() <= 0) {
            let enemyNode = cc.instantiate(this.enemyPre)
            this.enemysPool.put(enemyNode)
        }

        enemy = this.enemysPool.get()

        return enemy
    }

    putEnemy(enemy: cc.Node) {
        if (enemy) {
            this.enemysPool.put(enemy)
        }
    }
    // update (dt) {},
}
