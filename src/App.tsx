import { ListUsers } from "./pages/listUsers";

function App() {
  return (
    <main className="container mx-auto py-16  min-h-screen">
      <div className=" bg-gray-200 p-4 rounded-xl shadow-xl h-full">
        <ListUsers />
      </div>
    </main>
  );
}

export default App;
