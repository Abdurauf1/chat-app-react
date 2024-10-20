import { ProfilePhoto } from "../assets";

const RightSideBar = () => {
  return (
    <div className="w-[350px] border-l pt-5">
      <h2 className="font-bold text-3xl text-center">User Info</h2>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-32 h-32 contai rounded-full overflow-hidden">
          <img className="object-cover h-full" src={ProfilePhoto} alt="profile_photo" />
        </div>
        <p className="font-bold text-xl mt-2">Julie</p>
        <p>@julie</p>
      </div>
    </div>
  );
};

export default RightSideBar;
