import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { IAccount } from "./database/account.model";
import { api } from "./lib/api";
import { ActionResponse } from "./types/global";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async session({ session, token }) {
      // Attach the user id from the token to the session.
      session.user.id = token.sub as string;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        // Use either account.id or account.providerAccountId.
        const providerAccountId =
          account.type === "credentials"
            ? token.email!
            : String(account.id || account.providerAccountId);

        const { data: existingAccount, success } =
          (await api.accounts.getByProvider(
            providerAccountId
          )) as ActionResponse<IAccount>;

        if (!success || !existingAccount) return token;

        const userId = existingAccount.userId;
        if (userId) token.sub = userId.toString();
      }
      return token;
    },
    async signIn({ user, profile, account }) {
      if (account?.type === "credentials") return true;
      if (!account || !user) return false;

      // Debug logging (optional)
      console.log("Account object:", account);
      console.log("Profile object:", profile);

      // Build user info for OAuth sign in.
      const userInfo = {
        name: user.name!,
        email: user.email!,
        image: user.image!,
        username:
          account.provider === "github"
            ? (profile?.login as string)
            : (user.name?.toLowerCase() as string),
      };

      // Use either account.id or account.providerAccountId.
      const providerAccountId = String(account.id || account.providerAccountId);

      const { success } = (await api.auth.oAuthSignIn({
        user: userInfo,
        provider: account.provider as "github" | "google",
        providerAccountId,
      })) as ActionResponse;

      return success;
    },
  },
});
