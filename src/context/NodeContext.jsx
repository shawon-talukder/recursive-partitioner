import PropTypes from "prop-types";
import { createContext, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import { NodeTree } from "../lib/nodeTree";
import { getRandomColor } from "../utils/services";

export const NodeContext = createContext();

export const NodeContextProvider = ({ children }) => {
    const [data, setData] = useState(new NodeTree(uuid(), getRandomColor()));
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

    const deleteNodeById = useCallback((id) => {
        const updatedData = data.findAndDeleteNodeByID(id);
        if (updatedData) {
            setNeedFetch(true);
        }
    }, [data]);

    return (
        <NodeContext.Provider
            value={{
                data,
                needFetch,
                setNeedFetch,
                addChildNodesById,
                deleteNodeById,
            }}
        >
            {children}
        </NodeContext.Provider>
    );
};

NodeContextProvider.propTypes = {
    children: PropTypes.element,
};
