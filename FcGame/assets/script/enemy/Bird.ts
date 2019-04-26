import EnemyBase from "./EnemyBase";
import EnemySpawn from "./EnemySpawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bird extends EnemyBase {

    moveSpeed: number = -200

    start() {
        let actArr = []
        let act1 = cc.moveBy(0.5, cc.p(this.moveSpeed * 0.1, 25))
        let act2 = cc.moveBy(1, cc.p(this.moveSpeed * 0.2, -50))
        let act3 = cc.moveBy(1, cc.p(this.moveSpeed * 0.2, 50))
        actArr.push(act1)
        for (let i = 0; i < 10; i++) {
            actArr.push(act2)
            actArr.push(act3)
        }
        this.node.runAction(cc.sequence(actArr))
    }

    update(dt) {
    }

    onCollisionEnter(other, self) {
        cc.log(self, other)
        if (other.node.group == 'playerzidan' || other.node.group == 'player') {
            EnemySpawn.instance.putEnemy(this.node)
        }
    }
}
