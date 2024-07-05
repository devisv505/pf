import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";
import {Adapter} from "next-auth/adapters";

const prisma = new PrismaClient()

const handler = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
    ],
    callbacks: {
        async signIn({}) {
            return true
        },
        async redirect({baseUrl}) {
            return baseUrl
        },
        async session({session, user}) {
            // @ts-ignore
            session!!.user!!.id = user.id;
            console.log(session)

            return session
        },
        async jwt({token}) {
            return token
        }
    },
})

export {handler as GET, handler as POST}