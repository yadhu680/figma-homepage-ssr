"use client";
import dynamic from "next/dynamic";

const HeaderClient = dynamic(() => import("./HeaderClient"), {
  ssr: false,
  loading: () => null, // Optional placeholder
});

export default function HeaderClientLoader() {
  return <HeaderClient />;
}
