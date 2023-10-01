import { start_mongo } from '$db/mongo';
import mongoose from 'mongoose';
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from '@auth/core/providers/google'
import {
  GOOGLE_ID,
  GOOGLE_SECRET,
  AUTH_USERS
} from "$env/static/private"
import { redirect } from '@sveltejs/kit';
import { sequence } from "@sveltejs/kit/hooks";
import { signOut } from "@auth/sveltekit";

mongoose.set('strictQuery', true);

start_mongo().then(() => {
  console.log('Connected!');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

async function authorization({ event, resolve }) {
  if (event.url.pathname.startsWith("/reservations")) {
    const session = await event.locals.getSession();
    if (!session || !AUTH_USERS.includes(session?.user.email)) {
      throw redirect(303, "/auth");
    }
  }
  return resolve(event);
};

export const handle = sequence(
  SvelteKitAuth({
    providers: [
      Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })
    ]
  }),
  authorization
);