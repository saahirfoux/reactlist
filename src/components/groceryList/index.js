import React, {useEffect, useState} from 'react';
import Item from './item';

const GroceryList = ({items, onChange}) => {
    let [model, setModel] = useState(items); 
    let [name, setItemName] = useState('');

    const handleFieldChange = (e) => {
        setItemName(e.target.value);
    }
    const handleAdd = () => {
        let list = [...model, {
            id: Math.random(),
            name: name
        }];
        setItemName('');
        setModel(list);
    }

    useEffect(() => {
        onChange();
    }, [items]);

    

    if (!model.length) {
        return (<>Please add one or more items<br/> <button onClick={handleAdd}>Add</button></>)
    }

    return (
    <>
        {model.map((item, index) => (
            <Item item={item} model={model} setModel={setModel} />
        ))}
        <input value={name} onChange={handleFieldChange} placeholder={'Add item'}/>
        <button onClick={handleAdd}>Add</button>
    </>)
}

export default GroceryList;