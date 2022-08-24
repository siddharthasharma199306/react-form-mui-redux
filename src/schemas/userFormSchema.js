import * as yup from "yup";

export const userFormSchema = {
  username: "",
  age: null,
  email: "",
};
const userFormSchemaYup = yup.object().shape({
  username: yup.string().required("Username is required"),
  age: yup
    .number()
    .nullable()
    .typeError("Age is required")
    .required("Age is required")
    .positive()
    .integer()
    .min(5, "Age should be greater than 5")
    .max(21, "Age should under 22"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
});

export default userFormSchemaYup;
