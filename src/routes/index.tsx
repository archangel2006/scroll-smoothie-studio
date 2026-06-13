import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhavi" },
      { name: "description", content: "Portfolio of Vaibhavi Srivastava" },
      { property: "og:title", content: "Vaibhavi" },
      { property: "og:description", content: "Portfolio of Vaibhavi Srivastava" },
    ],
  }),
  component: Portfolio,
});
