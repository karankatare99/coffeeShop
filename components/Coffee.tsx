

export const Coffee = () => {
    return (
        <div className="w-full h-full py-20">
            <div className="flex flex-col items-center text-center justify-center gap-30">

                <div className="flex flex-col gap-2">
                    <h2 className="flex justify-center gap-2 text-2xl font-bold">
                        <span className="text-[#272c35]">Fresh and</span>
                        <span className="text-[#f19509]">Tasty Coffee</span>
                    </h2>
                    <div className="flex justify-center max-w-xl">
                        <p className="">From slow-roasted, aromatic blends to indulgent, freshly baked treats, we pour warmth and flavor into every moment. Take a seat, sip something special, and let the world slow down – your perfect coffee break starts here.</p>
                    </div>
                </div>

                <div className="flex justify-between gap-20">
                    <div className="flex flex-col items-center gap-4">
                        <img src="/coffee/coffee1.png" alt="" className="max-w-[200px]" />
                        <h1 className="text-2xl text-[#f19509] font-bold">Black Coffee</h1>
                        <p className="max-w-[400px]">No sugar. No cream. Just expertly roasted beans, crystal-clear water, and a cup of coffee that lets the true flavor speak for itself.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img src="/coffee/coffee3.png" alt="" className="max-w-[200px]" />
                        <h1 className="text-2xl text-[#f19509] font-bold">Hot Coffee</h1>
                        <p className="max-w-[400px]">Cozy up with a cup of our signature hot coffee, brewed fresh from carefully roasted beans for deep aroma and smooth, lingering flavor.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img src="/coffee/coffee1.png" alt="" className="max-w-[200px]" />
                        <h1 className="text-2xl text-[#f19509] font-bold">Cold Coffee</h1>
                        <p className="max-w-[400px]">Turn down the heat with our smooth, ice-cold coffee creations, blended to be as refreshing as they are indulgent.</p>
                    </div>
                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-1 flex flex-col gap-10">
                        <h1 className="text-3xl font-serif">We deliver our coffee to you</h1>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <input className="border border-neutral-500 w-1/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Name" />
                                <input className="border border-neutral-500 w-2/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Email" />
                            </div>
                            <div className="flex gap-6">
                                <input className="border border-neutral-500 w-2/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Country" />
                                <input className="border border-neutral-500 w-1/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Zip" />
                            </div>
                            <button className="py-2 rounded-lg bg-[#f19509] text-white cursor-pointer">Order Now</button>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <img className="w-[500px]" src="/world-map.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}