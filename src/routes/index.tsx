import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexander — Full Stack Developer Portfolio" },
      { name: "description", content: "Cyberpunk-themed portfolio of Alexander, a full stack developer crafting immersive web experiences." },
      { property: "og:title", content: "Alexander — Full Stack Developer" },
      { property: "og:description", content: "Cyberpunk-themed portfolio of Alexander, a full stack developer crafting immersive web experiences." },
    ],
  }),
  component: Portfolio,
});
