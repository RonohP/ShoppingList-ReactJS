import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Form = (props) =>{

    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.submit(name);
        setName("");
    }
    
    return(
        <form id="Form" onSubmit={handleSubmit}>
            <input type="text" id="title" name = "title" placeholder="Add title..." value={name}required onChange={handleChange}/>
            < button type="submit" id = "btn" className="form-btn">
                < FontAwesomeIcon icon = {faPlus} /> &nbsp;
                ADD 
            </button >
        </form>
    );
};

export default Form;