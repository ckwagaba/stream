export interface IAppProps {
  accessToken: string;
}

export interface IAppState {
  accessToken: string;
}

export interface IUser {
  accessToken: string;
  name: string;
  handle: string;
  profilePictureUrl: string;
  streams: any[];
}
