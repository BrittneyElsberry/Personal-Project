import * as yup from 'yup'

export const authSchema = yup.object({


email: yup.string().required().email().min(5).max(250),
password: yup.string().required().min(2)



})