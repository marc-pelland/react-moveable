import { IObject } from "@daybrush/utils";
import MoveableManager from "../MoveableManager";
import { RotatableProps, OnRotateGroup, Renderer, OnRotateStart, OnRotate, SnappableProps, SnappableState } from "../types";
import MoveableGroup from "../MoveableGroup";
export declare function getPositions(rotationPosition: "top" | "bottom" | "left" | "right", pos1: number[], pos2: number[], pos3: number[], pos4: number[]): number[][];
export declare function dragControlCondition(e: any): boolean;
declare const _default: {
    name: string;
    canPinch: boolean;
    props: {
        rotatable: BooleanConstructor;
        rotationPosition: StringConstructor;
        throttleRotate: NumberConstructor;
    };
    render(moveable: MoveableManager<RotatableProps, {}>, React: Renderer): any;
    dragControlCondition: typeof dragControlCondition;
    dragControlStart(moveable: MoveableManager<RotatableProps & SnappableProps, SnappableState>, e: any): false | OnRotateStart;
    dragControl(moveable: MoveableManager<RotatableProps, {}>, e: any): OnRotate | undefined;
    dragControlEnd(moveable: MoveableManager<RotatableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof dragControlCondition;
    dragGroupControlStart(moveable: MoveableGroup, e: any): false | OnRotateStart;
    dragGroupControl(moveable: MoveableGroup, e: any): OnRotateGroup | undefined;
    dragGroupControlEnd(moveable: MoveableGroup, e: any): any;
    request(): {
        isControl: boolean;
        requestStart(e: IObject<any>): {
            datas: {};
        };
        request(e: IObject<any>): {
            datas: {};
            parentDist: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
};
export default _default;
