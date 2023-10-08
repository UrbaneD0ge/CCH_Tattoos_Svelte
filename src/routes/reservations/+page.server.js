import { Reservations } from '$db/reservation.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export async function load({ context }) {
  const data = await Reservations.find().toArray();

  // console.log(data);

  return {
    Reservations: JSON.parse(JSON.stringify(data)),
  };
};

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    const deleteId = data.get('_id');
    console.log(deleteId);

    console.log(deleteId);

    try {
      await Reservations.deleteOne({ _id: new ObjectId(deleteId) })
        .then(Response => console.log(Response))
        .catch(error => console.error(`Failed to delete RSVP: ${error}`));
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