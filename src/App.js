import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import userFormSchema from "./schemas/userFormSchema";

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onBlur",
    resolver: yupResolver(userFormSchema),
  });

  console.count("app rerender");

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
        </Grid>
      </Box>
    </div>
  );
}
