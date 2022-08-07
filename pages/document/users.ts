import { gql } from "@apollo/client";
export interface Users {
  name: number;
  email: number;
  password: number;
  posts: Posts[];
}
export interface Posts {
  id: number;
  name: string;
  type: string;
  description: string;
}
const USERS_DOCUMENT = gql`
  query {
    getUsers {
      id
      name
      email
      password
      posts {
        id
        name
      }
    }
  }
`;
export { USERS_DOCUMENT };
