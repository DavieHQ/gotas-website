import { isAuthenticated } from "./auth";

export async function isSiteOwner(): Promise<boolean> {
  return isAuthenticated();
}
