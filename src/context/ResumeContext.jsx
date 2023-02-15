import { useState } from "react";
import { createContext } from "react";

export const ResumeContext = createContext({});

export function ResumeContextProvider(props) {
  const [resumeData, setResumeData] = useState({});

  const contextValue = {
    resumeData,
    setResumeData,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {props.children}
    </ResumeContext.Provider>
  );
}
