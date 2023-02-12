import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// const reg = /^\w|[ა-ჰ]{2,}$/;

export default function EducationInfo() {
  const [setPage, initialValues, handleUpdateForm, handleSubmit] =
    useOutletContext();

  useEffect(() => {
    setPage(2);
  }, [setPage]);

  return <></>;
}
