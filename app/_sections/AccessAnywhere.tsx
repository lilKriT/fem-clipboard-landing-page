import Image from "next/image";
import React from "react";

const AccessAnywhere = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center my-32 gap-32">
        {/* Text */}
        <div className="text-center max-w-[60ch]">
          <h2 className="text-4xl font-semibold">Access Clipboard anywhere</h2>
          <p className="text-gray-500">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>

        {/* Image */}
        <Image
          src={"/image-devices.png"}
          alt="Devices you can use Clipboard on"
          width={905}
          height={575}
          className=""
        />
      </div>
    </section>
  );
};

export default AccessAnywhere;
