const style = {
    backgroundColor: '#F2B705',
    color: '#565759',
    padding: '12px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'left',
    fontWeight: 'bolder',
    margin: '10px 15px',
    overflow: 'hidden',
    display: 'inline-block',
};
const Buttons = (props) =>{
    return(
            <button style={style} onClick={props.handler}>
                {props.icon} {' '} {props.text}

            </button>
    );
};

export default Buttons;