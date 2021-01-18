export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface IListOfUsers {
  list: IUser[];
}
