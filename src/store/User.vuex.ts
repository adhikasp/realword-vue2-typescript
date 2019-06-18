import { action, getter, Module, mutation, VuexModule } from 'vuex-class-component/dist';
import { ProfileResponse, User, UserAuthenticationRequest } from '@/utils/apiDataType';
import ConduitApi from '@/utils/api';

@Module()
export class UserStore extends VuexModule {

  @getter
  public user: User = <User> {};

  @mutation
  public changeUser(user: User) {
    this.user = user;
  }

  public get isLoggedIn(): boolean {
    return this.user.username !== undefined;
  }

  @action
  public login(request: UserAuthenticationRequest): Promise<ProfileResponse> {
    return ConduitApi.login(request)
      .then((response) => response.data);
  }

}
