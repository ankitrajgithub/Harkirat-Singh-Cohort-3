export function Page1({type,placeholder,onClick,disabled,children}){
    return (
        <div className='bg-blue-900 flex flex-col justify-center items-center'>
            <span className='flex mt-10 mb-5'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZ4IIM_EMMhOxtJt7-xP2c3N0dPcBsu7ZvQ&s" className='w-10 h-10 rounded-full'/>
                <span className='text-4xl ml-2'><span className='text-green-500'>Webinar</span><span className='text-white'>.gg</span></span>
            </span>
            <span className='text-4xl text-white my-15'>Verify Your Age</span>
            <span className='text-2xl text-white mb-10'>Please confirm your birth year. This data will not be stored.</span>
            <span onClick={onClick} className='rounded-2xl text-3xl px-2 py-2 text-white cursor-pointer bg-blue-100 p-8 mb-10'>
                <input type={type} placeholder={placeholder} className="outline-none bg-blue-100"/>
            </span>
            <span onClick={onClick} className={`text-white cursor-pointer ${disabled ? "bg-blue-100": "bg-green-500"} px-25 py-5 rounded-2xl text-4xl`}>
                {children}
            </span>
        </div>
    )
}