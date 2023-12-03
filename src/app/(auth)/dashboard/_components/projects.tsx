"use client";

import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Skeleton } from "src/components/ui/skeleton";
import { api } from "src/trpc/react";

const Projects = () => {
  const projectsQuery = api.project.list.useQuery();
  return (
    <div className="grid grid-cols-4 gap-4">
      {projectsQuery.isLoading && (
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-[20px] w-[100px]" />
            </CardTitle>
          </CardHeader>
        </Card>
      )}
      {projectsQuery.data &&
        projectsQuery.data.length > 0 &&
        projectsQuery.data.map((project) => (
          <Card key={project.id} className="flex w-64 flex-col gap-2">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.key}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={`/dashboard/project/${project.id}`}
                className="w-full"
              >
                <Button className="w-full">View</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      {projectsQuery.data && projectsQuery.data.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No projects found</CardTitle>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default Projects;
