import React from 'react';
import {IState as IProps} from '../App'

const List: React.FC<IProps> = ({people}) => {
// const List = (props: IProps) => {
    const renderList = (): JSX.Element[] => {
        return (
            people.map((person) => {
                return (
                    <li className='List'>
                        <div className="list-header">
                            <img src={person.url} className='List-img' alt="Person image" />
                            <h2>{person.name}</h2>
                        </div>
                        <p>{person.name}</p>
                        <p className='List-note'>{person.note}</p>
                    </li>
                )
            })
        )
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;