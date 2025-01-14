import { Schema, model, models } from "mongoose";

interface IFolder {
  ownerId: Schema.Types.ObjectId;
  name: string;
  notes: Schema.Types.ObjectId[];
  sharedWith: Schema.Types.ObjectId[];
}

export interface IFolderDoc extends IFolder, Document {}
const folderSchema = new Schema<IFolder>(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, ref: "Note", default: [] }],
    sharedWith: [
      { type: Schema.Types.ObjectId, ref: "User", index: true, default: [] },
    ],
  },
  { timestamps: true }
);

const Folder = models?.Folder || model<IFolder>("Folder", folderSchema);

export default Folder;
