function Validation(values) {
    let error = {}
   
    if(values.name === "") {
        error.name = "Error: empty input"
    } else {
        error.name= ""
    }

    if(values.email === "") {
        error.email = "Error: empty input"
    } else {
        error.email= ""
    }

    if(values.password === "") {
        error.password = "Error: empty input"
    } else {
        error.password= ""
    }
    return error;
   
}


export default Validation;