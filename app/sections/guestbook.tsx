import { siteContent } from "../data/site";
import { SectionHeading } from "../components/section-heading";
import { ScrollReveal } from "../components/scroll-reveal";

export function GuestbookSection() {
  const { guestbook, contact } = siteContent;

  return (
    <section id="guestbook" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gửi lời chúc"
            title="Cảm ơn vì đã ở đây"
            description="Chúng tôi trân trọng từng giây phút và mong nhận được sự chúc phúc từ bạn."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6">
          {guestbook.map((entry, index) => (
            <ScrollReveal key={entry.name} delay={index * 0.1}>
              <article className="rounded-3xl border border-rose-50 bg-rose-50/60 p-6 shadow-sm">
                <p className="text-sm font-semibold text-rose-500">{entry.name}</p>
                <p className="mt-2 text-base text-slate-600">{entry.message}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-[32px] bg-gradient-to-r from-rose-500 to-rose-400 p-8 text-center text-white shadow-xl">
            <p className="text-lg font-semibold">{contact.note}</p>
            <p className="mt-4 text-sm">{contact.phone}</p>
            <p className="text-sm">{contact.email}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


