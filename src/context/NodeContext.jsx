/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import { NodeTree } from "../lib/nodeTree";
import { getRandomColor } from "../utils/services";


export const NodeContext = createContext();

export const NodeContextProvider = ({ children }) => {
    const [data, setData] = useState(new NodeTree(1, getRandomColor()));

    const addChildNodesById = (targetId, leftId, leftColor, rightId, rightColor) => {
        const updatedRoot = { ...data };
        const added = updatedRoot.addChildNodesById(targetId, leftId, leftColor, rightId, rightColor);
        if (added) {
            setData(updatedRoot);
        }
    };

    const deleteNodeById = (id) => {
        const updatedRoot = { ...data };
        const deleted = updatedRoot.deleteChildById(id);
        if (deleted) {
            setData(updatedRoot);
        }
        return deleted;
    };
    return (
        <NodeContext.Provider value={{ data, addChildNodesById, deleteNodeById }}>
            {children}
        </NodeContext.Provider>
    )

};

