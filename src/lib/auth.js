import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_MONGO_URI);
const db = client.db("SunCart");

export const auth = betterAuth({

  trustedOrigins: [
    "http://localhost:3000",
    "https://sun-cart-project.vercel.app",
  ],
  emailAndPassword: { 
    enabled: true, 
  },
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});


