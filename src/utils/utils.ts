import { type MediaTitle } from "@tdanks2000/anilist-wrapper";
import sanitizer from "sanitize-html";

type TitleLanguageOptions = "english" | "native" | "romanji" | "userPreferred";

export const getTitle = (
  title: string | MediaTitle,
  preferedLanguage?: TitleLanguageOptions,
): string => {
  if (typeof title === "string") {
    return title;
  }
  if (!title) {
    return "";
  }

  if (preferedLanguage) {
    return (
      Object.entries(title).find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ([key]: any) => key === preferedLanguage,
      )?.[1] ?? ""
    );
  }

  return (
    title?.english ??
    title?.romaji ??
    title?.userPreferred ??
    title?.native ??
    ""
  );
};

export const textSanitizer = (textWithHTML: string): string => {
  return sanitizer(textWithHTML, {
    allowedTags: [],
  });
};

export const combineArrays = <T>(...args: (T | T[])[]): T[] => {
  return args.reduce((result: T[], arg: T | T[]) => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    }
    return result;
  }, []);
};

export const ensureDecimal = (num: number): string => {
  // Check if the number is a whole number
  if (num % 1 === 0) {
    return (num / 10).toFixed(1); // Convert to decimal by deviding by 10
  }

  // If the number is already a decimal, return it as is
  return num.toFixed(1);
};
