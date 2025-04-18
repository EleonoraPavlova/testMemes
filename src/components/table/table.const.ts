export type ColumnKey = "id" | "name" | "image" | "likes" | "actions";

export type Column = {
  name: string;
  uid: ColumnKey;
};

export const columns: Column[] = [
  { name: "Id", uid: "id" },
  { name: "Name", uid: "name" },
  { name: "Image", uid: "image" },
  { name: "Likes", uid: "likes" },
  { name: "Actions", uid: "actions" },
];
