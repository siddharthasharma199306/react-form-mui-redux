import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userFormSchema from "./schemas/userFormSchema";
import { saveUserData } from "./slices/userFormSlice";

export default function App() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onBlur",
    resolver: yupResolver(userFormSchema),
  });

  const handleOnSubmit = (evt) => {
    console.log(evt);
  };

  return (
    <div className="App">
      <Box
        component="form"
        onSubmit={handleSubmit(handleOnSubmit)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="username"
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="username"
                  error={errors.username ? true : false}
                  helperText={errors.username?.message}
                  margin="normal"
                />
              )}
            />

            <Controller
              control={control}
              name="age"
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Age With Validation"
                  error={errors.age ? true : false}
                  helperText={errors.age?.message}
                  margin="normal"
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="email"
                  fullWidth
                  label="Email With Validation"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  margin="normal"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => dispatch(saveUserData(getValues()))}>
              Save to redux
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                userFormSchema
                  .validate(getValues(), { abortEarly: false })
                  // .then((valid) => console.log(valid))
                  .catch((err) => console.log(err.name, err.errors));
              }}
            >
              Validate via redux data
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
