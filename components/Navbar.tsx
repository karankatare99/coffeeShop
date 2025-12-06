'use client'

import { motion } from "motion/react"


export const Navbar = () => {
    return (
        <div className="w-full flex justify-between px-8 font-semibold absolute py-8">
            <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-2xl uppercase"> <span className="text-[#f19509]">coders</span> <span className="text-white">coffee</span></motion.h1>
        </div>
    )
}