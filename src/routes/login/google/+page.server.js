import { redirect } from "@sveltejs/kit";
import { client_id } from '$env/static/private';
const port = process.env.PORT || 5173;

export async function load() {
  throw redirect(303, 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + client_id +
    '&redirect_uri=http://localhost:' + port +
    '/login/google/callback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email')
}