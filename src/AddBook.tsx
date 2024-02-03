import React from "react";
import { useForm, Controller } from "react-hook-form";
import AppTextForm from "./TextForm";

const AddBook = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  return (
    <>
      <AppTextForm></AppTextForm>
    </>
  );
};

export default AddBook;
