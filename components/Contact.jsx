import Image from "next/image";
import image1 from "@/assets/image1.jpg"

const Contact = () => {
    return (
        <div className="bg-white text-black w-full py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mx-auto">
                <div className="flex flex-col justify-around bg-slate-200 p-4 rounded-3xl">
                    <h2 className="font-bold text-3xl text-center mb-4">Contact Us</h2>
                    <form className="flex flex-col gap-3 w-3/4 mx-auto">
                        <input type="text" id="name" className="bg-white px-3 py-1 rounded-md" placeholder="name" />
                        <input type="email" id="email" className="bg-white px-3 py-1 rounded-md" placeholder="email" />
                        <textarea name="message" id="message" className="bg-white px-3 py-1 rounded-md" placeholder="message"></textarea>
                        <button type="submit" className="bg-black text-white w-1/3 mx-auto my-4 px-3 py-1 rounded-xl hover:bg-gray-400 hover:text-black transition duration-300">
                            Send
                        </button>
                    </form>
                </div>
                <div>
                    <Image src={image1} width={900} />
                </div>
            </div>
        </div>

    );
}

export default Contact;