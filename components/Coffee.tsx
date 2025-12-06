'use client'

import { useAnimate, useInView, motion } from "motion/react"
import { useEffect } from "react"


export const Coffee = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { margin: "-20% 0px", amount: 0.3, once: false })

    const startAnimation = async () => {
        await animate(".title01", {
            opacity: 1,
            y: [50, -30, 0]
        }, {
            duration: 0.8
        })
        await animate(".desc01", {
            opacity: 1,
            scale: 1
        }, {
            duration: 0.3,
            damping: 20,
            stiffness: 260,
            type: "spring"
        })
    }

    useEffect(() => {
        if (isInView) {
            startAnimation()
            return
        }

        animate(".desc01", { opacity: 0, scale: 0.8 })

    }, [isInView, animate])

    const coffees = [
        {
            src: "/coffee/coffee1.png",
            name: "Black Coffee",
            description: "No sugar. No cream. Just expertly roasted beans, crystal-clear water, and a cup of coffee that lets the true flavor speak for itself."
        },
        {
            src: "/coffee/coffee2.png",
            name: "Hot Coffee",
            description: "Cozy up with a cup of our signature hot coffee, brewed fresh from carefully roasted beans for deep aroma and smooth, lingering flavor."
        },
        {
            src: "/coffee/coffee3.png",
            name: "Cold Coffee",
            description: "Turn down the heat with our smooth, ice-cold coffee creations, blended to be as refreshing as they are indulgent."
        },
    ]

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
    return (
        <div ref={scope} className="w-full h-full py-20">
            <div className="flex flex-col items-center text-center justify-center gap-20">

                <div className="flex flex-col gap-2">
                    <motion.h2 initial={{ opacity: 0 }} className="title01 flex justify-center gap-2 text-3xl font-bold">
                        <span className="text-[#272c35]">Fresh and</span>
                        <span className="text-[#f19509]">Tasty Coffee</span>
                    </motion.h2>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} className="desc01 flex justify-center max-w-xl">
                        <p>From slow-roasted, aromatic blends to indulgent, freshly baked treats, we pour warmth and flavor into every moment. Take a seat, sip something special, and let the world slow down – your perfect coffee break starts here.</p>
                    </motion.div>
                </div>

                <motion.div
                variants={parent}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="coffees flex justify-between gap-20"
                >
                {coffees.map(({ src, name, description }) => (
                    <motion.div
                    key={name}
                    variants={child}
                    className="flex flex-col items-center gap-4"
                    >
                    <motion.img
                        variants={child}
                        whileHover={{ y: -10 }}
                        src={src}
                        alt=""
                        className="max-w-[200px]"
                    />
                    <motion.h1
                        variants={child}
                        className="text-2xl text-[#f19509] font-bold"
                    >
                        {name}
                    </motion.h1>
                    <motion.p variants={child} className="max-w-[400px]">
                        {description}
                    </motion.p>
                    </motion.div>
                ))}
                </motion.div>


                <div className="grid grid-cols-3">
                    <div className="col-span-1 flex flex-col gap-10">
                        <motion.h1 className="title text-3xl font-serif">We deliver our coffee to you</motion.h1>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <motion.input className="name border border-neutral-500 w-1/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Name" />
                                <motion.input className="email border border-neutral-500 w-2/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Email" />
                            </div>
                            <div className="flex gap-6">
                                <motion.input className="country border border-neutral-500 w-2/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Country" />
                                <motion.input className="zip border border-neutral-500 w-1/3 rounded-lg px-4 py-2 focus:outline-none" type="text" placeholder="Zip" />
                            </div>
                            <motion.button className="button py-2 rounded-lg bg-[#f19509] text-white cursor-pointer">Order Now</motion.button >
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