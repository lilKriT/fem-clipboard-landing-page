import Link from "next/link";

const CTA = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 mx-8 mt-40">
        <h2 className="text-[clamp(1.875rem,5vw,2.25rem)] font-semibold text-gray-700 text-center">
          Clipboard for iOS and Mac OS
        </h2>

        <p className="text-gray-500 max-w-prose text-center leading-relaxed">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center lg:items-center gap-4 mt-8">
          <Link href={"/#"} className="btn btn--green">
            Download for iOS
          </Link>
          <Link href={"/#"} className="btn btn--purple">
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
