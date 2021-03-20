import {Formik, Form} from 'formik'
import axios from 'axios'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {useHistory, useLocation} from 'react-router-dom'
import {updateUser} from '../../redux/authReducer'
import { authSchema } from "./schema"
import CustomTextField from './CustomTextField'
import {flexbox} from '@material-ui/system'
import Box from '@material-ui/core/Box'


const NewAuth = (props) => {
    const { push } = useHistory() //destructering push from useHistory
    const { state } = useLocation()
    // const [user_admin, setuser_admin] = useState(false)


    const register = (body, {resetForm})=> {
        axios.post('/auth/register', body)
        .then((({data})=>{
            props.updateUser(data)
            resetForm()
            push(state ? state.from : '/myfeedback')

        }))
    }


    const login = (body, {resetForm})=> {
        axios.post('/auth/login', body)
        .then((({data})=>{
            props.updateUser(data)
            resetForm()
            push(state ? state.from : '/myfeedback')

        }))
    }



        return (

<Formik
initialValues={{email: '', password: ''}}
onSubmit={login}
validationSchema={authSchema} //where is this coming from again?


>
{(data) => {
    console.log(data, 'this is the data BABAYYYYYY')
    return (
        <Box 
        display='flex'
        flexdirection='column'
        className='signInContainer'
        css={{maxwidth: 100}}
        >
        
        <Form>
            <CustomTextField name='email' 
           
            />
            <CustomTextField name='password ' 
            
            />
            <CustomTextField name='Admin' 
            
            />
            <CustomTextField name='Department Number' />

            <Button onClick={()=> register(data.values, data.resetForm)}>Register</Button>    
            <Button type='submit'>Login</Button>

        </Form>

        </Box>
    )
}}
</Formik>

        )
}

export default connect(null, {updateUser}) (NewAuth)