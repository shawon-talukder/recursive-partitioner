import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import ButtonGroup from "./ButtonGroup";

const NodePartition = ({ id, color, root, rightChild, leftChild }) => {
    const [direction, setDirection] = useState("row");
    const [dir, setDir] = useState(direction);

    const colorRef = useRef(null);

    useEffect(() => {
        if (color) {
            colorRef.current.style.backgroundColor = color;
        }
    }, [color]);

    useEffect(() => {
        if (direction === "row") {
            setDir("flex-row");
        } else {
            setDir("flex-col");
        }
    }, [direction]);

    return (
        <div className={`flex ${dir} justify-between h-full w-full`}>
            {!leftChild && !rightChild && (
                <div ref={colorRef} className={`flex-1`}>
                    <ButtonGroup
                        id={id}
                        isRoot={root}
                        setDirection={setDirection}
                    />
                </div>
            )}
            {rightChild && (
                <NodePartition
                    key={rightChild.id}
                    id={rightChild.id}
                    color={rightChild.color}
                    leftChild={rightChild.leftChild}
                    rightChild={rightChild.rightChild}
                />
            )}
            {leftChild && (
                <NodePartition
                    key={leftChild.id}
                    id={leftChild.id}
                    color={leftChild.color}
                    leftChild={leftChild.leftChild}
                    rightChild={leftChild.rightChild}
                />
            )}
        </div>
    );
};

NodePartition.propTypes = {
    id: PropTypes.string,
    color: PropTypes.string,
    root: PropTypes.bool,
    leftChild: PropTypes.object || null,
    rightChild: PropTypes.object || null,
};

export default NodePartition;
