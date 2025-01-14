import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  username: string;
  password: string;
  profileImage: string;
  createdAt: Date;
  folders: string[];
}

export interface IUserDoc extends IUser, Document {}
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    profileImage: { type: String },

    folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }],
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", userSchema);

export default User;
