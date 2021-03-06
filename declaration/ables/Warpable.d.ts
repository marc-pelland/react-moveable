import MoveableManager from "../MoveableManager";
import { WarpableProps, ScalableProps, ResizableProps, Renderer, SnappableProps, SnappableState } from "../types";
declare const _default: {
    name: string;
    ableGroup: string;
    props: {
        warpable: BooleanConstructor;
        renderDirections: ArrayConstructor;
    };
    render(moveable: MoveableManager<ResizableProps & ScalableProps & WarpableProps, {}>, React: Renderer): any[] | undefined;
    dragControlCondition(e: any): boolean;
    dragControlStart(moveable: MoveableManager<WarpableProps, SnappableState>, e: any): any;
    dragControl(moveable: MoveableManager<WarpableProps & SnappableProps, SnappableState>, e: any): boolean;
    dragControlEnd(moveable: MoveableManager<WarpableProps, {}>, e: any): any;
};
export default _default;
