import * as React from "react";
import { MoveableProps, MoveableInterface, RectInfo, AbleRequestParam, Requester } from "./types";
import MoveableManager from "./MoveableManager";
import MoveableGroup from "./MoveableGroup";
export default class Moveable<T = {}> extends React.PureComponent<MoveableProps & T> implements MoveableInterface {
    moveable: MoveableManager<MoveableProps> | MoveableGroup;
    render(): JSX.Element;
    isMoveableElement(target: HTMLElement | SVGElement): boolean;
    dragStart(e: MouseEvent | TouchEvent): void;
    isInside(clientX: number, clientY: number): boolean;
    updateRect(): void;
    updateTarget(): void;
    isDragging(): boolean;
    getRect(): RectInfo;
    request(ableName: string, params?: AbleRequestParam): Requester;
    destroy(): void;
}
