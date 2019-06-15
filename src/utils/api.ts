import Axios, { AxiosResponse } from 'axios';
import * as apiType from './apiDataType';

// Shorthand for API response type
type Response<T> = Promise<AxiosResponse<T>>;

class ConduitBackendApi {

  private basePath: string;

  constructor(serverUri: string) {
    this.basePath = serverUri + 'api/';
  }

  public getGlobalFeed(): Response<apiType.ArticleListResponse> {
    return Axios.get(this.basePath + '/articles');
  }

  public getTag(): Response<apiType.TagListResponse> {
    return Axios.get(this.basePath + '/tags');
  }
}

const DEFAULT_BACKEND = 'https://conduit.productionready.io/';
const ConduitApi: ConduitBackendApi = new ConduitBackendApi(DEFAULT_BACKEND);

export default ConduitApi;
