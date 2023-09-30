import { Reservations } from '$db/reservation.js';

export async function load({ context }) {
  const data = await Reservations.find().toArray();

  // console.log(data);

  return {
    Reservations: JSON.parse(JSON.stringify(data)),
  };
};