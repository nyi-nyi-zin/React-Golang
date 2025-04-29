import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import { Provider } from "./components/ui/provider";

export const BASE_URL = "http://localhost:5000/api";

function App() {
  return (
    <Provider>
      <Stack h="100vh">
        <Navbar />
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
      </Stack>
    </Provider>
  );
}

export default App;
