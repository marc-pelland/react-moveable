import MoveableManager from "../MoveableManager";
import { Renderer, GroupableProps, DragAreaProps } from "../types";
import MoveableGroup from "../MoveableGroup";
declare const _default: {
    name: string;
    props: {
        dragArea: BooleanConstructor;
    };
    render(moveable: MoveableManager<GroupableProps, {}>, React: Renderer): any[];
    dragStart(moveable: MoveableManager<{}, {}>, { datas, clientX, clientY, inputEvent }: any): false | undefined;
    drag(moveable: MoveableManager<{}, {}>, { datas, inputEvent }: any): false | undefined;
    dragEnd(moveable: MoveableManager<DragAreaProps, {}>, e: any): false | undefined;
    dragGroupStart(moveable: MoveableGroup, e: any): false | undefined;
    dragGroup(moveable: MoveableGroup, e: any): false | undefined;
    dragGroupEnd(moveable: MoveableGroup, e: any): false | undefined;
};
export default _default;
