import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { getRandomColor } from "../utils/services";

import useNodeContext from "../context/useNodeContext";
import Button from "./Button";

const ButtonGroup = ({ id, isRoot, setDirection }) => {
    const { addChildNodesById, deleteNodeById } = useNodeContext();

    const handleAddChild = (dir, id) => {
        const childData = {
            leftId: uuidv4(),
            leftColor: getRandomColor(),
            rightId: uuidv4(),
            rightColor: getRandomColor(),
        };

        addChildNodesById({ targetId: id, ...childData });

        if (dir === "H") setDirection("row");
        else setDirection("col");
    };

    const handleDelete = (id) => {
        deleteNodeById(id);
    };
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button
                    label="H"
                    handleClick={() => handleAddChild("H", id)}
                    classes={"border rounded-s-lg"}
                />
                <Button
                    label="V"
                    handleClick={() => handleAddChild("V", id)}
                    classes={"border-t border-b"}
                />
                <Button
                    label="-"
                    handleClick={() => handleDelete(id)}
                    classes={"border rounded-e-lg "}
                    isDisabled={isRoot}
                />
            </div>
        </div>
    );
};
ButtonGroup.propTypes = {
    id: PropTypes.string,
    isRoot: PropTypes.bool,
    setDirection: PropTypes.func,
};
export default ButtonGroup;
