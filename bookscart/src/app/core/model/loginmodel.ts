export interface loginmodel {
  token: string;
  userDetails: userDetails;
}
export interface userDetails {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  gender: string;
  userTypeId: number;
}

export interface cartmodel {
  usersId: string;
  booksid: number;
}
