import React, { useState } from 'react';
import {IState as Props} from '../App'

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people , setPeople}) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) return;
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note,
            }
        ])
    }

    return (
        <div className='AddToList'>
            <input type="text" value={input.name} onChange={handleChange} name="name" placeholder='Name' className='AddToList-input' />
            <input type="text" value={input.age} onChange={handleChange} name="age" placeholder='Age' className='AddToList-input' />
            <input type="text" value={input.url} onChange={handleChange} name="url" placeholder='Image Url' className='AddToList-input' />
            <textarea name="note" placeholder='Notes' value={input.note} onChange={handleChange} className='AddToList-input'></textarea>
            <button className='AddToList-btn' onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList;