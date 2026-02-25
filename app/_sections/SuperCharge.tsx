import Image from "next/image";

const SuperCharge = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-7xl flex flex-col items-center justify-center text-center gap-16 mx-8 mt-32">
        {/* First row */}
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-4xl font-semibold">Supercharge your workflow</h2>

          <p className="text-gray-500">
            We’ve got the tools to boost your productivity.
          </p>
        </div>

        {/* Second row */}
        <div className="grid lg:grid-cols-3 justify-center items-start gap-16">
          {/* First article */}
          <article className="supercharge__article">
            <Image
              src={"/icon-blacklist.svg"}
              alt="Blacklist Icon"
              width={44}
              height={40}
            />

            <h3>Create blacklists</h3>

            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </article>

          {/* Second article */}
          <article className="supercharge__article">
            <Image
              src={"/icon-text.svg"}
              alt="Blacklist Icon"
              width={36}
              height={32}
            />

            <h3>Plain text snippets</h3>

            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </article>

          {/* Third article */}
          <article className="supercharge__article">
            <Image
              src={"/icon-preview.svg"}
              alt="Blacklist Icon"
              width={50}
              height={32}
            />

            <h3>Sneak preview</h3>

            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </article>
        </div>

        {/* Third Row */}
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:justify-between gap-8">
          <Image
            src={"/logo-google.png"}
            alt="Google Logo"
            width={165}
            height={49}
            className=""
          />

          <Image
            src={"/logo-ibm.png"}
            alt="Google Logo"
            width={139}
            height={51}
            className=""
          />

          <Image
            src={"/logo-microsoft.png"}
            alt="Google Logo"
            width={161}
            height={35}
            className=""
          />

          <Image
            src={"/logo-hp.png"}
            alt="Google Logo"
            width={135}
            height={56}
            className=""
          />

          <Image
            src={"/logo-vector-graphics.png"}
            alt="Google Logo"
            width={125}
            height={30}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default SuperCharge;
