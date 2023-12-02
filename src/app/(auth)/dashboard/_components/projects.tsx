"use client";

import { Project } from "@prisma/client";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
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
            <Button>
              <Link href={`/dashboard/projects/${project.id}`}>View</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
