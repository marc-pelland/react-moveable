import MoveableManager from "./MoveableManager";
import Dragger from "@daybrush/drag";
import { IObject } from "@daybrush/utils";
export declare function triggerAble<T extends IObject<any>>(moveable: MoveableManager<any>, ableType: string, eventOperation: string, eventAffix: string, eventType: any, e: any, isReqeust?: boolean): false | undefined;
export declare function getAreaAbleDragger<T>(moveable: MoveableManager<T>, ableType: string, eventAffix: string): Dragger;
export declare function getAbleDragger<T>(moveable: MoveableManager<T>, target: HTMLElement | SVGElement, ableType: string, eventAffix: string, conditionFunctions?: IObject<any>): Dragger;
