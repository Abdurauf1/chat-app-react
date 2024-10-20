import { Chats, Navbar, Search } from "./index";

const Sidebar = () => {
  return (
    <div className="w-[350px] bg-white h-full border-r-2 p-2">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
