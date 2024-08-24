import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import ButtonGroup from "./ButtonGroup";

const NodePartition = ({ id, color, rightChild, leftChild }) => {
    const [direction, setDirection] = useState("root");
    const [dir, setDir] = useState(direction);

    useEffect(() => {
        if (direction === "root" || direction === "row") {
            setDir("flex-row");
        } else {
            setDir("flex-col");
        }
    }, [direction]);

    return (
        <div className={`flex ${dir} justify-between h-full w-full`}>
            {(!leftChild || !rightChild) && (
                <div className={`flex-1 ${color}`}>
                    <ButtonGroup
                        id={id}
                        isRoot={id === "001" || direction === "root"}
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
    leftChild: PropTypes.object || null,
    rightChild: PropTypes.object || null,
};

export default NodePartition;
