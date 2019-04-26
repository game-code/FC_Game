import BaseLogic from "../BaseLogic";
import Player from "./Player";

const { ccclass, property } = cc._decorator;

export default class PlayerLogic extends BaseLogic {
    playerUI: Player

    // attr
    moveSpeed: number = 200
    zidanMaxNum: number = 5
    zidanCurNum: number = 0;
    zidanGapTime: number = 0.05
    zidanAddTime: number = 0
    maxHp: number = 16
    curHp: number = 16
    atk: number = 1

    constructor(_playerUI: Player) {
        super()
        this.playerUI = _playerUI
    }

    init() {

    }
}
