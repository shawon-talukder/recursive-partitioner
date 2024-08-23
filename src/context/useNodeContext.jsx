import { useContext } from "react";

import { NodeContext } from "./NodeContext";

const useNodeContext = () => useContext(NodeContext);

export default useNodeContext;