import * as yup from "yup";

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2,"Name needs to be atleast 2 characters in length"),

    size: yup.string()
    .oneOf(['1','2','3','4'],'Please select a size')
    .required("Please select a size!!!"),
    
    original:yup.boolean(),
    garlicRanch:yup.boolean(),
    BBQSauce:yup.boolean(),
    spinachAlfredo:yup.boolean(),
    pepperoni:yup.boolean(),
    sausage:yup.boolean(),
    canadianBaccon:yup.boolean(),
    spicyItalianSausage:yup.boolean(),
    girlledChicken:yup.boolean(),
    greenPeppers:yup.boolean(),
    dicedTomatos:yup.boolean(),
    blackOlives:yup.boolean(),
    roastedGarlic:yup.boolean(),
    artichokeHearts:yup.boolean(),
    threeCheese:yup.boolean(),
    pineapple:yup.boolean(),
    extraCheese:yup.boolean(),
    instructionField:yup.string(),
})