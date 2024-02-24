import { type SectionTypes } from "@/@types/types";
import BaseApi from "@/server/types/models/api";
import axios, { type AxiosRequestConfig } from "axios";
import { env } from "../../env";

export interface TMDBConfig {
  imageUrl: string;
  sizes: {
    episode: string;
    tv: string;
    movie: string;
  };
}

class TMDB extends BaseApi {
  readonly name: string = "The Movie Database";
  readonly baseUrl: string = "https://api.themoviedb.org";
  readonly apiKey: string = env.TMDB_API_KEY;
  readonly accessToken?: string | undefined;

  private config?: TMDBConfig;

  async getConfig() {
    if (typeof this.config === "undefined") {
      return;
    }

    try {
      const options: AxiosRequestConfig = {
        url: `${this.baseUrl}/3/configuration`,
        method: "GET",
        params: {
          api_key: this.apiKey,
        },
      };

      const res = await axios.request(options);
      const data = JSON.parse(res.data);
      const { images } = data;

      const imageUrl = images?.secure_base_url;
      const episodeSize = images?.still_sizes?.[2]; // This should be 300px
      const movieSize = images?.poster_sizes?.[3]; // This should be 342px (closest to 300px)

      if (!imageUrl || !episodeSize || !movieSize) {
        throw new Error("Missing config");
      }

      this.config = {
        imageUrl,
        sizes: { episode: episodeSize, tv: movieSize, movie: movieSize },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async search(query: string, type: "movie" | "person" | "multi" | "tv") {
    try {
      const options: AxiosRequestConfig = {
        url: `${this.baseUrl}/3/search/${type}`,
        method: "GET",
        params: {
          query,
          api_key: this.apiKey,
        },
      };

      const res = await axios.request(options);

      return res;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async info(
    id: string,
    type: "movie" | "tv" | "person" | "network" | "collection",
  ) {
    const options: AxiosRequestConfig = {
      url: `${this.baseUrl}/3/${type}/${id}`,
      method: "GET",
      params: {
        api_key: this.apiKey,
        append_to_response:
          "release_dates,watch/providers,alternative_titles,credits,external_ids,images,keywords,recommendations,reviews,similar,translations,videos",
        language: "en-US",
        include_image_language: "en",
      },
    };

    const res = await axios.request(options);

    return res;
  }

  async popular(type: "tv" | "movie", page = 1) {
    const options: AxiosRequestConfig = {
      url: `${this.baseUrl}/3/${type}/popular`,
      method: "GET",
      params: {
        api_key: this.apiKey,
        page: page.toString(),
        language: "en-US",
        include_image_language: "en",
      },
    };

    const res = await axios.request(options);

    return res;
  }

  async topRated(type: "tv" | "movie", page = 1) {
    const options: AxiosRequestConfig = {
      url: `${this.baseUrl}/3/${type}/top_rated`,
      method: "GET",
      params: {
        api_key: this.apiKey,
        page: page.toString(),
        language: "en-US",
        include_image_language: "en",
      },
    };

    const res = await axios.request(options);

    return res;
  }

  async new(type: "tv" | "movie", page = 1) {
    const options: AxiosRequestConfig = {
      url: `${this.baseUrl}/3/${type}/${
        type === "tv" ? "on_the_air" : "now_playing"
      }`,
      method: "GET",
      params: {
        api_key: this.apiKey,
        page: page.toString(),
        language: "en-US",
        include_image_language: "en",
      },
    };

    const res = await axios.request(options);

    return res;
  }

  async getSection(section: SectionTypes, type: "movie" | "tv") {
    let res;
    switch (section) {
      case "popular":
        res = await this.popular(type);
        break;
      case "top_rated":
        res = await this.topRated(type);
        break;
      case "new":
        res = await this.new(type);
        break;
      default:
        res = await this.popular(type);
        break;
    }

    return res;
  }

  async getImage(image_path?: string, type?: "movie" | "tv" | "episode") {
    if (!image_path || !type) {
      return;
    }

    if (typeof this.config === "undefined") {
      await this.getConfig();
    }
    if (typeof this.config === "undefined") {
      return;
    }

    const { imageUrl, sizes } = this.config;

    const size = sizes[type];

    return `${imageUrl}${size}${image_path}`;
  }
}

const tmdb = new TMDB();
export { tmdb };
