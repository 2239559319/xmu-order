import type { ReservationTimeItem } from './types';

export async function getReservedNumber(
  reservationTimeId: string,
): Promise<number> {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/getReservationNumber',
      type: 'post',
      dataType: 'json',
      data: { data: reservationTimeId },
      success({ success, reservationNumber }) {
        if (success) {
          resolve(reservationNumber[0].zxcv);
        } else {
          reject(new Error('getReservationNumber error'));
        }
      },
      error() {
        reject(new Error('getReservationNumber error'));
      },
    });
  });
}

export async function getReservationTimeByMonth({
  month,
  year,
  userId,
}: {
  month: string;
  year: string;
  userId: string;
}): Promise<Array<ReservationTimeItem>> {
  const url = `/${userId}/getReservationTimeByMonth`;
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'post',
      dataType: 'json',
      data: {
        month,
        year,
      },
      success(res) {
        const { reservationTime, success } = res;
        if (success) {
          resolve(reservationTime);
        } else {
          reject(new Error('getReservationTimeByMonth error'));
        }
      },
      error() {
        reject(new Error('getReservationTimeByMonth error'));
      },
    });
  });
}

export async function reserve({
  userId,
  reservers,
  timeId,
  timeRT,
  token,
  phoneNumber,
}: {
  userId: string;
  reservers: string[];
  timeId: string;
  timeRT: string;
  token: string;
  phoneNumber: string;
}) {
  const url = `/${userId}/reservation`;

  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url,
      data: {
        reservers,
        timeId,
        timeRT,
        token,
        phoneNumber,
      },
      success(res) {
        const { success } = res;
        if (success) {
          resolve('done');
        } else {
          resolve(res);
        }
      },
      error() {
        reject();
      },
    });
  });
}
