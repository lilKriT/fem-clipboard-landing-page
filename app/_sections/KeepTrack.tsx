import Image from "next/image";
import React from "react";

const KeepTrack = () => {
  return (
    <section className="min-h-dvh w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-20 my-32">
        {/* Top part */}
        <div className="text-center flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">
            Keep track of your snippets
          </h2>

          <p className="text-center max-w-prose text-gray-500 leading-relaxed">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>

        {/* Bottom part */}
        <div className="w-dvw grid grid-cols-2 gap-32 items-center">
          {/* Left column */}
          <Image
            src={"/image-computer.png"}
            alt="A computer monitor"
            width={752}
            height={572}
            className="scale-105 origin-right"
          />

          {/* Right column */}
          <div className="flex flex-col justify-center items-start gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-gray-700 font-semibold">
                Quick Search
              </h3>
              <p className="max-w-[40ch] text-gray-500 leading-relaxed">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-gray-700 font-semibold">
                iCloud Sync
              </h3>
              <p className="max-w-[40ch] text-gray-500 leading-relaxed">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-gray-700 font-semibold">
                Complete History
              </h3>
              <p className="max-w-[40ch] text-gray-500 leading-relaxed">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepTrack;
