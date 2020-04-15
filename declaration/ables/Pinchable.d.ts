import MoveableManager from "../MoveableManager";
import { PinchableProps, SnappableState } from "../types";
import MoveableGroup from "../MoveableGroup";
declare const _default: {
    name: string;
    updateRect: boolean;
    props: {
        pinchable: BooleanConstructor;
        pinchThreshold: NumberConstructor;
    };
    pinchStart(moveable: MoveableManager<PinchableProps, SnappableState>, e: any): any;
    pinch(moveable: MoveableManager<PinchableProps, {}>, e: any): any;
    pinchEnd(moveable: MoveableManager<PinchableProps, {}>, e: any): any;
    pinchGroupStart(moveable: MoveableGroup, e: any): any;
    pinchGroup(moveable: MoveableGroup, e: any): any;
    pinchGroupEnd(moveable: MoveableGroup, e: any): any;
};
export default _default;
