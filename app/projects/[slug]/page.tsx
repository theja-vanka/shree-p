import type { Metadata } from "next";
import { en } from "@/data/en";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectDashboard from "@/components/ProjectDashboard";

export function generateStaticParams() {
  return en.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = en.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${en.profile.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Nav />
      <ProjectDashboard slug={params.slug} />
      <Footer />
    </>
  );
}
