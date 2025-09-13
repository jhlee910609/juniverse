import { ProjectsSection } from "@/components/projects-section";
import { openSourceProjects } from "@/entities/project/model/open-source-data";

export default function Project() {
  return <ProjectsSection projects={openSourceProjects} />;
}
