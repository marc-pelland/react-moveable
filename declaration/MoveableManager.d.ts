import * as React from "react";
import Dragger from "@daybrush/drag";
import { MoveableManagerProps, MoveableManagerState, Able, RectInfo, Requester } from "./types";
import CustomDragger from "./CustomDragger";
import { IObject } from "@daybrush/utils";
declare const ControlBoxElement: {
    new (props: Readonly<IObject<any>>): {
        element: HTMLElement;
        injectResult: import("css-styled").InjectResult | null;
        render(): React.DOMElement<{
            children?: React.ReactNode;
            ref: (e: any) => void;
            className: string;
        }, any>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        getElement(): HTMLElement;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IObject<any>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<IObject<any>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: IObject<any>, context?: any): {
        element: HTMLElement;
        injectResult: import("css-styled").InjectResult | null;
        render(): React.DOMElement<{
            children?: React.ReactNode;
            ref: (e: any) => void;
            className: string;
        }, any>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        getElement(): HTMLElement;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IObject<any>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<IObject<any>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export default class MoveableManager<T = {}, U = {}> extends React.PureComponent<MoveableManagerProps<T>, MoveableManagerState<U>> {
    static defaultProps: Required<MoveableManagerProps>;
    state: MoveableManagerState<U>;
    targetAbles: Array<Able<T>>;
    controlAbles: Array<Able<T>>;
    controlBox: typeof ControlBoxElement extends new (...args: any[]) => infer K ? K : never;
    areaElement: HTMLElement;
    targetDragger: Dragger;
    controlDragger: Dragger;
    customDragger: CustomDragger;
    isUnmounted: boolean;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MoveableManagerProps<T>): void;
    componentWillUnmount(): void;
    getContainer(): HTMLElement | SVGElement;
    isMoveableElement(target: HTMLElement | SVGElement): boolean;
    dragStart(e: MouseEvent | TouchEvent): void;
    isInside(clientX: number, clientY: number): boolean;
    updateRect(type?: "Start" | "" | "End", isTarget?: boolean, isSetState?: boolean): void;
    updateEvent(prevProps: MoveableManagerProps<T>): void;
    isDragging(): boolean;
    updateTarget(type?: "Start" | "" | "End"): void;
    getRect(): RectInfo;
    request(ableName: string, param?: IObject<any>, isInstant?: boolean): Requester;
    checkUpdate(): void;
    triggerEvent(name: string, e: any): any;
    protected unsetAbles(): void;
    protected updateAbles(ables?: Able[], eventAffix?: string): void;
    protected updateState(nextState: any, isSetState?: boolean): void;
    protected renderAbles(): any[];
}
export {};
