import { createContext, useState } from "react";
import { experience } from "../data/fourth_data";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  //first job post  section
  const [projectType, setProjectType] = useState("");
  //second job post section
  const [title, setTitle] = useState("");
  // third job screen
  const [tags, setTags] = useState([]);
  // fourth job screen
  const [projectInfo, setProjectInfo] = useState({
    projectType: "",
    projectDuration: "",
    experience: "",
  });

  // fifth screen
  const [rate, setRate] = useState({
    rateType: "hourly",
    from: "",
    to: "",
    amount: "",
  });
  // sixth screen
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");





  return (
    <JobContext.Provider
      value={{
        description,
        setDescription,
        title,
        setTitle,
        projectType,
        setProjectType,
        tags,
        setTags,
        rate,
        setRate,
        imageUrl,
        setImageUrl,
        projectInfo,
        setProjectInfo,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
