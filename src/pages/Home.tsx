import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
