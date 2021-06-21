import React, {useState}from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const List = (props) =>{
    const [isEditing, setEditing] = useState(false);

    const [newName, setNewName] = useState('');

    const handleChange = (e) =>{
        setNewName(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id={props.id} value={newName} onChange={handleChange}/>
            <button type="button" className="form-btn" onClick={()=> setEditing(false)}>Cancel</button>
            <button type="submit" className="form-btn" onClick="">Save</button>
        </form>
    );

    const viewTemplate =(
        <div className ={props.class} id ={props.id} onClick={() => props.toggleClassName(props.id)} > 
        {props.text}
        <div>
            <span className="edit" onClick={()=>setEditing(true)}>{< FontAwesomeIcon icon = {faEdit} />}</span>
            <span className="close" onClick={(e)=> { e.stopPropagation(); props.deleteTask(props.id)}}>{< FontAwesomeIcon icon = {faTrash} />}</span>
        </div>
        </div> 
    );
    return(
    <li className ="list">
        {isEditing ? editingTemplate : viewTemplate}
    </li>

    );
};

export default List;