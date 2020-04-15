import { IObject } from "@daybrush/utils";
import Dragger, * as DraggerTypes from "@daybrush/drag";
import CustomDragger from "./CustomDragger";
import { Position } from "@daybrush/drag";
export interface MoveableClientRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    clientLeft?: number;
    clientTop?: number;
    clientWidth?: number;
    clientHeight?: number;
    scrollWidth?: number;
    scrollHeight?: number;
}
export declare type MoveableManagerProps<T = {}> = {
    parentMoveable?: any;
    parentPosition?: {
        left: number;
        top: number;
    } | null;
} & MoveableDefaultProps & T;
export interface MoveableDefaultProps {
    target?: SVGElement | HTMLElement | null;
    container?: SVGElement | HTMLElement | null;
    rootContainer?: HTMLElement | null;
    dragArea?: boolean;
    origin?: boolean;
    zoom?: number;
    transformOrigin?: Array<string | number> | "";
    edge?: boolean;
    ables?: Able[];
    className?: string;
    pinchThreshold?: number;
    triggerAblesSimultaneously?: boolean;
}
export declare type MoveableManagerState<T = {}> = {
    container: SVGElement | HTMLElement | null | undefined;
    target: SVGElement | HTMLElement | null | undefined;
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    beforeMatrix: number[];
    matrix: number[];
    targetTransform: string;
    rootMatrix: number[];
    targetMatrix: number[];
    offsetMatrix: number[];
    is3d: boolean;
    transformOrigin: number[];
    beforeOrigin: number[];
    origin: number[];
    beforeDirection: 1 | -1;
    direction: 1 | -1;
    pos1: number[];
    pos2: number[];
    pos3: number[];
    pos4: number[];
    dragger: Dragger | CustomDragger | null;
    targetClientRect: MoveableClientRect;
    containerClientRect: MoveableClientRect;
    rotation: number;
} & T;
export interface Renderer {
    createElement(type: any, props?: any, ...children: any[]): any;
}
export interface Guideline {
    type: "horizontal" | "vertical";
    element?: Element | null;
    center?: boolean;
    pos: number[];
    size: number;
    sizes?: number[];
    gap?: number;
    gapGuidelines?: Guideline[];
}
export interface SnapBoundInfo {
    isBound: boolean;
    isSnap: boolean;
    offset: number;
}
export interface BoundInfo {
    isBound: boolean;
    offset: number;
    pos: number;
}
export interface SnapOffsetInfo {
    isSnap: boolean;
    offset: number;
    pos: number;
}
export interface SnapInfo {
    isSnap: boolean;
    posInfos: SnapPosInfo[];
}
export interface SnapPosInfo {
    pos: number;
    guidelineInfos: SnapGuidelineInfo[];
}
export interface SnapGuidelineInfo {
    dist: number;
    offset: number;
    guideline: Guideline;
}
export interface MoveableProps extends MoveableManagerProps<any>, DraggableProps, RotatableProps, ResizableProps, ScalableProps, WarpableProps, PinchableProps, GroupableProps, SnappableProps, ScrollableProps, RenderProps {
    target?: SVGElement | HTMLElement | Array<SVGElement | HTMLElement> | null;
}
export declare type MoveableState = MoveableManagerState;
export interface Able<T = any> {
    name: string & keyof MoveableManagerProps<T>;
    props: IObject<any>;
    ableGroup?: string;
    updateRect?: boolean;
    canPinch?: boolean;
    unset?: (moveable: MoveableManagerProps<any>) => any;
    render?: (moveable: MoveableManagerProps<any>, renderer: Renderer) => any;
    dragStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragStart) => any;
    drag?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDrag) => any;
    dragEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragEnd) => any;
    pinchStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinchStart) => any;
    pinch?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinch) => any;
    pinchEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinchEnd) => any;
    dragControlCondition?: (target: SVGElement | HTMLElement) => boolean;
    dragControlStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragStart) => any;
    dragControl?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDrag) => any;
    dragControlEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragEnd) => any;
    dragGroupCondition?: (e: any) => boolean;
    dragGroupStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragStart) => any;
    dragGroup?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDrag) => any;
    dragGroupEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragEnd) => any;
    pinchGroupStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinchStart) => any;
    pinchGroup?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinch) => any;
    pinchGroupEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnPinchEnd) => any;
    dragGroupControlCondition?: (e: any) => boolean;
    dragGroupControlStart?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragStart) => any;
    dragGroupControl?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragStart) => any;
    dragGroupControlEnd?: (moveable: MoveableManagerProps<any>, e: DraggerTypes.OnDragEnd) => any;
    request?: (moveable: MoveableManagerProps<any>) => AbleRequester;
}
export interface OnEvent {
    currentTarget: MoveableInterface;
    target: HTMLElement | SVGElement;
    clientX: number;
    clientY: number;
    datas: IObject<any>;
    inputEvent: any;
}
export interface AbleRequestParam {
    isInstant?: boolean;
    [key: string]: any;
}
export interface Requester {
    request(param: IObject<any>): this;
    requestEnd(param: IObject<any>): this;
}
export interface AbleRequester {
    isControl: boolean;
    requestStart(param: IObject<any>): IObject<any>;
    request(param: IObject<any>): IObject<any>;
    requestEnd(): IObject<any>;
}
export interface OnPinchStart extends OnEvent {
}
export interface OnPinch extends OnEvent {
}
export interface OnPinchEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnDragStart extends OnEvent {
    set: (translate: number[]) => void;
}
export interface OnDrag extends OnEvent {
    beforeDelta: number[];
    beforeDist: number[];
    beforeTranslate: number[];
    delta: number[];
    dist: number[];
    translate: number[];
    transform: string;
    left: number;
    top: number;
    bottom: number;
    right: number;
    isPinch: boolean;
}
export interface OnDragEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnScaleStart extends OnEvent {
    direction: number[];
    dragStart: OnDragStart | false;
    set: (scale: number[]) => void;
}
export interface OnScale extends OnEvent {
    direction: number[];
    scale: number[];
    dist: number[];
    delta: number[];
    transform: string;
    isPinch: boolean;
    drag: OnDrag;
}
export interface OnScaleEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnResizeStart extends OnEvent {
    direction: number[];
    dragStart: OnDragStart | false;
    set: (sizes: number[]) => any;
    setOrigin: (origin: Array<string | number>) => any;
}
export interface OnResize extends OnEvent {
    direction: number[];
    width: number;
    height: number;
    offsetWidth: number;
    offsetHeight: number;
    dist: number[];
    delta: number[];
    isPinch: boolean;
    drag: OnDrag;
}
export interface OnResizeEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnRotateStart extends OnEvent {
    set: (rotate: number) => void;
}
export interface OnRotate extends OnEvent {
    beforeDist: number;
    beforeDelta: number;
    beforeRotate: number;
    dist: number;
    delta: number;
    rotate: number;
    transform: string;
    isPinch: boolean;
}
export interface OnRotateEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnWarpStart extends OnEvent {
    set: (matrix: number[]) => any;
}
export interface OnWarp extends OnEvent {
    transform: string;
    delta: number[];
    dist: number[];
    matrix: number[];
    multiply: (matrix1: number[], matrix2: number[], n?: number) => number[];
}
export interface OnWarpEnd extends OnEvent {
    isDrag: boolean;
}
export interface OnDragGroupStart extends OnDragStart {
    targets: Array<HTMLElement | SVGElement>;
    events: OnDragStart[];
}
export interface OnDragGroup extends OnDrag {
    targets: Array<HTMLElement | SVGElement>;
    events: OnDrag[];
}
export interface OnDragGroupEnd extends OnDragEnd {
    targets: Array<HTMLElement | SVGElement>;
    isDrag: boolean;
}
export interface OnRotateGroupStart extends OnRotateStart {
    targets: Array<HTMLElement | SVGElement>;
    events: Array<OnRotateStart & {
        dragStart: OnDragStart | false;
    }>;
}
export interface OnRotateGroup extends OnRotate {
    targets: Array<HTMLElement | SVGElement>;
    events: Array<OnRotate & {
        drag: OnDrag;
    }>;
    set: (rotation: number) => any;
}
export interface OnRotateGroupEnd extends OnRotateEnd {
    targets: Array<HTMLElement | SVGElement>;
    isDrag: boolean;
}
export interface OnResizeGroupStart extends OnResizeStart {
    targets: Array<HTMLElement | SVGElement>;
    events: OnResizeStart[];
}
export interface OnResizeGroup extends OnResize {
    targets: Array<HTMLElement | SVGElement>;
    events: Array<OnResize & {
        drag: OnDrag;
    }>;
}
export interface OnResizeGroupEnd extends OnResizeEnd {
    targets: Array<HTMLElement | SVGElement>;
    isDrag: boolean;
}
export interface OnScaleGroupStart extends OnScaleStart {
    targets: Array<HTMLElement | SVGElement>;
    events: OnScaleStart[];
}
export interface OnScaleGroup extends OnScale {
    targets: Array<HTMLElement | SVGElement>;
    events: Array<OnScale & {
        drag: OnDrag;
    }>;
}
export interface OnScaleGroupEnd extends OnScaleEnd {
    targets: Array<HTMLElement | SVGElement>;
    isDrag: boolean;
}
export interface OnPinchGroupStart extends OnPinchStart {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnPinchGroup extends OnPinch {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnPinchGroupEnd extends OnPinchEnd {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnClick extends OnEvent {
    inputTarget: HTMLElement | SVGElement;
    isTarget: boolean;
    containsTarget: boolean;
}
export interface OnClickGroup extends OnEvent {
    targets: Array<HTMLElement | SVGElement>;
    inputTarget: HTMLElement | SVGElement;
    isTarget: boolean;
    containsTarget: boolean;
    targetIndex: number;
}
export interface OnRenderStart extends OnEvent {
    isPinch: boolean;
}
export interface OnRender extends OnEvent {
    isPinch: boolean;
}
export interface OnRenderEnd extends OnEvent {
    isPinch: boolean;
    isDrag: boolean;
}
export interface OnScroll extends OnEvent {
    scrollContainer: HTMLElement;
    direction: number[];
}
export interface OnScrollGroup extends OnScroll {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnRenderGroupStart extends OnRenderStart {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnRenderGroup extends OnRender {
    targets: Array<HTMLElement | SVGElement>;
}
export interface OnRenderGroupEnd extends OnRenderEnd {
    targets: Array<HTMLElement | SVGElement>;
}
export interface DraggableOptions {
    draggable?: boolean;
    throttleDrag?: number;
    throttleDragRotate?: number;
}
export interface DraggableProps extends DraggableOptions {
    onDragStart?: (e: OnDragStart) => any;
    onDrag?: (e: OnDrag) => any;
    onDragEnd?: (e: OnDragEnd) => any;
    onDragGroupStart?: (e: OnDragGroupStart) => any;
    onDragGroup?: (e: OnDragGroup) => any;
    onDragGroupEnd?: (e: OnDragGroupEnd) => any;
}
export interface DraggableState {
    dragInfo: {
        startRect: RectInfo;
        dist: number[];
    } | null;
}
export interface ResizableOptions {
    resizable?: boolean;
    throttleResize?: number;
    renderDirections?: string[];
    baseDirection?: number[];
    keepRatio?: boolean;
}
export interface ResizableProps extends ResizableOptions {
    onResizeStart?: (e: OnResizeStart) => any;
    onResize?: (e: OnResize) => any;
    onResizeEnd?: (e: OnResizeEnd) => any;
    onResizeGroupStart?: (e: OnResizeGroupStart) => any;
    onResizeGroup?: (e: OnResizeGroup) => any;
    onResizeGroupEnd?: (e: OnResizeGroupEnd) => any;
}
export interface ScalableOptions {
    scalable?: boolean;
    throttleScale?: number;
    renderDirections?: string[];
    keepRatio?: boolean;
}
export interface ScalableProps extends ScalableOptions {
    onScaleStart?: (e: OnScaleStart) => any;
    onScale?: (e: OnScale) => any;
    onScaleEnd?: (e: OnScaleEnd) => any;
    onScaleGroupStart?: (e: OnScaleGroupStart) => any;
    onScaleGroup?: (e: OnScaleGroup) => any;
    onScaleGroupEnd?: (e: OnScaleGroupEnd) => any;
}
export interface GapGuideline extends Guideline {
    renderPos: number[];
}
export interface RotatableOptions {
    rotatable?: boolean;
    rotationPosition?: "top" | "bottom" | "left" | "right";
    throttleRotate?: number;
}
export interface RotatableProps extends RotatableOptions {
    onRotateStart?: (e: OnRotateStart) => any;
    onRotate?: (e: OnRotate) => any;
    onRotateEnd?: (e: OnRotateEnd) => any;
    onRotateGroupStart?: (e: OnRotateGroupStart) => any;
    onRotateGroup?: (e: OnRotateGroup) => any;
    onRotateGroupEnd?: (e: OnRotateGroupEnd) => any;
}
export interface WarpableOptions {
    warpable?: boolean;
    renderDirections?: string[];
}
export interface WarpableProps extends WarpableOptions {
    onWarpStart?: (e: OnWarpStart) => any;
    onWarp?: (e: OnWarp) => any;
    onWarpEnd?: (e: OnWarpEnd) => any;
}
export interface PinchableOptions {
    pinchable?: boolean | Array<"rotatable" | "resizable" | "scalable">;
}
export interface PinchableProps extends PinchableOptions, ResizableProps, ScalableProps, RotatableProps {
    onPinchStart?: (e: OnPinchStart) => any;
    onPinch?: (e: OnPinch) => any;
    onPinchEnd?: (e: OnPinchEnd) => any;
    onPinchGroupStart?: (e: OnPinchGroupStart) => any;
    onPinchGroup?: (e: OnPinchGroup) => any;
    onPinchGroupEnd?: (e: OnPinchGroupEnd) => any;
}
export interface GroupableOptions {
    defaultGroupRotate?: number;
}
export interface GroupableProps extends PinchableProps, DraggableProps, RotatableProps, ResizableProps, ScalableProps, SnappableProps, RenderProps, DragAreaProps, ScrollableProps, GroupableOptions {
    groupable?: boolean;
    targets?: Array<HTMLElement | SVGElement>;
    updateGroup?: boolean;
}
export interface SnappableOptions {
    snappable?: boolean | string[];
    snapCenter?: boolean;
    snapHorizontal?: boolean;
    snapVertical?: boolean;
    snapElement?: boolean;
    snapGap?: boolean;
    snapThreshold?: number;
    snapDigit?: number;
    isDisplaySnapDigit?: boolean;
    horizontalGuidelines?: number[];
    verticalGuidelines?: number[];
    elementGuidelines?: Element[];
    bounds?: BoundType;
    innerBounds?: InnerBoundType;
}
export interface SnappableProps extends SnappableOptions {
    onSnap?: (e: OnSnap) => any;
}
export interface OnSnap {
    guidelines: Guideline[];
    elements: Guideline[][];
    gaps: GapGuideline[];
}
export interface InnerBoundType {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface BoundType {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
export interface SnappableState {
    guidelines: any[];
    snapRenderInfo?: SnapRenderInfo | null;
    enableSnap: boolean;
}
export interface SnapRenderInfo {
    direction?: number[];
    snap?: boolean;
    center?: boolean;
}
export interface ScrollableOptions {
    scrollable?: boolean;
    scrollContainer?: HTMLElement;
    scrollThreshold?: number;
    getScrollPosition?: (e: {
        scrollContainer: HTMLElement;
        direction: number[];
    }) => number[];
}
export interface ScrollableProps extends ScrollableOptions {
    onScroll?: (e: OnScroll) => any;
    onScrollGroup?: (e: OnScrollGroup) => any;
}
export interface DragAreaProps {
    onClick?: (e: OnClick) => any;
    onClickGroup?: (e: OnClickGroup) => any;
}
export interface RenderProps {
    onRenderStart?: (e: OnRenderStart) => any;
    onRender?: (e: OnRender) => any;
    onRenderEnd?: (e: OnRenderEnd) => any;
    onRenderGroupStart?: (e: OnRenderGroupStart) => any;
    onRenderGroup?: (e: OnRenderGroup) => any;
    onRenderGroupEnd?: (e: OnRenderGroupEnd) => any;
}
export interface OnCustomDrag extends Position {
    inputEvent: any;
    isDrag: boolean;
    datas: IObject<any>;
    originalDatas: IObject<any>;
    parentEvent: boolean;
    parentDragger: CustomDragger;
}
export interface RectInfo {
    pos1: number[];
    pos2: number[];
    pos3: number[];
    pos4: number[];
    left: number;
    top: number;
    width: number;
    height: number;
    offsetWidth: number;
    offsetHeight: number;
    origin: number[];
    beforeOrigin: number[];
}
export interface MoveableInterface {
    getRect(): RectInfo;
    isMoveableElement(target: HTMLElement | SVGElement): boolean;
    updateRect(isNotSetState?: boolean): void;
    updateTarget(): void;
    request(ableName: string, params: IObject<any>): Requester;
    destroy(): void;
    dragStart(e: MouseEvent | TouchEvent): void;
    isInside(clientX: number, clientY: number): boolean;
    isDragging(): boolean;
    setState(state: any, callback?: () => any): any;
}
