import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],

  //Override th default sign in page
  secret: process.env.NEXTAUTH_SECRET!,

  page:{
    signIn:"/auth/signin",
  }
}

export default NextAuth(authOptions)

