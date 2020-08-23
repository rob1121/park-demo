import * as yup from "yup";

const validationSchema = yup.object().shape({
  parkingLotCapacity: yup
    .number()
    .typeError("Must be a number")
    .min(0)
    .max(100)
    .label("Capacity")
    .required(),
});

export default validationSchema;
