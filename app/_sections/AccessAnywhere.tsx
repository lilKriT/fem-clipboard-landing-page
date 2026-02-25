import Image from "next/image";

const AccessAnywhere = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-32 gap-32 mx-8">
        {/* Text */}
        <div className="flex flex-col justify-center items-center text-center max-w-[60ch] gap-8">
          <h2 className="text-[clamp(1.875rem,5vw,2.25rem)] font-semibold">
            Access Clipboard anywhere
          </h2>
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
          className="w-[80dvw] max-w-6xl"
        />
      </div>
    </section>
  );
};

export default AccessAnywhere;
