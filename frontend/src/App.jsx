import Background from "./components/Background";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <AppRoutes />
    </div>
  );
};

export default App;
