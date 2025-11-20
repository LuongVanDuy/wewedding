"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";
import { ChangeEvent, FormEvent, useState } from "react";

const cormorant = localFont({
  src: "../fonts/CormorantUpright-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Cormorant Upright", "serif"],
});

const IMAGE_QUALITY = 100;

interface FormData {
  name: string;
  phone: string;
  guestOf: string;
  numberOfPeople: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  guestOf?: string;
  numberOfPeople?: string;
}

export function RSVPSection() {
  const { contact } = siteContent;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    guestOf: "",
    numberOfPeople: "1",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Họ tên không được để trống";
    if (!formData.phone.trim())
      newErrors.phone = "Số điện thoại không được để trống";
    if (!formData.guestOf) newErrors.guestOf = "Bạn phải chọn khách mời của ai";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <section id="rsvp" className="bg-[#f2f2f2] py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 xl:flex-row xl:items-stretch">
          <ScrollReveal className="w-full xl:w-1/2">
            <div className=" h-full items-center bg-white/90 p-8 shadow-xl ring-1 ring-rose-100 backdrop-blur">
              <div className="flex flex-col relative items-center text-center gap-4 w-full">
                <Image
                  src={contact.icon}
                  alt="Decor"
                  width={200}
                  height={100}
                  className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
                  quality={IMAGE_QUALITY}
                  sizes="200px"
                />
                <h2
                  className={`${cormorant.className} text-4xl md:text-5xl text-[#1f2937]`}
                >
                  {contact.title}
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {contact.description}
                </p>
              </div>

              <form
                className="flex flex-col relative gap-6"
                onSubmit={handleSubmit}
              >
                {/* Họ Tên */}
                <div className="flex flex-col relative gap-2 w-full text-lg text-primary font-pp border-b py-2 border-primary">
                  <label htmlFor="name">Họ Tên của bạn</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="px-4 text-base focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm absolute bottom-[-24px]">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Số điện thoại */}
                <div className="flex flex-col relative gap-2 w-full text-lg text-primary font-pp border-b py-2 border-primary">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="px-4 text-base focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm absolute bottom-[-24px]">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Khách mời */}
                <div className="flex flex-col relative gap-2 w-full text-lg text-primary font-pp border-b py-2 border-primary">
                  <label>Bạn là khách mời của ai</label>
                  <div className="flex gap-8">
                    {["groom", "bride"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="guestOf"
                          value={option}
                          checked={formData.guestOf === option}
                          onChange={handleChange}
                        />
                        {option === "groom" ? "Chú rể" : "Cô dâu"}
                      </label>
                    ))}
                  </div>
                  {errors.guestOf && (
                    <span className="text-red-500 text-sm absolute bottom-[-24px]">
                      {errors.guestOf}
                    </span>
                  )}
                </div>

                {/* Số người đi + Submit */}
                <div className="flex items-end gap-4 w-full md:w-[70%] py-2">
                  <div className="flex-1 flex flex-col relative gap-2 text-lg text-primary font-pp border-b border-primary">
                    <label htmlFor="numberOfPeople">
                      Bạn đi bao nhiêu người ?
                    </label>
                    <select
                      id="numberOfPeople"
                      name="numberOfPeople"
                      className="outline-none px-2 py-1"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#ef4444] cursor-pointer h-10 flex items-center justify-center text-white rounded-lg px-4 text-lg"
                  >
                    Phản hồi
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
          <ScrollReveal className="relative w-full xl:flex-1 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.15)]">
            <Image
              src={contact.image}
              alt="Thông tin phản hồi"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
              sizes="100vw"
              quality={IMAGE_QUALITY}
              priority
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
