import jwt_decode from "jwt-decode";

// Dto
import type { DecodedTokenDto } from "@/_dto/decoded_token.dto";

const getDecodedAccessToken = (token: string): DecodedTokenDto => {
  return jwt_decode(token);
};

const checkTokenIsExpired = (token: string): boolean => {
  if (!token) {
    return true;
  }

  const decodedToken: any = getDecodedAccessToken(token);

  if (decodedToken.exp > Date.now() / 1000) {
    return false;
  }

  return true;
};

export { getDecodedAccessToken, checkTokenIsExpired };
