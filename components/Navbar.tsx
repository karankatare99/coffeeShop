import { HamburgerIcon } from "./Svgs"


export const Navbar = () => {
    return (
        <div className="w-full flex justify-between px-8 font-semibold absolute py-8">
            <h1 className="text-2xl uppercase"> <span className="text-[#f19509]">coders</span> <span className="text-white">coffee</span></h1>
            <HamburgerIcon />
        </div>
    )
}