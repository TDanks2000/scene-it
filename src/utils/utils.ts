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
