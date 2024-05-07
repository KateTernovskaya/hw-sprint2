import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [startBtn, setStartBtn] = useState<boolean>(false)
    const [stopBtn, setStopBtn] = useState<boolean>(true)

    const start = () => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(+timer)
        setStartBtn(true)
        setStopBtn(false)
    }
    const stop = () => {
        clearInterval(timerId)
        setStartBtn(false)
        setStopBtn(true)
    }
    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const renderTime = () => {
        let formatter = new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

        return formatter.format(date)
    }
    const renderDate = () => {
        let formatter1 = new Intl.DateTimeFormat("ru");
        return formatter1.format(date)
    }
    const renderDay = () => {
        let formatter = new Intl.DateTimeFormat("en-US", {
            weekday: "long"
        });

        return formatter.format(date)
    }
    const renderMonth = () => {
        let formatter = new Intl.DateTimeFormat("en-US", {
            month: "long",
        });

        return formatter.format(date)
    }

    const stringTime = renderTime() || <br/>
    const stringDate = renderDate() || <br/>

    const stringDay = renderDay() || <br/> // пишут студенты
    const stringMonth = renderMonth() || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={startBtn} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={stopBtn} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
