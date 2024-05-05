import Chat from "@/components/Chat";
import List from "@/components/List";

const ProfilePage = () => {
  return (
    <div className="w-[95%] my-0 mx-auto p-2 flex h-full lg:gap-8 gap-6 lg:flex-row flex-col">
      <div className="flex-[3]">
        <div className=" flex flex-col gap-6 h-full">
          <div className="flex items-center justify-between">
            <h1 className="text-xl lg:text-2xl font-medium text-slate-300 italic">
              User Information
            </h1>
            <button className="p-1.5 bg-yellow-300 text-black text-[0.8rem] font-medium rounded hover:bg-yellow-400 transition-all ease-in duration-300">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-3 p-2.5 rounded-lg bg-gradient-to-r from-[#db4f4f] to-[#261f1f]">
            <span className="flex items-center gap-4">
              Avatar :{" "}
              <img
                src="https://images.unsplash.com/photo-1691335053879-02096d6ee2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGUlMjBtZW58ZW58MHwwfDB8fHww"
                alt="user img"
                className=" w-9 h-9 rounded-full object-cover cursor-pointer"
              />
            </span>
            <span>
              Username : <span className=" font-medium">John Doe</span>
            </span>
            <span>
              Email : <span className=" font-medium">John@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className=" font-light">My List</h1>
            <button className="p-1.5 bg-yellow-300 text-black text-[0.8rem] font-medium rounded hover:bg-yellow-400 transition-all ease-in duration-300">
              Create New Post
            </button>
          </div>
          <List />
          <div className="flex items-center justify-between">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div className="flex-[2] bg-gray-100 text-zinc-800 h-full rounded-md">
        <div className="p-2.5 h-full flex flex-col gap-8">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
