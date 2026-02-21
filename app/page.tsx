import Image from "next/image";
import Hero from "./_sections/Hero";
import KeepTrack from "./_sections/KeepTrack";
import AccessAnywhere from "./_sections/AccessAnywhere";

export default function Home() {
  return (
    <section className="min-h-dvh w-full flex flex-col justify-center items-center">
      {/* <Hero /> */}
      {/* <KeepTrack /> */}
      <AccessAnywhere />

      <p>Supercharge your workflow</p>

      <p>We’ve got the tools to boost your productivity.</p>

      <p>Create blacklists</p>

      <p>
        Ensure sensitive information never makes its way to your clipboard by
        excluding certain sources.
      </p>

      <p>Plain text snippets</p>

      <p>Remove unwanted formatting from copied text for a consistent look.</p>

      <p>Sneak preview</p>

      <p>Quick preview of all snippets on your Clipboard for easy access.</p>

      <p>Clipboard for iOS and Mac OS</p>

      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <p>Download for iOS Download for Mac</p>

      <p>FAQs Contact Us Privacy Policy Press Kit Install Guide</p>
    </section>
  );
}
