import Image from "next/image";
import image1 from "@/assets/image1.jpg";

const Contact = () => {

  // implement theme switcher by adding a image that fits the dark mode
  // check next-themes documentation
  // https://www.npmjs.com/package/next-themes#images

  // switch (resolvedTheme) {
  //   case 'light':
  //     src = {image1}
  //     break
  //   case 'dark':
  //     src = '/dark.png'
  //     break
  //   default:
  //     src = {image1}
  //     break
  // }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mx-auto">
        <div className="flex flex-col justify-around bg-slate-200 dark:bg-slate-800 p-4 rounded-3xl">
          <h2 className="font-bold text-3xl text-center mb-4">Contact Us</h2>
          <form className="flex flex-col gap-3 w-3/4 mx-auto">
            <input
              type="text"
              id="name"
              className="bg-white dark:bg-black px-3 py-1 rounded-md"
              placeholder="name"
            />
            <input
              type="email"
              id="email"
              className="bg-white dark:bg-black px-3 py-1 rounded-md"
              placeholder="email"
            />
            <textarea
              name="message"
              id="message"
              className="bg-white dark:bg-black px-3 py-1 rounded-md"
              placeholder="message"></textarea>
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black w-1/3 mx-auto my-4 px-3 py-1 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-black dark:hover:text-white transition duration-300">
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
};

export default Contact;
