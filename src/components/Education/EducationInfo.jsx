import { Formik } from "formik";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import EducationInfoForm from "./EducationInfoForm";

import { educationInfoSchema } from "../../schemas/schemas";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "../../apis/degrees";

export default function EducationInfo() {
  const [setPage, initialValues, handleUpdateForm] = useOutletContext();

  useEffect(() => {
    setPage(2);
  }, [setPage]);

  const [degrees, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/degrees",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleSubmit() {
    axiosFetch({
      axiosInstance: axios,
      method: "post",
      url: "/cvs",
      requestConfig: {
        data: {},
      },
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={educationInfoSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <EducationInfoForm
          saveForm={handleUpdateForm}
          degrees={degrees}
          {...props}
        />
      )}
    </Formik>
  );
}
