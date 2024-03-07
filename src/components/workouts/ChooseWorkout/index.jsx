import './styles.css'
import { useState } from 'react';

import RPEWorkout from '../RPE';

export default function ChooseWorkout ({weight, sendChar, measuring, setConnected, setMeasuring}) {

    const [workout, setWorkout] = useState(undefined);

    return (
        <>
          <RPEWorkout
                weight={weight}
                sendChar={sendChar}
                measuring={measuring}
                setConnected={setConnected}
                setMeasuring={setMeasuring}
              />
        </>
    )
}