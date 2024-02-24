abstract class BaseApi {
  abstract readonly name: string;
  abstract readonly baseUrl: string;

  abstract readonly apiKey?: string;
  abstract readonly accessToken?: string;

  abstract search(query: string, ...args: unknown[]): Promise<unknown>;

  abstract info(id: string, ...args: unknown[]): Promise<unknown>;
}

export default BaseApi;
