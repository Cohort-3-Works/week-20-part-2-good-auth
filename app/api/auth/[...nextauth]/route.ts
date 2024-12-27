import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // Replace this with actual logic to validate the user
        return {
          name: "subh",
          id: "1",
          email: "subh@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
