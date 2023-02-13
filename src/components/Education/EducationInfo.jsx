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

  const base64 = initialValues.image;

  async function handleSubmit() {
    const blob = await fetch(base64).then((res) => res.blob());

    console.log(blob);

    const res = await axios.post(
      "https://resume.redberryinternship.ge/api/cvs",
      initialValues,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(res.data);
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
