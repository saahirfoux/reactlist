import React, {useState} from 'react';
import EditButton from './edit';
import SaveButton from './save';
import DeleteButton from './delete';

const Item = ({item, model, setModel}) => {
    let [editMode, setEditMode] = useState(false);
    let [newName, setNewName] = useState('');
    const handleEdit = () => {
        setEditMode(!editMode);
    };
    const updateName = () => {
        return model.map((current) => {
            if (current.id === item.id) {
                current.name = newName;
            }
            return current;
        })
    }
    const removeItem = () => {
        return model.filter((current) => {
            return current.id !== item.id;
        });
    }
    const handleDelete = () => {
        setModel(removeItem())
    };
    const handleChange = (e) => {
        setNewName(e.target.value);
    };
    const handleSave = () => {
        setModel(updateName());
        setEditMode(!editMode);
    };
    return (
    <>
        <li className={'grocery-item'}>
            {!editMode ? item.name : (<input onChange={handleChange}/>)}
            {!editMode ? <EditButton onClick={handleEdit}/> : <SaveButton onClick={handleSave}/>}
            <DeleteButton onClick={handleDelete}/>
        </li>
    </>)
}

export default Item;