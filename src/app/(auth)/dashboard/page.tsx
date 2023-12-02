import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import CreateProject from "./_components/create-project";
import { api } from "src/trpc/server";
import Projects from "./_components/projects";

const DashboardPage = async () => {
  const projects = await api.project.list.query();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>
          Welcome to Third Eye, a tool for API Key logging and monitoring.
        </CardDescription>
      </CardHeader>
      <CardContent className="fle flex-col gap-4">
        <CreateProject />
      </CardContent>
      {projects.length > 0 && (
        <CardContent>
          <Projects projects={projects} />
        </CardContent>
      )}
    </Card>
  );
};

export default DashboardPage;
