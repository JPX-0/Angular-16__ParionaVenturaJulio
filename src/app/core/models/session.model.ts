import { InfoStudentsInterface } from "./db-student.model";

export interface SessionInterface {
  account: AccountType | "invitado"
  authentication: boolean,
  admin: boolean
}
export type AccountType = InfoStudentsInterface | "admin";
export type SessionType = "admin" | "authentication";