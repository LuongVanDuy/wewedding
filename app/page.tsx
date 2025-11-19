import Image from "next/image";
import { siteContent } from "./data/site";
import { HeroSection } from "./sections/hero";
import { GreetingSection } from "./sections/greeting";
import { CoupleSection } from "./sections/couple";
import { InvitationSection } from "./sections/invitation";
import { LoveStorySection } from "./sections/love-story";
import { GallerySection } from "./sections/gallery";
import { RSVPSection } from "./sections/rsvp";
import { WishesSection } from "./sections/wishes";
import { MusicPlayer } from "./components/music-player";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <HeroSection />
      <GreetingSection />
      <CoupleSection />
      <InvitationSection />
      <LoveStorySection />
      <GallerySection />
      <RSVPSection />
      <WishesSection />
      <MusicPlayer
        title={siteContent.music.title}
        artist={siteContent.music.artist}
        src={siteContent.music.audioSrc}
      />
      <footer className="px-4 pb-6 pt-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Image
            src="/assets/images/thankyou1.webp"
            alt="Thank you"
            width={500}
            height={280}
            className="w-full max-w-sm object-cover "
            quality={100}
            sizes="(max-width: 768px) 90vw, 500px"
          />
          <div className="mx-auto max-w-2xl text-center text-slate-600">
            <p className="text-sm md:text-base">
              Cảm ơn bạn đã chia sẻ khoảnh khắc đặc biệt cùng chúng tôi!
              <br className="hidden md:block" />
              Chúng tôi trân trọng từng giây phút và mong nhận được sự chúc phúc
              từ bạn.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
