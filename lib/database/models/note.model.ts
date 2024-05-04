import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Note = models?.Note || model("Note", NoteSchema);

export default Note;
