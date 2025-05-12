import React, { useEffect } from "react";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import './Complaint.css'

export const Complaint = ({ data }) => {
    const { register, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "complaints",
    });

    const watchedDays = useWatch({
        control,
        name: "complaints",
    });

    // Add 3 default rows on first render
    useEffect(() => {
        if (fields.length === 0) {
            append({ name: "", days: "" });
            append({ name: "", days: "" });
            append({ name: "", days: "" });
        }
    }, [append, fields.length]);

    return (
        <div className="chiefComplaintContainer">
            <h2 className="chiefComplaintNote">Chief Complaint Note</h2>
            {/* Headings */}
            <div className="complaintHeader">
                <div><h2>Complaint</h2></div>
                <div className="since"><h2>Since</h2></div>
                <div><h2>No. of Days</h2></div>
                <div><h2>Action</h2></div>
            </div>

            {/* Fields */}
            {fields.map((field, index) => (
                <div key={field.id} className="complaintRow">
                    <div>
                        <input list="complaints" {...register(`complaints.${index}.name`)} />
                        <datalist id="complaints">
                            {data.map((item) => (
                                <option key={item} value={item} />
                            ))}
                        </datalist>
                    </div>

                    <div>
                        <span>x {watchedDays?.[index]?.days ? watchedDays[index].days : ''}</span>
                    </div>

                    <div className="noOfDays">
                        <input type="number" {...register(`complaints.${index}.days`)} /><span>days</span>
                    </div>

                    <div>
                        <button type="button" onClick={() => remove(index)} className="deleteButton">Delete</button>
                    </div>
                </div>
            ))}

            <button type="button" onClick={() => append({ name: "", days: "" })} className="addButton">Add</button>
        </div>
    );

};
