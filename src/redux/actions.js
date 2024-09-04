// actions.js
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});
