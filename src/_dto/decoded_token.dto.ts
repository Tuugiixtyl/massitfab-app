export interface DecodedTokenDto {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
  user_id: number;
  exp: number;
  iat: number;
}
