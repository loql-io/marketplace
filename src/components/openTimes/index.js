import React, { useEffect } from 'react';
import { format, parseJSON, parseISO, isWithinInterval } from 'date-fns';

export default function IsOpenToday() {
  const [isOpenToday, setIsOpenToday] = React.useState({
    isOpen: false,
    openTimesWeek: {},
    openTimesToday: {
      start: '',
      end: ''
    }
  });

  useEffect(() => {
    const arr = JSON.parse(
      localStorage.getItem(
        `openTimes_${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}`
      )
    );

    const date = parseJSON(new Date());
    const today = format(date, 'eeee');
    const times = arr?.find((c) => c.day === today && c.open)?.time;
    const startTime = times?.split('-')[0]
      ? `${String(times?.split('-')[0].split(':')[0]).padStart(2, '0')}:${
          times?.split('-')[0].split(':')[1]
        }`
      : null;
    const endTime = times?.split('-')[1]
      ? `${String(times?.split('-')[1].split(':')[0]).padStart(2, '0')}:${
          times?.split('-')[1].split(':')[1]
        }`
      : null;

    const parsedStartTime = parseISO(
      `${format(date, 'yyyy-MM-dd')}T${startTime}`
    );
    const parsedEndTime = parseISO(`${format(date, 'yyyy-MM-dd')}T${endTime}`);

    const isOpen = times
      ? isWithinInterval(date, { start: parsedStartTime, end: parsedEndTime })
      : false;

    setIsOpenToday({
      isOpen: isOpen,
      openTimesWeek: arr,
      openTimesToday: {
        today: today,
        start: startTime,
        end: endTime
      }
    });
  }, []);
  return isOpenToday;
}
