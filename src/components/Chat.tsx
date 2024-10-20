import { CamIcon, DotsIcon, UserAddIcon } from "../assets";
import { Messages, Input } from "./";
const Chat = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-gray-400 py-4 px-3">
        <span className="text-white text-lg">Julie</span>
        <div className="flex gap-2">
          <img className="cursor-pointer" src={CamIcon} alt="camera_icon" />
          <img className="cursor-pointer" src={UserAddIcon} alt="user_add_icon" />
          <img className="cursor-pointer" src={DotsIcon} alt="dots_icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
