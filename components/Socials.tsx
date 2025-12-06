'use client'
import Link from "next/link"
import { Call, Facebook, Gps, Instagram, Telegram } from "./Svgs"
import { motion, useAnimate, useInView } from "motion/react"
import { useEffect, useState } from "react"


export const Socials = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { margin: "-20% 0px", amount: 0.3, once: true })
    const [hasAnimated, setHasAnimated] = useState(false)

    const parent = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        },
    },
    }

    const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    }

    useEffect(() => {
        if (isInView && !hasAnimated) {
        setHasAnimated(true)
        }
    }, [isInView, hasAnimated])


    return (
        <motion.div ref={scope} variants={parent} initial="hidden" animate={hasAnimated ? "show" : "hidden"} className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white grid grid-cols-3 py-8 px-8">
            <motion.div variants={child} className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold uppercase">coders cafe</h1>
                <p className="max-w-3xs text-sm">
                    Thank you for stopping by and sharing a moment with us.
                    We can't wait to welcome you again for your next cup of comfort.
                    Until then, stay caffeinated and take good care.
                </p>
                <div className="flex flex-col gap-2 text-lg">
                    <div className="flex gap-2 items-center">
                        <Call />
                        <p>+1 (123) 456-7890</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Gps />
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={child} className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Quick Links</h1>
                <div className="flex flex-col gap-2">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                </div>
            </motion.div>

            <motion.div variants={child} className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Follow Us</h1>
                    <div className="flex gap-3">
                        <Link href={"https://x.com/XkaranMe"}> <Facebook /> </Link>
                        <Link href={"https://x.com/XkaranMe"}> <Instagram /> </Link>
                        <Link href={"https://x.com/XkaranMe"}> <Telegram /> </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-medium">Payment Methods</p>
                    <img className="w-[80%]" src="/website/credit-cards.webp" alt="" />
                </div>
            </motion.div>
        </motion.div>
    )
}