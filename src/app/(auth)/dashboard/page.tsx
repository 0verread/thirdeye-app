import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import CreateProject from "./_components/create-project";
import Projects from "./_components/projects";

const DashboardPage = () => {
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
      <CardContent>
        <Projects />
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
