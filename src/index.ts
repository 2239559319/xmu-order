import moment from 'moment';
import { code, userId } from './cleanObj';
import { reserve, getReservationTimeByMonth } from './http';

async function getTimeId(day: string) {
  const momentDay = moment(day);
  const year = momentDay.format('YYYY');
  const month = momentDay.format('MM');
  const arr = await getReservationTimeByMonth({ month, year, code });

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
      if (!timeId) {
        console.log('未开始');
      } else {
        const res: any = await reserve({
          userId,
          code,
          reservers,
          timeId,
          timeRT,
          token: (<HTMLInputElement>document.querySelector('#sign')).value,
          phoneNumber,
          // @ts-ignore
          z: window[id].value,
        });

        if (res === 'done') {
          clearInterval(timer);
          console.log('done');
        } else {
          console.log(res);
        }
      }
    } catch (error) {
      console.log(error);
    }
    clearInterval(timer);
  }, 2000);
}

window.onbeforeunload();

run('2023-08-19', '13401312031');
