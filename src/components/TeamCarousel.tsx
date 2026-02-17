
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const team = [
  {
    name: "Bonnie Winterbottom",
    title: "Associate Attorney",
    img: "/images/team_bonnie.jpg",
    bio: "Specializes in complex criminal litigation and courtroom strategy.",
  },
  {
    name: "Frank Delfino",
    title: "Associate Attorney",
    img: "/images/team_frank.jpg",
    bio: "Investigative strategist and trial operative focused on evidence outcomes.",
  },
  {
    name: "Wes Gibbins",
    title: "Law Intern",
    img: "/images/team_wes.jpg",
    bio: "Focused on criminal procedure and constitutional defense research.",
  },
  {
    name: "Connor Walsh",
    title: "Law Intern",
    img: "/images/team_connor.jpg",
    bio: "Sharp legal thinker supporting strategic litigation efforts.",
  },
  {
    name: "Michaela Pratt",
    title: "Law Intern",
    img: "/images/team_michaela.jpg",
    bio: "Driven researcher with exceptional courtroom preparation skills.",
  },
  {
    name: "Asher Millstone",
    title: "Law Intern",
    img: "/images/team_asher.jpg",
    bio: "Supports case strategy and evidence organization.",
  },
  {
    name: "Laurel Castillo",
    title: "Law Intern",
    img: "/images/team_laurel.jpg",
    bio: "Detail-oriented analyst contributing to complex investigations.",
  },
];

export default function TeamCarousel() {
  return (
    <div style={{ padding: "60px 0", maxWidth: 1200, margin: "0 auto" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1.2}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {team.map((member) => (
          <SwiperSlide key={member.name}>
            <div style={{ textAlign: "center", padding: "20px", background: "#111", borderRadius: 8 }}>
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={350}
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: 6 }}
              />
              <h3 style={{ color: "#FFFFFF", marginTop: 16, fontSize: 20 }}>
                {member.name}
              </h3>
              <p style={{ color: "#B9975B", marginBottom: 12 }}>{member.title}</p>
              <p style={{ color: "#CCCCCC", fontSize: 14, lineHeight: 1.6 }}>
                {member.bio}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
