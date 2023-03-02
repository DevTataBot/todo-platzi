import { TodoProvider } from "./TodoContext";
import View from "./view";

const App = () => {
  return(
    <TodoProvider>
      <View />
    </TodoProvider>
  ) 
};

export default App;
