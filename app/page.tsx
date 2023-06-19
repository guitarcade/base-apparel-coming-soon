import Image from "next/image";
import heroDesktop from "../public/hero-desktop.jpg";
import heroMobile from "../public/hero-mobile.jpg";
import logo from "../public/logo.svg";
import submitIcon from "../public/icon-arrow.svg";

export default function Home() {
  return (
    <main className="grid md:grid-cols-[1fr_.8fr]">
      <div className="flex flex-col py-10 justify-self-center">
        <div className="md:max-w-[400px]">
          <Image src={logo} width={158} height={33} alt="" className="px-4" />
          <Image
            src={heroMobile}
            alt=""
            className="object-cover md:hidden w-full mt-10"
          />
          <div className="grid gap-8 text-center md:text-left p-16 md:p-0">
            <h1 className="text-6xl uppercase md:mt-24 tracking-widest leading-[1.1em]">
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
                className="bg-gradient-to-r from-btn-start to-btn-end px-12 py-4 rounded-full right-0 h-full absolute"
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
      </div>
      <div className="md:block hidden">
        <div className="h-screen w-full relative">
          <Image
            src={heroDesktop}
            alt=""
            fill={true}
            className="object-cover "
          />
        </div>
      </div>
    </main>
  );
}
