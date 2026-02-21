import Image from "next/image";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <section className="min-h-dvh w-full flex flex-col justify-center items-center">
      <Hero />

      <p>Keep track of your snippets</p>

      <p>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>

      <p>Quick Search</p>

      <p>
        Easily search your snippets by content, category, web address,
        application, and more.
      </p>

      <p>iCloud Sync</p>

      <p>Instantly saves and syncs snippets across all your devices.</p>

      <p>Complete History</p>

      <p>
        Retrieve any snippets from the first moment you started using the app.
      </p>

      <p>Access Clipboard anywhere</p>

      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>

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
