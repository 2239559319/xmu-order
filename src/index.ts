import moment from 'moment';
import { userId } from './cleanObj';
import { reserve, getReservationTimeByMonth } from './http';

async function getTimeId(day: string) {
  const momentDay = moment(day);
  const year = momentDay.format('YYYY');
  const month = momentDay.format('MM');
  const arr = await getReservationTimeByMonth({ month, year, userId });

  for (const { id, date } of arr) {
    if (date === day) {
      return id;
    }
  }
  return null;
}

function run(day: string, phoneNumber: string) {
  const timeRT = moment().format('YYYY/MM/DD');
  const reservers = [userId];

  const timer = setInterval(async () => {
    try {
      const timeId = await getTimeId(day);
      const res: any = await reserve({
        userId,
        reservers,
        timeId,
        timeRT,
        token: null,
        phoneNumber,
      });

      if (res === 'done') {
        clearInterval(timer);
        console.log('done');
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, 500);
}

run('2023-08-02', '13072860887');
