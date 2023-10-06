"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Chat = () => {
  const pathname = usePathname();
  const id = pathname.match(/\d+/)[0];

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/group/${id}/message`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
            const formattedMessages = data.map((item) => ({
                message: item.message,
                time: item.time,
            }));
            setMessages(formattedMessages);
            })
        .catch((error) => console.error('Error:', error));
        console.log(apiUrl);
    }
  }, [id]);

  return (
    <div className=' '>
        <img
            src="/bg.png"
            className=" fixed top-0 w-screen min-w-[1024px] h-screen object-cover -z-10"
       />
      <div className=" z-10 pixelbg  max-w-[90%] flex flex-col overflow-x-auto max-h-[80vh] ">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col ">
            <div className="">
              <p className="">{message.message}</p>
              <p className="">{message.time.substring(message.time.indexOf("T") + 1, message.time.indexOf("T") + 6)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
