import auth, { NextAuthOptions } from "next-auth";

export const config: NextAuthOptions = {
  providers: [],
};

export default auth(config);
