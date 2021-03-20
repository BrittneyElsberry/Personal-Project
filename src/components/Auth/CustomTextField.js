import {useField} from 'formik'
import TextField from '@material-ui/core/TextField'

const CustomTextField = ({...props}) => {

    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''

    return (
        <TextField 
       
        {...field}
        error={!!errorText}
        helperText={errorText}        
        
        />

     
    )


}
export default CustomTextField