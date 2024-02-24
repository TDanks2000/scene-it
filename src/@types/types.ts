export type PickKey<T, K extends keyof T> = Extract<keyof T, K>;

export type SectionTypes = "trending" | "popular" | "top_rated" | "new";

export type MediaTypes = "ANIME" | "TV_SHOWS" | "MOVIES";

export enum SearchTypeEnum {
  MOVIE = "movie",
  TV = "tv",
  PERSON = "person",
  NETWORK = "network",
  COLLECTION = "collection",
  EPISODE = "episode",
  MULTI = "multi",
}
