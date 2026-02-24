import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-dvh w-full flex flex-col justify-center items-center gap-16 bg-[linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1)),url(/bg-header-mobile.png)] lg:bg-[linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1)),url(/bg-header-desktop.png)] bg-top bg-no-repeat bg-cover">
      <Image
        src={"/logo.svg"}
        alt="Clipboard Logo"
        width={125}
        height={125}
        className="w-40"
      />

      <div className="flex flex-col justify-center items-center max-w-3xl gap-8">
        <h1 className="text-5xl font-semibold">
          A history of everything you copy
        </h1>
        <p className="text-gray-400 text-center">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="flex justify-center items-center gap-8">
        <Link href={"/#"} className="btn btn--green">
          Download for iOS
        </Link>
        <Link href={"/#"} className="btn btn--purple">
          Download for Mac
        </Link>
      </div>
    </section>
  );
};

export default Hero;
