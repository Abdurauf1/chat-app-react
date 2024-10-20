import { Chat, RightSideBar, Sidebar } from "../components";

const Home = () => {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <Chat />
      <RightSideBar />
    </div>
  );
};

export default Home;
