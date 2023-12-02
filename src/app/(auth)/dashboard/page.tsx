import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import CreateProject from "./_components/create-project";

const DashboardPage = async () => {
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
    </Card>
  );
};

export default DashboardPage;
