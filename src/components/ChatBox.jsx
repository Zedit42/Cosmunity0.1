"use client"
import Link from 'next/link';
import React, {useState, useEffect} from 'react'


const fetchData = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/allGroups`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  };

  
const ChatBox = ({ walletAddress }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
      const fetchGroups = async () => {
        const data = await fetchData();
        setGroups(data);
      };
  
      fetchGroups();
    }, []);
  return (
    <div className='flex flex-col'>
        <div className=' flex h-[3rem] justify-between border-b-[5px] border-black gap-5 '>
            <img
                src='/logo.png'
                width={64}
                height={64}
                className=' h-[2rem] my-auto mb-[5px]'
            />
            <p className=' truncate my-auto '>{walletAddress}</p>
            {/* <p className=' text-sm w-1/6 my-auto'> AKT {tokenAmount}</p> */}
        </div>
        <div>
            <div className="relative h-8">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="text"
                    id="Search"
                    placeholder="New Group Id..."
                    className="w-full rounded-md border-gray-200 h-8  pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Add New Group</span>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 9.33334H12.6667V11.3333H14.6667V12.3333H12.6667V14.3333H11.6667V12.3333H9.66666V11.3333H11.6667V9.33334Z" fill="black"/>
                    <path d="M6.66666 5.33334V6.33334H17.6667V5.33334H6.66666Z" fill="black"/>
                    <path d="M18.6667 6.33334H17.6667V17.3333H18.6667V6.33334Z" fill="black"/>
                    <path d="M6.66666 17.3333V18.3333H17.6667V17.3333H6.66666Z" fill="black"/>
                    <path d="M5.66666 17.3333H6.66666V6.33334H5.66666V17.3333Z" fill="black"/>
                    </svg>
                    </button>
                </span>
            </div>
        </div>
        <div>
            <div className=' overflow-auto flex flex-col max-h-[100vh]'>
            {groups.map((group) => (
                <Link href={`/chat/${group.id}`} key={group.id} className=" grouppixelbg bg-white flex flex-row  overflow-hidden min-h-[100px]">
                    <img className="w-full object-cover object-center sm:object-contain" src={`picture${(group.id % 3) + 1}.svg`} alt="Group Picture" />
                    <div className="flex flex-col max-w-[80%]">
                        <h2 className="text-lg font-semibold">{group.groupName}</h2>
                        <h2 className='text-lg font-semibold'>Ticket Price:{group.tokenAmount > 0 ? group.tokenAmount + ' ATOM': 'Free'}</h2>
                        <p className=" truncate text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolor voluptatem porro quam nulla cupiditate molestias obcaecati officia eaque cum aspernatur hic, similique quos corrupti temporibus veritatis tempore aut fugit?</p>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    </div>
  )
}

export default ChatBox