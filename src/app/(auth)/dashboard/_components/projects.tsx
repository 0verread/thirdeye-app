"use client";

import { Project } from "@prisma/client";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex gap-2">
      {projects.map((project) => (
        <Card key={project.id} className="flex w-64 flex-col gap-2">
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.key}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={`/dashboard/project/${project.id}`} className="w-full">
              <Button className="w-full">View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
