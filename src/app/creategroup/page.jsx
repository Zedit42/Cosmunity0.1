import React from 'react'

const Create = () => {
  return (
    <div className=' pixelbg h-[70vh] '>
            <img
                src="/bg.png"
                className=" fixed w-screen top-0 -left-[46px] min-w-[1024px] h-screen object-cover -z-10"
            />
                    <div className="relative h-[3rem]">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="text"
                    id="Search"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                    placeholder="Post a announcement"
                    className="w-full rounded-md border-gray-200 h-[3rem] px-4  pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700" >
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
            <div className="relative h-[3rem]">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="text"
                    id="Search"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                    placeholder="Post a announcement"
                    className="w-full rounded-md border-gray-200 h-[3rem] px-4  pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700" >
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
  )
}

export default Create