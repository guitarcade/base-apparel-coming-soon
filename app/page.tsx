import Image from "next/image";
import heroDesktop from "../public/hero-desktop.jpg";
import logo from "../public/logo.svg";
import submitIcon from "../public/icon-arrow.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="grid grid-cols-[1fr_.7fr] max-w-[1440px]">
        <div className="flex flex-col items-start px-40 py-10">
          <Image src={logo} width={158} height={33} alt="" />
          <div className="grid gap-8">
            <h1 className="text-6xl uppercase mt-24 tracking-widest leading-[1.1em]">
              <span className="font-light text-primary-red-1">We're</span>{" "}
              coming soon
            </h1>
            <p className="text-primary-red-1">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="relative">
              <input
                placeholder="Email Address"
                className="w-full p-4 border-primary-red-1/30 border-2 rounded-full placeholder-primary-red-1/50"
              />
              <button
                type="submit"
                className="bg-primary-red-2/80 px-12 py-4 rounded-full right-0 h-full absolute"
              >
                <Image
                  src={submitIcon}
                  alt=""
                  width={12}
                  height={20}
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-screen w-full relative">
            <Image
              src={heroDesktop}
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
