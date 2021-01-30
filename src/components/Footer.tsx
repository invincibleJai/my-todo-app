import React from 'react';

import './Footer.css';

const Footer: React.FC<{item:number, storage: string, filterTodoList: (type:string) => void}> = ({item = 0, storage, filterTodoList}) => {
    return (
        <div className="footer">
            <button type="button" style={{flex:1}} onClick={() => filterTodoList('all')}>All Item</button>
            <button type="button" style={{flex:1}} onClick={() => filterTodoList('active')}>Active</button>
            <button type="button" style={{flex:1}} onClick={() => filterTodoList('completed')}>Completed</button>
            <span style={{color: '#cecece', flex:4, textAlign: 'center'}}>{item} Items | Make use of {storage} to store data</span>
        </div>
    );
}

export default Footer;