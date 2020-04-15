import MoveableManager from "./MoveableManager";
import { GroupableProps, MoveableManagerProps } from "./types";
import ChildrenDiffer from "@egjs/children-differ";
declare class MoveableGroup extends MoveableManager<GroupableProps, any> {
    static defaultProps: {
        transformOrigin: string[];
        groupable: boolean;
        dragArea: boolean;
        keepRatio: boolean;
        targets: never[];
        defaultGroupRotate: number;
        parentMoveable: any;
        parentPosition: {
            left: number;
            top: number;
        } | null;
        target: SVGElement | HTMLElement | null;
        container: SVGElement | HTMLElement | null;
        rootContainer: HTMLElement | null;
        origin: boolean;
        zoom: number;
        edge: boolean;
        ables: import("./types").Able<any>[];
        className: string;
        pinchThreshold: number;
        triggerAblesSimultaneously: boolean;
    };
    differ: ChildrenDiffer<HTMLElement | SVGElement>;
    moveables: MoveableManager[];
    rotation: number;
    updateEvent(prevProps: MoveableManagerProps<GroupableProps>): void;
    checkUpdate(): void;
    updateRect(type?: "Start" | "" | "End", isTarget?: boolean, isSetState?: boolean): void;
    triggerEvent(name: string, e: any): any;
    protected updateAbles(): void;
}
export default MoveableGroup;
