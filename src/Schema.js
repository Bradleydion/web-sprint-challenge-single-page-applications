import * as yup from "yup";

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2,"Name needs to be atleast 2 characters in length"),

    size: yup.string()
    .oneOf(['1','2','3','4'])
    .required("Please select a size"),
})