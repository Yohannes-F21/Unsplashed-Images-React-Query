import { useGlobalContext } from "./context";
const App = () => {
  const { state } = useGlobalContext();
  console.log(state);

  return <h1>Unsplash Images Starter</h1>;
};
export default App;
