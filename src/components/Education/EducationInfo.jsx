import { Formik } from "formik";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import EducationInfoForm from "./EducationInfoForm";

import { educationInfoSchema } from "../../schemas/schemas";

// const reg = /^\w|[ა-ჰ]{2,}$/;

export default function EducationInfo() {
  const [setPage, initialValues, handleUpdateForm, handleSubmit] =
    useOutletContext();

  useEffect(() => {
    setPage(2);
  }, [setPage]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={educationInfoSchema}
      onSubmit={handleSubmit}
    >
      {(props) => <EducationInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
}
