import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import EducationInfoForm from "./EducationInfoForm";

import { educationInfoSchema } from "../../schemas/schemas";
import axios from "../../apis/degrees";
import { useNavigate } from "react-router-dom";

export default function EducationInfo() {
  const [setPage, initialValues, handleUpdateForm] = useOutletContext();

  useEffect(() => {
    setPage(2);
  }, [setPage]);

  const [degrees, setDegrees] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      setDegrees(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const base64 = initialValues.image;

  let eduData = [];
  initialValues.educations.forEach((education) => {
    eduData.push({ ...education, degree_id: education.degree.id });
    delete eduData.degree;
  });

  const navigate = useNavigate();

  async function handleSubmit() {
    const blob = await fetch(base64).then((res) => res.blob());

    const data = {
      ...initialValues,
      image: blob,
      educations: eduData,
    };

    const res = await axios.post(
      "https://resume.redberryinternship.ge/api/cvs",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    res.status === 201 ? navigate("/resume") : console.log("NOT POSTED");
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
