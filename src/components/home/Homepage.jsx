


const Homepage = ( {heading, message }) => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover w-full home-bg">
            {/* overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10' />

            <div className="p-5 text-white z-10 flex items-center justify-center flex-col text-center">
                    <h2 className="text-3xl md:text-5xl capitalize font-semibold">{heading}</h2>
                    <p className="text-sm text-white ">{message}</p>
                 
                    <div className="my-10">
                        <button className="capitalize px-5 p-2 text-white bg-red-500 hover:bg-red-900 rounded-sm">Book</button>
                    </div>
            </div>



        </div>
    );
}

export default Homepage;