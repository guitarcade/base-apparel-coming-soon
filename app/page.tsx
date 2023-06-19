import Image from "next/image";
import heroDesktop from "../public/hero-desktop.jpg";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start px-24 py-10">
          <Image src={logo} width={158} height={33} alt="" />
          <div className="grid gap-4">
            <h1 className="text-6xl uppercase mt-24 tracking-widest">
              <span className="font-light text-primary-red-1">We're</span>{" "}
              coming soon
            </h1>
            <p className="text-primary-red-1">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
        </div>
        <div className="max-w-full">
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
