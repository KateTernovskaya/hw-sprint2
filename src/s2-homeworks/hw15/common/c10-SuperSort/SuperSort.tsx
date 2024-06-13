import React from 'react'
import down from '../../assets/down.png'
import up from '../../assets/up.png'
import sort from '../../assets/sort.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = sort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    const styles = { width: '15px', height: '15px' }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img style={styles }
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
