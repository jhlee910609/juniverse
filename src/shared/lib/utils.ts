import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToElement = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
};
