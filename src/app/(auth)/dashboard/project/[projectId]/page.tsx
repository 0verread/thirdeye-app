import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import { api } from "src/trpc/server";

const ProjectIdPage = async ({ params }: { params: { projectId: string } }) => {
  const project = await api.project.byId.query({ id: params.projectId });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.key}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Table>
          <TableCaption>
            Logs of all the events that happened in this project
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Key</TableHead>
              <TableHead>Status Code</TableHead>
              <TableHead>Api Endpoint</TableHead>
              <TableHead>Payload</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Custom Msg (optional)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {project.logs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>No logs yet</TableCell>
              </TableRow>
            ) : (
              project.logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.key}</TableCell>
                  <TableCell>{log.statusCode}</TableCell>
                  <TableCell>{log.apiEndpoint}</TableCell>
                  <TableCell>{log.payload}</TableCell>
                  <TableCell>{log.method}</TableCell>
                  <TableCell>{log.customMsg}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProjectIdPage;
