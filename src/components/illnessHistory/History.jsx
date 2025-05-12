import React from "react";
import './History.css'
import { useFormContext } from "react-hook-form";

export const History = () => {
    const { register } = useFormContext();
    const historyFields = [
        { label: "History of Present Illness :", name: "presentIllnessHistory" },
        { label: "Past History :", name: "pastHistory" },
        { label: "Personal History :", name: "personalHistory" },
        { label: "Family History :", name: "familyHistory" },
        { label: "Treatment History :", name: "treatmentHistory" },
    ];

    return (
        <div className="historyContainer">
            {historyFields.map((field) => (
                <div key={field.name} className="history">
                    <div className="label"> <label htmlFor={field.name}>{field.label}</label ><br /></div>
                    <div className="textarea"> <textarea name={field.name} id={field.name}  {...register(field.name)}></textarea></div>
                </div>
            ))}
        </div>
    );
};
