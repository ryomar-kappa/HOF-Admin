import { Box, Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import addBook from "./FireBase";
import Book from "./Book";

type FormProps = {
  title: string;
  author: string;
  publisher: string;
};

const AppTextForm: React.FC<any> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "onBlur",
    criteriaMode: "all",
    shouldFocusError: false,
  });
  const onSubmit: SubmitHandler<FormProps> = (data) => {
    const book = new Book(data.title, data.author, data.publisher);
    addBook(book);
  };

  return (
    <Box
      component="form"
      marginTop="50px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="title"
        control={control}
        rules={{
          required: "入力必須です",
          maxLength: {
            value: 30,
            message: "30文字以下で入力してくださいね！",
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextField
            label="タイトル"
            placeholder="リーダブルコード"
            multiline
            required
            value={value}
            variant="outlined"
            margin="dense"
            onChange={onChange}
            onBlur={onBlur}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="author"
        control={control}
        rules={{
          required: "入力必須です",
          maxLength: {
            value: 30,
            message: "30文字以下で入力してくださいね！",
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextField
            label="著者"
            placeholder="hogehoge"
            multiline
            required
            value={value}
            variant="outlined"
            margin="dense"
            onChange={onChange}
            onBlur={onBlur}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="publisher"
        control={control}
        rules={{
          required: "入力必須です",
          maxLength: {
            value: 30,
            message: "30文字以下で入力してくださいね！",
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextField
            label="出版社"
            placeholder="fugafuga"
            multiline
            required
            value={value}
            variant="outlined"
            margin="dense"
            onChange={onChange}
            onBlur={onBlur}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />

      <Button type="submit" color="primary" variant="contained" size="large">
        送信する
      </Button>
    </Box>
  );
};

export default AppTextForm;
