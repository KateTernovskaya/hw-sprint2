import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: {
        avatar: string
        name: string
    },
    message: {
        text: string
        time: string
    },
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Evgeniy Onegin',
    },
    message: {
        text: 'Я к Вам пришел, чего же боле? Быть может, мне еще сплясать?',
        time: new Date().toTimeString().slice(0, 5),
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Tatyana Larina',
    },
    message: {
        text: 'Обидно, Женя, мне до боли! Зачем глумитесь Вы опять? Конечно, Вам была не в новость невинной девушки любовь! ' +
            'И ночью под луны покров спешили, в гости к нам готовясь!',
        time: new Date().toTimeString().slice(0, 5),
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1