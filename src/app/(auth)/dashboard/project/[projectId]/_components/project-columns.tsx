"use client";

import type { Project } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const projectColumns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "key",
    header: "Key",
  },
];
