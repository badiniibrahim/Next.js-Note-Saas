"use server";

import Note from "../database/models/note.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { revalidatePath } from "next/cache";

export const createNote = async (userId: string, note: CreateNotesParams) => {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);

    if (!author) {
      throw new Error("User not found");
    }
    const newNote = await Note.create({ ...note, author: userId });
    revalidatePath("/");
    return JSON.parse(JSON.stringify(newNote));
  } catch (error) {
    handleError(error);
  }
};

export const getAllNote = async () => {
  try {
    await connectToDatabase();
    const note = await Note.find();
    return JSON.parse(JSON.stringify(note));
  } catch (error) {
    handleError(error);
  }
};
