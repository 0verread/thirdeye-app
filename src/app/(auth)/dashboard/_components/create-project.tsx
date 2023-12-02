"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { toast } from "src/components/ui/use-toast";
import { api } from "src/trpc/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";

const CreateProject = () => {
  const CreateProjectSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters long",
    }),
    key: z.string().min(2, {
      message: "Key must be at least 2 characters long",
    }),
  });
  const createProjectForm = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      name: "",
      key: "",
    },
  });

  const createProject = api.project.create.useMutation();

  const onCreateProjectSubmit = async (
    data: z.infer<typeof CreateProjectSchema>,
  ) => {
    try {
      const newProject = await createProject.mutateAsync(data);

      if (newProject.id) {
        toast({
          title: "Project Created",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      }
    } catch (e) {}
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Create Project</Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-full flex-col gap-4">
        <Form {...createProjectForm}>
          <form
            onSubmit={createProjectForm.handleSubmit(onCreateProjectSubmit)}
            className="space-y-6"
          >
            <FormField
              control={createProjectForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Third Eye" {...field} />
                  </FormControl>
                  <FormDescription>The name of your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createProjectForm.control}
              name="key"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key</FormLabel>
                  <FormControl>
                    <Input placeholder="Third Eye App Key" {...field} />
                  </FormControl>
                  <FormDescription>
                    The key for your project. This is used to identify your
                    project when logging events.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateProject;
