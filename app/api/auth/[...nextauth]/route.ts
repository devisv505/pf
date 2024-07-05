import NextAuthOptions from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";
import {Adapter} from "next-auth/adapters";

const prisma = new PrismaClient()

const handler = NextAuthOptions({
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return true
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        },
        async session({session, user, token}) {
            // @ts-ignore
            session!!.user!!.id = user.id;
            console.log(session)

            return session
        },
        async jwt({token, user, account, profile, isNewUser}) {
            return token
        }
    },
})

export {handler as GET, handler as POST}