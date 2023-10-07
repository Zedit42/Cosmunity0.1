"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Chat = () => {
  const pathname = usePathname();
  const id = pathname.match(/\d+/)[0];

  const [messages, setMessages] = useState([]);
  const [grupName, setGrupName] = useState('');


  useEffect(() => {
    if (id) {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/getMessagesForGroup/${id}`;
        const GroupNameapiUrl = `${process.env.NEXT_PUBLIC_API_URL}/getGroup/${id}`;

        fetch(`${apiUrl}`)
            .then((response) => response.json())
            .then((data) => {
            const formattedMessages = data.map((item) => ({
                message: item.content,
                time: item.createdAt,
            }));
            setMessages(formattedMessages);
            })
        .catch((error) => console.error('Error:', error));
        fetch(GroupNameapiUrl)
        .then(response => response.json())
        .then(data => {
          setGrupName(data.grupName);
          console.log(grupName);
        })
        .catch(error => {
          console.error('404', error);
        });

    }
  }, [id]);

  return (
    <div className=' w-full h-full absolute top-0 bg-black overflow-hidden'>
    <div className=' fixed z-50 bottom-0 border-t-[5px] w-screen border-black bg-white h-[3rem] opacity-80 text-center '> You are not a Admin</div>
      <div className=' absolute -top-[46px] -left-[46px] h-full w-full'>
        <div className=" z-10 pixelbg  flex flex-col w-full h-screen overflow-x-auto ">
        <div className=' flex h-[3rem]  border-b-[5px] border-black gap-5 '>
          <Link href={'/'}>
            <img
                src='/back.svg'
                width={64}
                height={64}
                className=' h-[3rem] my-auto'
            />
          </Link>
          <p className=' text-2xl my-auto'>Cosmunity Official</p>
        </div>
          {messages.map((message, index) => (
            <div className=' flex  '>
              <img className="w-[48px] h-[48px] object-cover object-center sm:object-contain" src={'/profilepic.svg'} alt="Profile Picture" />
              <div key={index} className="flex flex-col w-[80%] messagepixelbg gap-10">
                <div className="">
                  <p className="">{message.message}</p>
                  <p className="">{message.time.substring(message.time.indexOf("T") + 1, message.time.indexOf("T") + 6)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
