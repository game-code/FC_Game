import { AudioType } from "./Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.AudioClip) bgMusic: cc.AudioClip = null
    @property(cc.AudioClip) jqingEnterBgMusic: cc.AudioClip = null
    @property(cc.AudioClip) jqingStartBgMusic: cc.AudioClip = null

    @property(cc.AudioClip) zidan: cc.AudioClip = null

    static instance: AudioManager = null
    // LIFE-CYCLE CALLBACKS:
    bgMusicId: number = -1

    onLoad() {
        AudioManager.instance = this
        this.playMusic(this.bgMusic)
        // this.playMusic(this.jqingEnterBgMusic)
        // let time = this.getMusicDuration(this.bgMusicId)
        // this.scheduleOnce(() => {
        //     this.playMusic(this.jqingStartBgMusic)
        // }, time)
    }

    playEffectByType(type: AudioType) {
        switch (type) {
            case AudioType.PLYAER_ZIDAN:
                {
                    this.playEffect(this.zidan)
                }
                break;
            case AudioType.PLYAER_GET:
                {

                }
                break;
            case AudioType.PLYAER_DEAD:
                {

                }
                break;
        }
    }

    playBossMusic() {
        this.playMusic(this.jqingEnterBgMusic)
    }

    playMusic(path: any) {
        if (this.bgMusicId != -1)
            cc.audioEngine.stop(this.bgMusicId)
        this.bgMusicId = cc.audioEngine.play(path, true, 1)
    }

    getMusicDuration(id: number) {
        return cc.audioEngine.getDuration(id)
    }

    playEffect(path: any, isloop: boolean = false): number {
        return cc.audioEngine.play(path, isloop, 1)
    }

    stopEffect(id: number) {
        cc.audioEngine.stop(id)
    }

    stopAllAudio(id: number) {
        cc.audioEngine.stopAll()
    }
    // update (dt) {},
}
