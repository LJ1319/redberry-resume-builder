import { Formik } from "formik";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PersonalInfoForm from "./PersonalInfoForm";

export default function PersonalInfo() {
  const [setPage, initialValues, handleUpdateForm, handleSubmit] =
    useOutletContext();

  useEffect(() => {
    setPage(0);
  }, [setPage]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props) => <PersonalInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
}
