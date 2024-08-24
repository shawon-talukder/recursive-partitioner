import { useEffect, useState } from "react";
import NodePartition from "./components/NodePartition";
import useNodeContext from "./context/useNodeContext";

function App() {
  const { data, needFetch, setNeedFetch } = useNodeContext();
  const [nodeData, setNodeData] = useState(data);

  useEffect(() => {
    if (needFetch) {
      setNodeData(data);
      setNeedFetch((prev)=> !prev);
    }
  }, [needFetch, data, setNeedFetch]);

  return (
    <div className="relative h-screen w-screen">
      <NodePartition
        id={nodeData.id}
        color={nodeData.color}
        leftChild={nodeData.leftChild}
        rightChild={nodeData.rightChild}
      />
    </div>
  );
}

export default App;
