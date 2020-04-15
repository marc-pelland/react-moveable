import MoveableManager from "../MoveableManager";
import { ScrollableProps, OnScroll } from "../types";
import { triggerEvent, fillParams } from "../utils";
import MoveableGroup from "../MoveableGroup";
import DragScroll from "@scena/dragscroll";

function getDefaultScrollPosition(e: { scrollContainer: HTMLElement, direction: number[] }) {
    const scrollContainer = e.scrollContainer;

    return [
        scrollContainer.scrollLeft,
        scrollContainer.scrollTop,
    ];
}

export default {
    name: "scrollable",
    canPinch: true,
    props: {
        scrollable: Boolean,
        scrollContainer: Object,
        scrollThreshold: Number,
    },
    dragStart(moveable: MoveableManager<ScrollableProps>, e: any) {
        const props = moveable.props;
        const {
            scrollContainer = moveable.getContainer(),
        } = props;

        const dragScroll = new DragScroll();

        e.datas.dragScroll = dragScroll;

        const draggerName = e.isControl ? "controlDragger" : "targetDragger";
        const targets = e.targets;

        dragScroll.on("scroll", ({ container, direction }) => {
            const params = fillParams<OnScroll>(moveable, e, {
                scrollContainer: container,
                direction,
            }) as any;

            const eventName = targets ? "onScrollGroup" : "onScroll" as any;
            if (targets) {
                params.targets = targets;
            }
            triggerEvent(moveable, eventName, params);
        }).on("move", ({ offsetX, offsetY }) => {
            moveable[draggerName].scrollBy(offsetX, offsetY, e.inputEvent, false);
        });
        dragScroll.dragStart(e, {
            container: scrollContainer as HTMLElement,
        });
    },
    checkScroll(moveable: MoveableManager<ScrollableProps>, e: any) {
        const {
            dragScroll,
        } = e.datas;
        if (!dragScroll) {
            return;
        }
        const {
            scrollContainer = moveable.getContainer(),
            scrollThreshold = 0,
            getScrollPosition = getDefaultScrollPosition,
        } = moveable.props;

        dragScroll.drag(e, {
            container: scrollContainer,
            threshold: scrollThreshold,
            getScrollPosition: (ev: any) => {
                return getScrollPosition({ scrollContainer: ev.container, direction: ev.direction });
            },
        });

        return true;
    },
    drag(moveable: MoveableManager<ScrollableProps>, e: any) {
        return this.checkScroll(moveable, e);
    },
    dragEnd(moveable: MoveableManager<ScrollableProps>, e: any) {
        e.datas.dragScroll.dragEnd();
        e.datas.dragScroll = null;
    },
    dragControlStart(moveable: MoveableManager<ScrollableProps>, e: any) {
        return this.dragStart(moveable, { ...e, isControl: true });
    },
    dragControl(moveable: MoveableManager<ScrollableProps>, e: any) {
        return this.drag(moveable, e);
    },
    dragControlEnd(moveable: MoveableManager<ScrollableProps>, e: any) {
        return this.dragEnd(moveable, e);
    },
    dragGroupStart(moveable: MoveableGroup, e: any) {
        return this.dragStart(moveable, { ...e, targets: moveable.props.targets });
    },
    dragGroup(moveable: MoveableGroup, e: any) {
        return this.drag(moveable, { ...e, targets: moveable.props.targets });
    },
    dragGroupEnd(moveable: MoveableGroup, e: any) {
        return this.dragEnd(moveable, { ...e, targets: moveable.props.targets });
    },
    dragGroupControlStart(moveable: MoveableGroup, e: any) {
        return this.dragStart(moveable, { ...e, targets: moveable.props.targets, isControl: true });
    },
    dragGroupContro(moveable: MoveableGroup, e: any) {
        return this.drag(moveable, { ...e, targets: moveable.props.targets });
    },
    dragGroupControEnd(moveable: MoveableGroup, e: any) {
        return this.dragEnd(moveable, { ...e, targets: moveable.props.targets });
    },
};
