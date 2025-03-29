import { entity, persistence } from "simpler-state";

export const themeStore = entity<{ theme: string }>({ theme: "dark" }, [
  persistence("theme", { storage: "local" }),
]);

export function toggleTheme(isDark: boolean) {
  themeStore.set({ theme: isDark ? "dark" : "light" });
}
