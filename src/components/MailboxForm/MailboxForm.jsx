
import {useState} from 'react'
import {useNavigate} from "react-router"

const initialState = {
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();
    

    const handleChange = (event) => {
        // grab the form data
        console.log(event.target.value)
        setFormData({...formData, [event.target.name]: event.target.value})
        // add it to the formData state
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // send data from the form somewhere else
        props.addBox(formData)
        // clears the formData
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Box Size:</label>
            <input type="text" name="boxSize" value={formData.boxSize} onChange={handleChange}/>
            <label htmlFor="">Box Owner:</label>
            <input type="text" name="boxOwner" value={formData.boxOwner} onChange={handleChange}/>
            <button type='submit'>Submit</button>
       </form>
        </>
    )
}

export default MailboxForm