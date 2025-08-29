import { createContext, useState } from "react";


export const JobContext = createContext()


export const JobProvider = ({ children }) => {

    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({
        required: false,
        minLength: false,
    });

    const handleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);

        if (!newTitle.trim()) {
            setErrors({ required: true, minLength: false });
        } else if (newTitle.trim().length < 3) {
            setErrors({ required: false, minLength: true });
        } else {
            setErrors({ required: false, minLength: false });

        }
    };


    const [projectType, setProjectType] = useState("");
    const [open, setOpen] = useState(null);
    const [draftSearch, setDraftSearch] = useState("");
    const [jobSearch, setJobSearch] = useState("");


    const handleOpen = (id) => {
        setOpen(open === id ? null : id);
    };

    const handleProjectType = (type) => {
        setProjectType(type);
        toast.success(`Selected ${type} project!`, {
            duration: 3000,
            position: "top-right",
            style: {
                background: "#10B981",
                color: "#fff",
                fontWeight: "500",
            },
        });
    };

    const drafts = ["Draft #1", "Draft #2", "Draft #3"];
    const jobs = ["Job Post A", "Job Post B", "Job Post C"];

    const filteredDrafts = drafts.filter((draft) =>
        draft.toLowerCase().includes(draftSearch.toLowerCase())
    );
    const filteredJobs = jobs.filter((job) =>
        job.toLowerCase().includes(jobSearch.toLowerCase())
    );

    // third job screen
    const [skillInput, setSkillInput] = useState('')
    const [list, setList] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])


    // fourth job screen

    // State for project type (single selected ID instead of array)
    const [selectedTypeId, setSelectedTypeId] = useState(null);

    // State for duration
    const [duration, setDuration] = useState("");
    const [showDuration, setShowDuration] = useState(false);

    // State for experience level (single selected ID instead of array)
    const [selectedExperienceId, setSelectedExperienceId] = useState(null);

    const time = ["More than 6 months", "3 to 6 months", "1 to 3 months"];






    // Handle project type selection
    const handleSelectedType = (id) => {
        setSelectedTypeId(id);
        setShowDuration(true);
    };

    // Handle duration selection
    const handleDuration = (value) => {
        setDuration(value);
    };

    // Handle experience level selection
    const handleExperience = (id) => {
        setSelectedExperienceId(id);
    };

    // fifth screen
    const [rate, setRate] = useState("hourly");


    // sixth screen
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState("");


    return <JobContext.Provider value={{
        description,
        setDescription,
        title,
        setTitle,
        handleChange,
        errors,
        setErrors,
        projectType,
        setProjectType,
        open,
        setOpen,
        handleOpen,
        draftSearch,
        setDraftSearch,
        jobSearch,
        setJobSearch,
        handleProjectType,
        filteredDrafts,
        filteredJobs,
        skillInput, setSkillInput,
        setSelectedSkills,
        selectedSkills,
        list,
        setList,
        selectedTypeId,
        setSelectedExperienceId,
        setSelectedTypeId,
        duration, setDuration, showDuration, setShowDuration, selectedExperienceId, time, handleSelectedType, handleDuration, handleExperience, rate, setRate, imageUrl, setImageUrl

    }}>
        {children}
    </JobContext.Provider>
}

