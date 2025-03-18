import NextAuth from "next-auth/next";
import User from "@/models/users";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { log } from "console";

const handler = NextAuth({

  session: {
    strategy: "jwt",
  },
  providers: [ 
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        profession:{},
        maritalstatus:{},
        gender:{},
      },
      // ============================================
      async authorize(credentials) {
        try {

          await connectToDatabase();
          console.log("hii")
          const user = await User.findOne({ email: credentials?.email });
          console.log(user);

          if (!user) {
            throw new Error("");
          }
          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password as string
          );
          if (!isValidPassword) {
            throw new Error("");
          }
          return user;
        } catch {
          return null;
        }
      },//=========================================
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
       
        token.maritalstatus=user.maritalstatus;
        token.profession=user.profession;
        token.gender=user.gender;
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
         session.user = {
          email: token.email,
          name: token.name,
          profession: token.profession,
          maritalstatus:token.maritalstatus,
          gender:token.gender,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
