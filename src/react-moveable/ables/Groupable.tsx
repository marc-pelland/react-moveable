import { refs } from "framework-utils";
import MoveableGroup from "../MoveableGroup";
import MoveableManager from "../MoveableManager";
import { Renderer } from "../types";

export default {
    name: "groupable",
    props: {
        defaultGroupRotate: Number,
        groupable: Boolean,
    },
    render(moveable: MoveableGroup, React: Renderer): any[] {
        const targets = moveable.props.targets || [];

        moveable.moveables = [];
        const { left, top } = moveable.state;
        const position = { left, top };

        return targets.map((target, i) => {
            return <MoveableManager
                key={"moveable" + i}
                ref={refs(moveable, "moveables", i)}
                target={target}
                origin={false}
                parentMoveable={moveable}
                parentPosition={position}
            />;
        });
    },
};
