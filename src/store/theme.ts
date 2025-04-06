import { entity, persistence } from "simpler-state";

// Custom serializer/deserializer for raw strings
const rawPersistence = persistence("theme", {
  storage: "local",
  serializeFn: (data: { theme: string }) => data.theme, // store just the string
  deserializeFn: (data: string) => ({ theme: data }), // wrap the string in an object
});

export const themeStore = entity<{ theme: string }>({ theme: "dark" }, [
  rawPersistence,
]);

export function toggleTheme(isDark: boolean) {
  themeStore.set({ theme: isDark ? "dark" : "light" });
}
