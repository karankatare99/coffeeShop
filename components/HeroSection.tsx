

export const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center w-full h-screen absolute px-20">
            <h2 className="flex flex-col leading-tight text-7xl text-[#f1dabf] uppercase font-gothic mb-60 absolute"> <p>brew</p> <p>ec&tacy</p></h2>
            <img src={"/coffee_cup.png"} className="w-75 h-150 mx-auto z-10" />
            <div className="w-full h-full absolute">
                <div>
                    <div className="h-45 w-60 bg-[#1a1f25] absolute mt-110 ml-[1200px]"></div>
                </div>
                <div className="flex flex-col gap-4 max-w-sm ml-[1000px] mt-120">
                    <h2 className="text-[#f1dabf] text-2xl">Brew of Ecstacy</h2>
                    <p className="text-neutral-400 font-medium relative leading-relaxed">A truly excellent coffee shop combines quality beverages, inviting ambiance, and attentive service to create a memorable experience.</p>
                </div>
            </div>
        </div>
    )
}