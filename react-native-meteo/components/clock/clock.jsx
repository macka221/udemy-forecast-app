
import { useEffect, useState } from 'react';
import { nowToHHMM } from '../../utils/date-time.utils';
import { Txt } from '../txt/txt';
import { clockStyles } from './clock.style';

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Txt style={clockStyles.time}>{time}</Txt>
    </>
  )
}
