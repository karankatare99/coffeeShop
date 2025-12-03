import { Call, Facebook, Gps, Instagram, Telegram } from "./Svgs"



export const Socials = () => {
    return (
        <div className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white grid grid-cols-3 py-8 px-8">
            <div className="flex flex-col gap-6">
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
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Quick Links</h1>
                <div className="flex flex-col gap-2">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Follow Us</h1>
                    <div className="flex gap-3">
                        <Facebook />
                        <Instagram />
                        <Telegram />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-medium">Payment Methods</p>
                    <img className="w-[80%]" src="/website/credit-cards.webp" alt="" />
                </div>
            </div>
        </div>
    )
}