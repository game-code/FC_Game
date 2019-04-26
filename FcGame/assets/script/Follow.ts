import AudioManager from "./AudioManager";
import EnemySpawn from "./enemy/EnemySpawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Follow extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Animation)
    bgUpAni: cc.Animation = null;

    @property(EnemySpawn)
    enemySpawn: EnemySpawn = null;

    @property speed: number = 1

    isPlayerAni: boolean = false
    isboss: boolean = false

    // 记录游戏时间，用来做触发
    gameTime: number = 0
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let act = cc.follow(this.target, new cc.Rect(0, 0, 1130 * 20, 640 * 5))
        this.node.runAction(act)
        this.enemySpawn.enabled = false
        this.gameTime = 0
    }

    start() {

    }

    update(dt) {
        this.gameTime += dt;
        if (this.target.x < 12877) {
            this.target.x += this.speed * dt;
            if (this.target.x > 7500 && this.target.x <= 11000 && !this.isPlayerAni) {
                let state: cc.AnimationState = this.bgUpAni.play()
                state.repeatCount = 2
                this.isPlayerAni = true
            } else if (this.target.x > 11000 && this.isPlayerAni) {
                // this.bgUpAni.stop()
                // this.isPlayerAni = false
                // this.bgUpAni.node.setPositionY(350)
            }

            // cc.log('one', this.gameTime)
            if (this.gameTime > 2 && this.gameTime < 3) {
                this.enemySpawn.enabled = true
            }
        } else {
            if (!this.isboss) {
                this.isboss = true
                AudioManager.instance.playBossMusic()
            }
        }

        if (this.target.x > 2500 && this.target.x < 12000) {
            if (this.target.y <= 1520) {
                this.target.y += this.speed * dt;
            }
        } else if (this.target.x > 12000 && this.target.x < 12877) {
            if (this.target.y >= 923) {
                this.target.x -= this.speed * dt;
                this.target.y -= this.speed * dt;
            }
        }
    }
}