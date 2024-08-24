 
import PropTypes from "prop-types";
import { createContext, useCallback, useState } from "react";

import { NodeTree } from "../lib/nodeTree";

export const NodeContext = createContext();

export const NodeContextProvider = ({ children }) => {
    const [data, setData] = useState(new NodeTree("001", "bg-lime-200"));
    const [needFetch, setNeedFetch] = useState(false);

    const addChildNodesById = useCallback(
        ({ targetId, leftId, leftColor, rightId, rightColor }) => {
            const updatedData = data.findAndAddChildrenById({
                id: targetId,
                leftId,
                leftColor,
                rightId,
                rightColor,
            });

            if (updatedData) {
                setData(updatedData);
                setNeedFetch(true);
            }
        },
        [data]
    );

    const deleteNodeById = (id) => {
        const updatedRoot = { ...data };
        const deleted = updatedRoot.deleteChildById(id);
        if (deleted) {
            setData(updatedRoot);
        }
        return deleted;
    };
    return (
        <NodeContext.Provider value={{ data, needFetch, setNeedFetch, addChildNodesById, deleteNodeById }}>
            {children}
        </NodeContext.Provider>
    );
};

NodeContextProvider.propTypes = {
    children: PropTypes.element
}
