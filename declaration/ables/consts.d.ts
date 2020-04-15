/// <reference types="react" />
export declare const MOVEABLE_ABLES: readonly [{
    name: string;
    props: {
        target: ObjectConstructor;
        container: ObjectConstructor;
        dragArea: BooleanConstructor;
        origin: BooleanConstructor;
        transformOrigin: ArrayConstructor;
        edge: BooleanConstructor;
        ables: ArrayConstructor;
        className: StringConstructor;
        pinchThreshold: NumberConstructor;
    };
}, {
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
    render(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>, React: import("..").Renderer): any[];
    dragStart(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>, e: any): void;
    pinchStart(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>): void;
    dragEnd(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>): void;
    dragControlCondition(e: any): any;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>, e: any): void;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").SnappableProps, import("..").SnappableState>): void;
    dragGroupStart(moveable: any, e: any): void;
    dragGroupEnd(moveable: any): void;
    dragGroupControlStart(moveable: any, e: any): void;
    dragGroupControlEnd(moveable: any): void;
    unset(moveable: any): void;
}, {
    name: string;
    updateRect: boolean;
    props: {
        pinchable: BooleanConstructor;
        pinchThreshold: NumberConstructor;
    };
    pinchStart(moveable: import("../MoveableManager").default<import("..").PinchableProps, import("..").SnappableState>, e: any): any;
    pinch(moveable: import("../MoveableManager").default<import("..").PinchableProps, {}>, e: any): any;
    pinchEnd(moveable: import("../MoveableManager").default<import("..").PinchableProps, {}>, e: any): any;
    pinchGroupStart(moveable: import("../MoveableGroup").default, e: any): any;
    pinchGroup(moveable: import("../MoveableGroup").default, e: any): any;
    pinchGroupEnd(moveable: import("../MoveableGroup").default, e: any): any;
}, {
    name: string;
    props: {
        draggable: BooleanConstructor;
        throttleDrag: NumberConstructor;
        throttleDragRotate: NumberConstructor;
    };
    render(moveable: import("../MoveableManager").default<import("..").DraggableProps, import("..").DraggableState>, React: import("..").Renderer): JSX.Element | undefined;
    dragStart(moveable: import("../MoveableManager").default<import("..").DraggableProps, any>, e: any): false | import("..").OnDragStart;
    drag(moveable: import("../MoveableManager").default<import("..").DraggableProps, any>, e: any): import("..").OnDrag | undefined;
    dragEnd(moveable: import("../MoveableManager").default<import("..").DraggableProps, import("..").DraggableState>, e: any): any;
    dragGroupStart(moveable: import("../MoveableGroup").default, e: any): false | import("..").OnDragStart;
    dragGroup(moveable: import("../MoveableGroup").default, e: any): import("..").OnDragGroup | undefined;
    dragGroupEnd(moveable: import("../MoveableGroup").default, e: any): any;
    request(moveable: import("../MoveableManager").default<any, any>): {
        isControl: boolean;
        requestStart(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            distX: number;
            distY: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
    unset(moveable: any): void;
}, {
    name: string;
    canPinch: boolean;
    props: {
        rotatable: BooleanConstructor;
        rotationPosition: StringConstructor;
        throttleRotate: NumberConstructor;
    };
    render(moveable: import("../MoveableManager").default<import("..").RotatableProps, {}>, React: import("..").Renderer): any;
    dragControlCondition: typeof import("./Rotatable").dragControlCondition;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").RotatableProps & import("..").SnappableProps, import("..").SnappableState>, e: any): false | import("..").OnRotateStart;
    dragControl(moveable: import("../MoveableManager").default<import("..").RotatableProps, {}>, e: any): import("..").OnRotate | undefined;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").RotatableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof import("./Rotatable").dragControlCondition;
    dragGroupControlStart(moveable: import("../MoveableGroup").default, e: any): false | import("..").OnRotateStart;
    dragGroupControl(moveable: import("../MoveableGroup").default, e: any): import("..").OnRotateGroup | undefined;
    dragGroupControlEnd(moveable: import("../MoveableGroup").default, e: any): any;
    request(): {
        isControl: boolean;
        requestStart(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDist: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    ableGroup: string;
    updateRect: boolean;
    canPinch: boolean;
    props: {
        resizable: BooleanConstructor;
        throttleResize: NumberConstructor;
        renderDirections: ArrayConstructor;
        baseDirection: ArrayConstructor;
        keepRatio: BooleanConstructor;
    };
    render(moveable: import("../MoveableManager").default<Partial<import("..").ResizableProps>, {}>, React: import("..").Renderer): any[] | undefined;
    dragControlCondition: typeof import("./utils").directionCondition;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").ResizableProps & import("..").DraggableProps, import("..").SnappableState>, e: any): false | import("..").OnResizeStart;
    dragControl(moveable: import("../MoveableManager").default<import("..").ResizableProps & import("..").DraggableProps, {}>, e: any): import("..").OnResize | undefined;
    dragControlAfter(moveable: import("../MoveableManager").default<import("..").ResizableProps & import("..").DraggableProps, {}>, e: any): true | undefined;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").ResizableProps & import("..").DraggableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof import("./utils").directionCondition;
    dragGroupControlStart(moveable: import("../MoveableGroup").default, e: any): false | import("..").OnResizeStart;
    dragGroupControl(moveable: import("../MoveableGroup").default, e: any): import("..").OnResizeGroup | undefined;
    dragGroupControlEnd(moveable: import("../MoveableGroup").default, e: any): any;
    request(moveable: import("../MoveableManager").default<any, {}>): {
        isControl: boolean;
        requestStart(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDirection: any;
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDist: number[];
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    ableGroup: string;
    canPinch: boolean;
    props: {
        scalable: BooleanConstructor;
        throttleScale: NumberConstructor;
        renderDirections: StringConstructor;
        keepRatio: BooleanConstructor;
    };
    render(moveable: import("../MoveableManager").default<Partial<import("..").ResizableProps & import("..").ScalableProps>, {}>, React: import("..").Renderer): any[] | undefined;
    dragControlCondition: typeof import("./utils").directionCondition;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").ScalableProps & import("..").DraggableProps, import("..").SnappableState>, e: any): false | import("..").OnScaleStart;
    dragControl(moveable: import("../MoveableManager").default<import("..").ScalableProps & import("..").DraggableProps & import("..").GroupableProps, import("..").SnappableState>, e: any): false | import("..").OnScale;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").ScalableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof import("./utils").directionCondition;
    dragGroupControlStart(moveable: import("../MoveableGroup").default, e: any): false | import("..").OnScaleGroupStart;
    dragGroupControl(moveable: import("../MoveableGroup").default, e: any): import("..").OnScaleGroup | undefined;
    dragGroupControlEnd(moveable: import("../MoveableGroup").default, e: any): any;
    request(): {
        isControl: boolean;
        requestStart(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDirection: any;
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDist: number[];
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    ableGroup: string;
    props: {
        warpable: BooleanConstructor;
        renderDirections: ArrayConstructor;
    };
    render(moveable: import("../MoveableManager").default<import("..").ResizableProps & import("..").ScalableProps & import("..").WarpableProps, {}>, React: import("..").Renderer): any[] | undefined;
    dragControlCondition(e: any): boolean;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").WarpableProps, import("..").SnappableState>, e: any): any;
    dragControl(moveable: import("../MoveableManager").default<import("..").WarpableProps & import("..").SnappableProps, import("..").SnappableState>, e: any): boolean;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").WarpableProps, {}>, e: any): any;
}, {
    name: string;
    canPinch: boolean;
    props: {
        scrollable: BooleanConstructor;
        scrollContainer: ObjectConstructor;
        scrollThreshold: NumberConstructor;
    };
    dragStart(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): void;
    checkScroll(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): true | undefined;
    drag(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): true | undefined;
    dragEnd(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): void;
    dragControlStart(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): void;
    dragControl(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): true | undefined;
    dragControlEnd(moveable: import("../MoveableManager").default<import("..").ScrollableProps, {}>, e: any): void;
    dragGroupStart(moveable: import("../MoveableGroup").default, e: any): void;
    dragGroup(moveable: import("../MoveableGroup").default, e: any): true | undefined;
    dragGroupEnd(moveable: import("../MoveableGroup").default, e: any): void;
    dragGroupControlStart(moveable: import("../MoveableGroup").default, e: any): void;
    dragGroupContro(moveable: import("../MoveableGroup").default, e: any): true | undefined;
    dragGroupControEnd(moveable: import("../MoveableGroup").default, e: any): void;
}, {
    name: string;
    props: {
        dragArea: BooleanConstructor;
    };
    render(moveable: import("../MoveableManager").default<import("..").GroupableProps, {}>, React: import("..").Renderer): any[];
    dragStart(moveable: import("../MoveableManager").default<{}, {}>, { datas, clientX, clientY, inputEvent }: any): false | undefined;
    drag(moveable: import("../MoveableManager").default<{}, {}>, { datas, inputEvent }: any): false | undefined;
    dragEnd(moveable: import("../MoveableManager").default<import("..").DragAreaProps, {}>, e: any): false | undefined;
    dragGroupStart(moveable: import("../MoveableGroup").default, e: any): false | undefined;
    dragGroup(moveable: import("../MoveableGroup").default, e: any): false | undefined;
    dragGroupEnd(moveable: import("../MoveableGroup").default, e: any): false | undefined;
}, {
    name: string;
    props: {
        origin: BooleanConstructor;
    };
    render(moveable: import("../MoveableManager").default<{}, {}>, React: import("..").Renderer): any;
}];
