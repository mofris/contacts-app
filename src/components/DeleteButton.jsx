import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='contact-item-delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;