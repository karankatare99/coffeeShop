import { HamburgerIcon } from "./Svgs"


export const Navbar = () => {
    return (
        <div className="w-full flex justify-between px-8">
            <h1 className="text-2xl uppercase"> <span className="text-[#f19509]">coders</span> coffee</h1>
            <HamburgerIcon />
        </div>
    )
}