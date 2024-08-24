import PropTypes from "prop-types";

import useNodeContext from "../context/useNodeContext";
import Button from "./Button";

const ButtonGroup = ({ id, isRoot, setDirection }) => {
    const { addChildNodesById } = useNodeContext();

    const handleAddChild = (dir, id) => {
        // @TODO: change hardcoded data
        const childData = {
            leftId: "002",
            leftColor: "bg-red-200",
            rightId: "003",
            rightColor: "bg-orange-200",
        };

        addChildNodesById({ targetId: id, ...childData });

        if (dir === "H") setDirection("row");
        else setDirection("col");
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
                    handleClick={() => {
                        console.log("remove something", id);
                    }}
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
