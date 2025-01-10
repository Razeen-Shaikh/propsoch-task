import MainLayout from "./mainLayout/MainLayout";
import BaseRouter from "./routing/BaseRoutes";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <BaseRouter />
    </MainLayout>
  );
}

export default App;
