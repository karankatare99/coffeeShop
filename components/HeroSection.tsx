'use client'
import { motion, useAnimate, useInView } from "motion/react"
import { useEffect } from "react"


export const HeroSection = () => {
    const [scope, animate] = useAnimate()
    const isInVeiw = useInView(scope, { once: false })

    const startAnimation = () => {
        animate(".brandname", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        animate(".bgname", {
            opacity: 1,
            x: 0
        }, {
            duration: 0.5
        })

        animate(".title01", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        animate(".desc01", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        animate(".title02", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })

        animate(".desc02", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5
        })
    }

    useEffect(() => {
        if (isInVeiw) {
            startAnimation()
            return
        }

        animate(".brandname", { opacity: 0, y: -30 })
        animate(".bgname", { opacity: 0, x: -100 })
        animate(".title01", { opacity: 0, y: 100 })
        animate(".desc01", { opacity: 0, y: 100 })
        animate(".title02", { opacity: 0, y: 100 })
        animate(".desc02", { opacity: 0, y: 100 })
    }, [isInVeiw, animate])

    return (
        <div ref={scope} className="flex flex-col justify-center w-full h-screen absolute px-20">
            <motion.h2 initial={{ opacity: 0, y: -30 }} className="brandname flex flex-col leading-tight text-7xl text-[#f1dabf] uppercase font-gothic mb-60 absolute"> <p>brew</p> <p>ec&tacy</p></motion.h2>
            <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} src={"/coffee_cup.png"} className="w-75 h-150 mx-auto z-10" />
            <div className="w-full h-full absolute">
                <div className="flex flex-col gap-4 max-w-sm mb-80 mt-120 absolute">
                  <motion.h2 initial={{ opacity: 0, y: 100 }} className="title01 text-[#f1dabf] text-2xl">Brew Lifestyle</motion.h2>
                  <motion.p initial={{ opacity: 0, y: 100 }} className="desc01 text-neutral-400 font-medium leading-relaxed">Coffee - more than a morning ritual, it's a daily companion that sharpens our focus, lifts our spirits, and brings people together. Every cup carries powerful antioxidants.</motion.p>
                </div>
                <div>
                    <div className="h-45 w-60 bg-[#1a1f25] absolute mt-110 ml-[1200px]"></div>
                </div>
            <motion.h1 initial={{ opacity: 0, x: -100 }} className="bgname flex flex-col uppercase text-9xl text-[#21262f] absolute font-gothic ml-[760px] leading-snug"><p>brew</p> <p>ec&tacy</p></motion.h1>
                <div className="flex flex-col gap-4 max-w-sm ml-[1000px] mt-120">
                    <motion.h2 initial={{ opacity: 0, y: 100 }} className="title02 text-[#f1dabf] text-2xl">Brew of Ecstacy</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 100 }} className="desc02 text-neutral-400 font-medium relative leading-relaxed">A truly excellent coffee shop combines quality beverages, inviting ambiance, and attentive service to create a memorable experience.</motion.p>
                </div>
            </div>
        </div>
    )
}