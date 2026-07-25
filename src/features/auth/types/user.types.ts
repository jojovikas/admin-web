export type UserRole =
  | "super-admin"
  | "admin"
  | "manager"
  | "editor"
  | "viewer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive?: boolean;
  createdAt?: string;
}