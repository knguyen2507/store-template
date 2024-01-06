export class UserModel {
  id: string | null;
  name: string | null;
  phone: string | null;
}

export class LoginModel {
  username: string;
  password: string;
}

export class UserLoginModel {
  user: UserModel | null;
  accessToken: string | null;
}
