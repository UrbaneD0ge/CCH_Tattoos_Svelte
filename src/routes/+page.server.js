import { Reservations } from '$db/reservation.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log(data);

    try {
      await Reservations.insertOne(data)
        .then(Response => console.log(Response))
        .catch(error => console.error(`Failed to update RSVP: ${error}`));
    } catch (error) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(error)
      };
    }
    throw redirect(303, '/reservations');
  }
};