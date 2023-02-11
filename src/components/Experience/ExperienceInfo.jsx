import { Formik } from "formik";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ExperienceInfoForm from "./ExperienceInfoForm";

// const reg = /^\w|[ა-ჰ]{2,}$/;

export default function ExperienceInfo() {
  const [setPage, initialValues, handleUpdateForm, handleSubmit] =
    useOutletContext();

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props) => <ExperienceInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
}
