import { MoveableManagerState, OnCustomDrag } from "./types";
export declare function setCustomDrag(state: MoveableManagerState<any>, delta: number[], inputEvent: any, isPinch: boolean, isConvert: boolean): any;
export default class CustomDragger {
    private prevX;
    private prevY;
    private startX;
    private startY;
    private isDrag;
    private isFlag;
    private datas;
    dragStart(client: number[], inputEvent: any): OnCustomDrag;
    drag(client: number[], inputEvent: any): OnCustomDrag;
    move(delta: number[], inputEvent: any): OnCustomDrag;
}
