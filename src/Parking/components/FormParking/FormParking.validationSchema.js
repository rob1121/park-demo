import * as yup from "yup";
import store from "../../../redux/store";
const validationSchema = yup.object().shape({
  plateNumber: yup
    .string()
    .label("Plate number")
    .trim()
    .matches(/^[A-Za-z]{3}-[0-9]{4}$/, "Invalid plate number")
    .required()
    .test("Unique Plate number", "Plate number already exist", (value) => {
      const { slots } = store.getState().park;
      return !slots
        .filter(Boolean)
        .some(({ plateNumber }) => plateNumber === value);
    }),
  color: yup.string().label("Color").required(),
});

export default validationSchema;
