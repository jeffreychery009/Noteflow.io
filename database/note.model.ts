import { model, models, Schema } from "mongoose";

export interface INote {
  title: string;
  content: string;
  ownerId: Schema.Types.ObjectId;
  folderId: Schema.Types.ObjectId;
  sharedWith: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    folderId: { type: Schema.Types.ObjectId, ref: "Folder", required: true },
    sharedWith: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  },
  { timestamps: true }
);

const Note = models.Note || model<INote>("Note", noteSchema);

export default Note;
