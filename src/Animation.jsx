import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import clearDay from './assets/animations/clear-day.svg';
import clearNight from './assets/animations/clear-night.svg';
import partly_cloudy_day from './assets/animations/partly-cloudy-day.svg';
import partly_cloudy_night from './assets/animations/partly-cloudy-night.svg';
import cloudy from './assets/animations/cloudy.svg';
import overcast_day from './assets/animations/overcast-day.svg';
import overcast_night from './assets/animations/overcast-night.svg';
import mist from './assets/animations/mist.svg';
import rain from './assets/animations/rain.svg';
import snow from './assets/animations/snow.svg';
import sleet from './assets/animations/sleet.svg';
import drizzle from './assets/animations/drizzle.svg';
import thunderstorms_day from './assets/animations/thunderstorms-day.svg';
import thunderstorms_night from './assets/animations/thunderstorms-night.svg'
import fog_day from './assets/animations/fog-day.svg';
import fog_night from './assets/animations/fog-night.svg';
import thunderstorms_rain from './assets/animations/thunderstorms-rain.svg';
import thunderstorms_snow from './assets/animations/thunderstorms-snow.svg';
import haze from './assets/animations/haze.svg';

import { translationMap, dualValues } from './util';

function Animation({ weatherType }) {
    const [activeSvg, setActiveSvg] = useState('');
    useEffect(() => {
        let wType = translationMap[weatherType];
        if (dualValues.includes(wType)) {
            if (new Date().getHours() < 16) {
                setActiveSvg(`${wType}Day`)
            }
            else {
                setActiveSvg(`${wType}Night`)
            }
        }
        else {
            setActiveSvg(wType);
        }
    }, [weatherType])
    return (
        <>
            {
                activeSvg && activeSvg == 'clearDay' &&
                <Image src={clearDay} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'clearNight' &&
                <Image src={clearNight} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'partly_cloudyDay' &&
                <Image src={partly_cloudy_day} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'partly_cloudyNight' &&
                <Image src={partly_cloudy_night} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'cloudy' &&
                <Image src={cloudy} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'overcastDay' &&
                <Image src={overcast_day} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'overcastNight' &&
                <Image src={overcast_night} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'mist' &&
                <Image src={mist} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'rain' &&
                <Image src={rain} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'snow' &&
                <Image src={snow} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'sleet' &&
                <Image src={sleet} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'drizzle' &&
                <Image src={drizzle} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'thunderstormsDay' &&
                <Image src={thunderstorms_day} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'thunderstormsNight' &&
                <Image src={thunderstorms_night} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'fogDay' &&
                <Image src={fog_day} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'fogNight' &&
                <Image src={fog_night} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'thunderstorms_rain' &&
                <Image src={thunderstorms_rain} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'thunderstorms_snow' &&
                <Image src={thunderstorms_snow} fluid style={{ height: '200px' }} />
            }
            {
                activeSvg && activeSvg == 'haze' &&
                <Image src={haze} fluid style={{ height: '200px' }} />
            }
        </>

    )
}
export default Animation;