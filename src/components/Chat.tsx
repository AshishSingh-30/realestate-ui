import { useState } from "react";
import { Textarea } from "./ui/textarea";

const Chat = () => {
  const [chat, setChat] = useState(null);
  return (
    <div className="h-full flex flex-col ">
      <div className=" flex-1 ">
        <h3 className="font-semibold text-base">Messages</h3>
        <div className="flex flex-col gap-1.5 max-h-52 overflow-y-auto py-1">
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
          <div
            className="bg-white p-2 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md transition-all ease-in duration-200"
            onClick={() => setChat(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user dp"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className=" font-medium text-sm">John doe</span>
            <p className="text-xs">Lorem, ipsum dolor sit amet c...</p>
          </div>
        </div>
      </div>
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between p-2 shadow-lg shadow-blue-500/50 rounded-lg">
          <div className=" bg-yellow-200 py-1.5 px-2 rounded font-medium flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user dp"
                className="w-7 h-7 object-cover rounded-full"
              />
              <span className="text-sm">John Doe</span>
            </div>
            <span className=" cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className=" p-2 h-52 overflow-auto flex flex-col gap-2">
            <div className=" w-1/2">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 ">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 ">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 ">
              <p className=" text-[0.8rem] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ullam!
              </p>
              <span className=" text-[0.7rem] bg-blue-200 p-0.5 rounded ">
                1 hour ago
              </span>
            </div>
          </div>
          <div className="border-t border-solid border-slate-700 text-sm flex items-center justify-between gap-2 p-2">
            <Textarea
              placeholder="message"
              className="flex-[3] placeholder:text-slate-600 placeholder:italic min-h-8 p-2 font-medium"
            ></Textarea>
            <button className="flex-1 bg-blue-500 hover:shadow-sm hover:shadow-blue-400/50 transition-all ease-in duration-300 text-white rounded-sm border-none cursor-pointer py-2 px-1.5">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
