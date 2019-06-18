import Axios, { AxiosResponse } from 'axios';
import * as apiType from './apiDataType';
import { UserAuthenticationRequest } from './apiDataType';

// Shorthand for API response type
type Response<T> = Promise<AxiosResponse<T>>;

class ConduitBackendApi {

  private basePath: string;

  constructor(serverUri: string) {
    this.basePath = serverUri + 'api/';
  }

  public getGlobalFeed(): Response<apiType.ArticleListResponse> {
    return this.get('articles');
  }

  public getTag(): Response<apiType.TagListResponse> {
    return this.get('tags');
  }

  public getArticle(slug: string): Response<apiType.ArticleResponse> {
    return this.get('articles/' + slug);
  }

  public getComments(slug: string): Response<apiType.CommentListResponse> {
    return this.get('articles/' + slug + '/comments');
  }

  public getProfile(username: string): Response<apiType.ProfileResponse> {
    return this.get('profiles/' + username);
  }

  public login(request: UserAuthenticationRequest): Response<apiType.ProfileResponse> {
    return this.post('users/login', {
      user: request,
    });
  }

  private get(uri: string): Response<any> {
    return Axios.get(this.basePath + uri);
  }

  private post(uri: string, data?: any): Response<any> {
    return Axios.post(this.basePath + uri, data);
  }

}

const DEFAULT_BACKEND = 'https://conduit.productionready.io/';
const ConduitApi: ConduitBackendApi = new ConduitBackendApi(DEFAULT_BACKEND);

export default ConduitApi;
