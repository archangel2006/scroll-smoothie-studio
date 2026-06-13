import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import ProjectsArchive from "@/components/ProjectsArchive";

export const Route = createFileRoute("/projects")({
  component: ProjectsArchive,
});
