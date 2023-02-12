import { Formik } from "formik";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { personalInfoSchema } from "../../schemas/schemas";
import PersonalInfoForm from "./PersonalInfoForm";

export default function PersonalInfo() {
  const [setPage, initialValues, handleUpdateForm] = useOutletContext();

  useEffect(() => {
    setPage(0);
  }, [setPage]);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (values) => {
      console.log(values);
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
