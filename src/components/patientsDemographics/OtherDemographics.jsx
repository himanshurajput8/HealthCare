import React from "react";
import { useFormContext } from "react-hook-form";

export const OtherDemographics = () => {
    const { register } = useFormContext()
    return (
        <div className="demographicsContainer">
            <h2>Other Demographics</h2>
            <div className="formGroup">
                <label htmlFor="occupation">Occupation: </label> <input id="occupation" {...register("occupation")} />
                <label htmlFor="location">Work Location: </label><input id="location" {...register("workLocation")} />
                <label htmlFor="residence">Residence: </label><input id="residence" {...register("residence")} />
            </div>
        </div>
    )
}