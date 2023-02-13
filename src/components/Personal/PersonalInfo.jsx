import { Formik } from "formik";
import { useEffect, useCallback } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import PersonalInfoForm from "./PersonalInfoForm";
import { personalInfoSchema } from "../../schemas/schemas";

export default function PersonalInfo() {
  const [setPage, initialValues, handleUpdateForm] = useOutletContext();

  useEffect(() => {
    setPage(0);
  }, [setPage]);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values) => {
      await sleep(500);
      navigate("experience");
    },
    [navigate]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={personalInfoSchema}
      onSubmit={handleSubmit}
    >
      {(props) => <PersonalInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
}
