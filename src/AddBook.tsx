import React from "react";
import { useForm, Controller } from "react-hook-form";
import AppTextForm from "./TextForm";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AddBook = () => {
  return (
    <>
      <AppTextForm></AppTextForm>
      <Button component={Link} to="/rentalList">
        貸し出し一覧へ
      </Button>
    </>
  );
};

export default AddBook;
