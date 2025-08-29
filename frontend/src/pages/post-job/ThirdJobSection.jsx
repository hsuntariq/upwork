import React, { useContext, useEffect, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import { TextField } from "@mui/material";
import JobFooter from "../../components/client/JobFooter";
import { BsExclamationCircle } from "react-icons/bs";
import { skills } from "../../data/skillsData";
import { FaStarAndCrescent } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { JobContext } from "../../context/JobContext";

const UPWORK_GREEN = "#14a800";
const MAX_SKILLS = 10;

const ThirdJobSection = () => {
  const { tags, setTags } = useContext(JobContext);

  const [skillInput, setSkillInput] = useState("");
  const [list, setList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [errors, setErrors] = useState({
    required: false,
    minLenght: false,
  });

  // Prefill from tags (if context already has some)
  useEffect(() => {
    if (Array.isArray(tags) && tags.length && selectedSkills.length === 0) {
      setSelectedSkills(tags);
    }
  }, [tags]); // run once when tags arrive

  // Filter suggestions when the input changes
  useEffect(() => {
    const q = (skillInput || "").toLowerCase().trim();
    const filtered = q
      ? skills.filter((item) => item.name.toLowerCase().includes(q))
      : skills.slice(0, 20);
    setList(filtered);
  }, [skillInput]);

  const handleChange = (e) => {
    setSkillInput(e.target.value);
  };

  const isDuplicate = (val) =>
    selectedSkills.some(
      (s) =>
        s.id === val.id ||
        (s.name && val.name && s.name.toLowerCase() === val.name.toLowerCase())
    );

  const handleSelectedSkills = (value) => {
    setSkillInput("");
    if (selectedSkills.length >= MAX_SKILLS) {
      toast.error(`Maximum of ${MAX_SKILLS} skills allowed`);
      return;
    }
    if (isDuplicate(value)) return;

    const next = [
      ...selectedSkills,
      {
        id: value.id ?? Date.now(),
        name: value.name,
        category: value.category ?? "Other",
      },
    ];
    setSelectedSkills(next);
    setTags(next); // keep tags in sync with selected
  };

  const removeSkill = (id) => {
    const next = selectedSkills.filter((item) => item.id !== id);
    setSelectedSkills(next);
    setTags(next); // sync tags
  };

  const highlight = (text, query) => {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "ig"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-lime-100 rounded px-0.5">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const popularWhenEmpty = skills.slice(0, 8);
  const selectionCount = selectedSkills.length;
  const canAddMore = selectionCount < MAX_SKILLS;

  console.log(tags);

  return (
    <>
      <ClientNav />

      <div className="w-full">
        {/* Header / Progress */}
        <div className="w-full bg-white/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">2/5</span> · Job post
              </p>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
                  What are the main skills required for your work?
                </h2>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Add the specific skills a freelancer needs to succeed. Clear,
                  focused skills help your post reach the right talent.
                </p>

                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <FaStarAndCrescent className="text-gray-500" />
                  <span className="text-sm">
                    For best results, add 3–5 skills.
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-gray-600">
                  <BsExclamationCircle className="text-gray-500" />
                  <span className="text-sm">
                    {selectionCount}/{MAX_SKILLS} selected
                  </span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                {/* Input */}
                <div>
                  <label
                    htmlFor="skills-input"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Search or add up to {MAX_SKILLS} skills
                  </label>

                  <TextField
                    id="skills-input"
                    value={skillInput}
                    onChange={handleChange}
                    placeholder="e.g. React, API Integration"
                    fullWidth
                    label="Skills"
                    sx={{
                      "& label.Mui-focused": { color: UPWORK_GREEN },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#d1d5db" },
                        "&:hover fieldset": { borderColor: "#9ca3af" },
                        "&.Mui-focused fieldset": { borderColor: UPWORK_GREEN },
                      },
                    }}
                  />
                </div>

                {/* Dropdown (show only when typing) */}
                {skillInput.length > 0 && (
                  <ul
                    role="listbox"
                    aria-label="Skill suggestions"
                    className="mt-2 max-h-80 overflow-y-auto border border-gray-200 shadow-lg rounded-xl p-1 bg-white focus:outline-none"
                  >
                    {list.length > 0 ? (
                      list.map((item, idx) => (
                        <li
                          key={item.id ?? `${item.name}-${idx}`}
                          role="option"
                          onClick={() => handleSelectedSkills(item)}
                          className="flex items-center justify-between cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                        >
                          <span className="font-medium">
                            {highlight(item.name, skillInput)}
                          </span>
                          {item.category && (
                            <span className="ml-3 text-xs text-gray-500">
                              {item.category}
                            </span>
                          )}
                        </li>
                      ))
                    ) : (
                      <li
                        role="option"
                        onClick={() =>
                          handleSelectedSkills({
                            name: skillInput.trim(),
                            category: "Custom",
                          })
                        }
                        className="cursor-pointer rounded-lg px-3 py-2 text-sm bg-lime-50 ring-1 ring-lime-200"
                      >
                        Add “
                        <span className="font-semibold">
                          {skillInput.trim()}
                        </span>
                        ”
                      </li>
                    )}
                  </ul>
                )}

                {/* Popular skills (when empty) */}
                {skillInput.length === 0 && selectedSkills.length === 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Popular skills</p>
                    <div className="flex flex-wrap gap-2">
                      {popularWhenEmpty.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => handleSelectedSkills(s)}
                          className="rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 text-sm font-medium"
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selected chips */}
                {selectedSkills.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-base font-semibold text-gray-800">
                      Selected skills
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {selectedSkills.map((item) => (
                        <li
                          key={item.id}
                          className="group flex items-center gap-2 rounded-full border-2 border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold hover:border-lime-500 hover:bg-lime-50 transition"
                        >
                          <span>{item.name}</span>
                          <button
                            type="button"
                            aria-label={`Remove ${item.name}`}
                            onClick={() => removeSkill(item.id)}
                            className="p-0.5 rounded-full hover:bg-white hover:shadow"
                            title="Remove"
                          >
                            <IoClose className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Helper / limit note */}
                {!canAddMore && (
                  <div
                    className="mt-4 text-sm text-red-600 flex items-center gap-2"
                    role="alert"
                    aria-live="polite"
                  >
                    <BsExclamationCircle /> You’ve reached the limit of{" "}
                    {MAX_SKILLS} skills.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer (responsive width) */}
        <div className="">
          <JobFooter
            width="md:w-2/5 w-full"
            content={"Next: Scope"}
            disabled={selectedSkills.length < 1}
            link={"/fourth-job-section"}
          />
        </div>
      </div>
    </>
  );
};

export default ThirdJobSection;
