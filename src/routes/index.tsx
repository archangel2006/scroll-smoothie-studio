import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Sansita:wght@700;800&display=swap",
      },
    ],
    meta: [
      { title: "Vaibhavi" },
      { name: "description", content: "Portfolio of Vaibhavi Srivastava" },
      { property: "og:title", content: "Vaibhavi" },
      { property: "og:description", content: "Portfolio of Vaibhavi Srivastava" },
      { property: "og:image", content: "/image.png" }
    ],
  }),
  component: Portfolio,
});
