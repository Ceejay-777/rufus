import React from 'react'

const ChatOverlay = ({open}) => {
  return (
    <div
      className={`w-[80vw] py-4 px-6 shadow-md rounded-2xl bg-white text-black absolute bottom-[100%] right-0 mb-4 max-w-[580px] z-50 ${
        open || "hidden"
      }`}
    >
      <h2 className="text-xl font-bold mb-2">
        Enter here and follow us on our social networks 🔥
      </h2>

      <p className="text-sm mb-2">
        Do you need to resolve any questions? 🤖 We have active support 365 days
        a year, contact us below. You can also check out our social networks to
        follow the project closely.
      </p>

      <div className="bg-blue-300 p-2 rounded-xl mb-2  hover:bg-blue-200 max-w-[400px]">
        <h4 className="font-bold">Live chat via Telegram</h4>
        <p className="text-xs font-light">Support for generel questions.</p>
      </div>

      <div className="bg-black text-white p-2 rounded-xl mb-2 hover:bg-slate-900 max-w-[400px]">
        <h4 className="font-bold">Official Telegram channel</h4>
        <p className="text-xs font-light">
          Announcements and official information
        </p>
      </div>
    </div>
  );
}

export default ChatOverlay
