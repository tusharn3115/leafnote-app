"use server";

import { db } from "@/db/drizzle";
import { InsertNotebook, notebooks } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const createNotebook = async (values: InsertNotebook) => {
  try {
    await db.insert(notebooks).values(values);

    return { success: true, message: "Notebook created successfully" };
  } catch {
    return { success: false, message: "Failed to create notebook!" };
  }
};

export const getNotebook = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user?.id;

    if (!userId) {
      return { success: false, message: "User not found!" };
    }

    const notebooksByUser = await db
      .select()
      .from(notebooks)
      .where(eq(notebooks.userId, userId));

    return { success: true, notebooks: notebooksByUser };
  } catch {
    return { success: false, message: "Failed to get notebooks!" };
  }
};

export const getNotebooksById = async (id: string) => {
  try {
    const notebook = await db
      .select()
      .from(notebooks)
      .where(eq(notebooks.id, id));
    return { success: true, notebook };
  } catch {
    return { success: false, message: "Failed to get notebook!" };
  }
};

export const updateNotebook = async (id: string, values: InsertNotebook) => {
  try {
    await db.update(notebooks).set(values).where(eq(notebooks.id, id));

    return { success: true, message: "Notebook updated successfully" };
  } catch {
    return { success: false, message: "Failed to update notebook!" };
  }
};

export const deleteNotebook = async (id: string) => {
  try {
    await db.delete(notebooks).where(eq(notebooks.id, id));

    return { success: true, message: "Notebook deleted successfully" };
  } catch {
    return { success: false, message: "Failed to delete notebook!" };
  }
};
