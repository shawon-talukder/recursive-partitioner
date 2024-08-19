import { useNodeContext } from "./context/NodeContext";

function App() {
  const data = useNodeContext();
  return (
    <div className='text-3xl text-red-900 font-semibold'>{data.data.color}</div>
  )
}

export default App
