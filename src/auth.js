import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
import Spotify from "@auth/core/providers/spotify"
import GitLab from "@auth/core/providers/gitlab"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./app/lib/prisma"
import authConfig from "./auth.config";

const options = {
    providers: [Google, GitHub, Spotify, GitLab],
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    callbacks: {
        async session({ session, token }) {
            session.user.role = token?.role
            return session
        },
        async jwt({ token }) {  

            const { role } = await prisma.user.findUnique({
                where: {
                    email: token.email
                }
            })
            token.role = role

            return token
        }
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({...options,...authConfig})