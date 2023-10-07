"use client"
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Chat = () => {
  const pathname = usePathname();
  const id = pathname.match(/\d+/)[0];

  const [messages, setMessages] = useState([]);
  const [grupName, setGrupName] = useState('');
  const [message,setMessage] =useState('');


//   const handleCreateAnnonc = async () => {
//     const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/group/${id}/message`;

//     try {
//       const newAnnon = {
//         message,
//         situation: false,
//       };

//       const response = await axios.post(
//         apiUrl,
//         newAnnon
//       );

//     } catch (error) {
//       console.error('Errors', error);
//     }
//   };

  const createMessageForGroup = async () => {
    
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/createMessage`;
    const data = {
        content:message,
        groupId:id
    }
    try {
    axios.post(apiUrl,data)
    fetchData();
    }catch(error) {
        console.error(error)
    }
  }

  const fetchData = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/getMessagesForGroup/${id}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const formattedMessages = data.map(item => ({
                message: item.content,
                time: item.createdAt,
            }));
            setMessages(formattedMessages);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            setGrupName(data.groupName);
            console.log(data.groupName);
        })
        .catch(error => {
            console.error('404', error);
        });
};

useEffect(() => {
    if (id) {
        fetchData();
    }
}, [id]);

  return (
    <div className=' w-full h-full absolute top-0 bg-black overflow-hidden'>
    <div className=' fixed z-50 bottom-0 border-t-[5px] w-screen border-black bg-white h-[3rem] text-center '> 
    <div>
        <div className="relative h-[3rem]">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="text"
                    id="Search"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Post a announcement"
                    className="w-full rounded-md border-gray-200 h-[3rem] px-4  pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700" onClick={createMessageForGroup}>
                    <span className="sr-only">Add New Group</span>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14H8V13H7V14Z" fill="black"/>
                    <path d="M6 15H7V14L6 14V15Z" fill="black"/>
                    <path d="M7 10H8L8 11H7L7 10Z" fill="black"/>
                    <path d="M6 9H7V10H6V9Z" fill="black"/>
                    <path d="M5 9L6 9V7L5 7V9Z" fill="black"/>
                    <path d="M6 6V7L10 7V6L6 6Z" fill="black"/>
                    <path d="M10 7V8H12V7L10 7Z" fill="black"/>
                    <path d="M12 8V9L14 9V8L12 8Z" fill="black"/>
                    <path d="M14 9V10H16V9H14Z" fill="black"/>
                    <path d="M16 10V11H18L18 10H16Z" fill="black"/>
                    <path d="M18 13H19L19 11H18L18 13Z" fill="black"/>
                    <path d="M16 13V14H18L18 13H16Z" fill="black"/>
                    <path d="M14 14V15L16 15V14H14Z" fill="black"/>
                    <path d="M12 15V16H14V15H12Z" fill="black"/>
                    <path d="M10 16V17H12V16H10Z" fill="black"/>
                    <path d="M6 17V18H10V17H6Z" fill="black"/>
                    <path d="M6 15H5V17H6V15Z" fill="black"/>
                    <path d="M8 13H9V11H8V13Z" fill="black"/>
                    </svg>
                    </button>
                </span>
            </div>
        </div>
    </div>
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
