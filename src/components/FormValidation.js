function FormValidation(formData){
    let errors = {}

    //Login
    if(!formData.email){
        errors.email = "*Please enter your email"
    }else if(!formData.password){
        errors.password = "*Please enter password"
    }

    return errors
}

export default FormValidation