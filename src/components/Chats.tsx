import { ProfilePhoto } from "../assets";

const Chats = () => {
  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      <div className="cursor-pointer w-full px-2 bg-[#0F2132] rounded-lg py-2 flex items-center gap-3">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img className="h-[100%] object-cover" src={ProfilePhoto} alt="profile_photo" />
        </div>
        <div>
          <p className="font-bold text-white">Julie</p>
          <p className="text-xs text-gray-400">Hello</p>
        </div>
      </div>
      <div className="cursor-pointer w-full px-2 bg-[#0F2132] rounded-lg py-2 flex items-center gap-3">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img className="h-[100%] object-cover" src={ProfilePhoto} alt="profile_photo" />
        </div>
        <div>
          <p className="font-bold text-white">Julie</p>
          <p className="text-xs text-gray-400">Hello</p>
        </div>
      </div>
      <div className="cursor-pointer w-full px-2 bg-[#0F2132] rounded-lg py-2 flex items-center gap-3">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img className="h-[100%] object-cover" src={ProfilePhoto} alt="profile_photo" />
        </div>
        <div>
          <p className="font-bold text-white">Julie</p>
          <p className="text-xs text-gray-400">Hello</p>
        </div>
      </div>
      <div className="cursor-pointer w-full px-2 bg-[#0F2132] rounded-lg py-2 flex items-center gap-3">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img className="h-[100%] object-cover" src={ProfilePhoto} alt="profile_photo" />
        </div>
        <div>
          <p className="font-bold text-white">Julie</p>
          <p className="text-xs text-gray-400">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
