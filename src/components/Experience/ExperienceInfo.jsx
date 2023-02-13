import { Formik } from "formik";
import { useEffect, useCallback } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import ExperienceInfoForm from "./ExperienceInfoForm";
import { experienceInfoSchema } from "../../schemas/schemas";

export default function ExperienceInfo() {
  const [setPage, initialValues, handleUpdateForm] = useOutletContext();

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values) => {
      await sleep(500);
      navigate("education");
    },
    [navigate]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={experienceInfoSchema}
      onSubmit={handleSubmit}
    >
      {(props) => <ExperienceInfoForm saveForm={handleUpdateForm} {...props} />}
    </Formik>
  );
}
