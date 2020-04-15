import MoveableManager from "../MoveableManager";
import { Renderer, SnappableProps, SnappableState, ScalableProps, RotatableProps, RectInfo, DraggableProps } from "../types";
export declare function snapStart(moveable: MoveableManager<SnappableProps, SnappableState>): void;
export declare function hasGuidelines(moveable: MoveableManager<any, any>, ableName: string): moveable is MoveableManager<SnappableProps, SnappableState>;
export declare function checkSnapBoundsKeepRatio(moveable: MoveableManager<SnappableProps, SnappableState>, startPos: number[], endPos: number[]): {
    horizontal: {
        isBound: boolean;
        isSnap: boolean;
        offset: number;
        dist: number;
    };
    vertical: {
        isBound: boolean;
        isSnap: boolean;
        offset: number;
        dist: number;
    };
};
export declare function checkSnapBounds(moveable: MoveableManager<SnappableProps, SnappableState>, poses: number[][], boundPoses?: number[][]): {
    horizontal: {
        isBound: boolean;
        isSnap: boolean;
        offset: number;
        dist: number;
    };
    vertical: {
        isBound: boolean;
        isSnap: boolean;
        offset: number;
        dist: number;
    };
};
export declare function checkMaxBounds(moveable: MoveableManager<SnappableProps>, width: number, height: number, poses: number[][], direction: number[], fixedPos: number[], datas: any): {
    maxWidth: number;
    maxHeight: number;
};
export declare function getCheckSnapDirections(direction: number[], keepRatio: boolean): number[][][];
export declare function getSizeOffsetInfo(moveable: MoveableManager<SnappableProps, SnappableState>, poses: number[][], direction: number[], keepRatio: boolean, datas: any): {
    width: {
        isBound: boolean;
        offset: number;
    };
    height: {
        isBound: boolean;
        offset: number;
    };
};
export declare function recheckSizeByTwoDirection(moveable: MoveableManager<SnappableProps, SnappableState>, poses: number[][], width: number, height: number, maxWidth: number, maxHeight: number, direction: number[], datas: any): number[];
export declare function checkSizeDist(moveable: MoveableManager<any, any>, getNextPoses: (widthOffset: number, heightOffset: number) => number[][], width: number, height: number, direction: number[], fixedPos: number[], isRequest: boolean, datas: any): number[];
export declare function checkSnapRotate(moveable: MoveableManager<SnappableProps & RotatableProps, any>, rect: RectInfo, origin: number[], rotation: number): number;
export declare function checkSnapSize(moveable: MoveableManager<any, any>, width: number, height: number, direction: number[], fixedPos: number[], isRequest: boolean, datas: any): number[];
export declare function checkSnapScale(moveable: MoveableManager<ScalableProps, any>, scale: number[], direction: number[], fixedPos: number[], isRequest: boolean, datas: any): number[];
export declare function solveEquation(pos1: number[], pos2: number[], snapOffset: number, isVertical: boolean): number[];
export declare function startCheckSnapDrag(moveable: MoveableManager<any, any>, datas: any): void;
export declare function checkThrottleDragRotate(throttleDragRotate: number, [distX, distY]: number[], [isVerticalBound, isHorizontalBound]: boolean[], [isVerticalSnap, isHorizontalSnap]: boolean[], [verticalOffset, horizontalOffset]: number[]): number[];
export declare function checkSnapDrag(moveable: MoveableManager<SnappableProps & DraggableProps, any>, distX: number, distY: number, throttleDragRotate: number, datas: any): {
    isSnap: boolean;
    isBound: boolean;
    offset: number;
}[];
declare const _default: {
    name: string;
    props: {
        readonly snappable: readonly [BooleanConstructor, ArrayConstructor];
        readonly snapCenter: BooleanConstructor;
        readonly snapHorizontal: BooleanConstructor;
        readonly snapVertical: BooleanConstructor;
        readonly snapElement: BooleanConstructor;
        readonly snapGap: BooleanConstructor;
        readonly isDisplaySnapDigit: BooleanConstructor;
        readonly snapDigit: NumberConstructor;
        readonly snapThreshold: NumberConstructor;
        readonly horizontalGuidelines: ArrayConstructor;
        readonly verticalGuidelines: ArrayConstructor;
        readonly elementGuidelines: ArrayConstructor;
        readonly bounds: ObjectConstructor;
        readonly innerBounds: ObjectConstructor;
    };
    render(moveable: MoveableManager<SnappableProps, SnappableState>, React: Renderer): any[];
    dragStart(moveable: MoveableManager<SnappableProps, SnappableState>, e: any): void;
    pinchStart(moveable: MoveableManager<SnappableProps, SnappableState>): void;
    dragEnd(moveable: MoveableManager<SnappableProps, SnappableState>): void;
    dragControlCondition(e: any): any;
    dragControlStart(moveable: MoveableManager<SnappableProps, SnappableState>, e: any): void;
    dragControlEnd(moveable: MoveableManager<SnappableProps, SnappableState>): void;
    dragGroupStart(moveable: any, e: any): void;
    dragGroupEnd(moveable: any): void;
    dragGroupControlStart(moveable: any, e: any): void;
    dragGroupControlEnd(moveable: any): void;
    unset(moveable: any): void;
};
export default _default;
