import React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { OtherDemographics } from "./OtherDemographics";
import './PatientProfiles.css'


export const PatientProfile = () => {
    const { register, watch, setValue } = useFormContext();
    const [age, setAge] = useState("");

    const dob = watch("dob");

    useEffect(() => {
        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let years = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                years--;
            }
            setAge(years);
            setValue("age", years); // Save to form state too
        }
    }, [dob, setValue]);

    return (
        <div className="demographics-container">
        <h2 className="section-heading">Patient Demographics</h2>
        <div className="form-container">
            <div>
                <h2>Patient Profile</h2>
                <div className="formGroup">
                    <label htmlFor="name">Name: </label><input id="name" {...register("name")} />
                    <label htmlFor="age">Age: </label><span><input id="age" value={age} readOnly /> <input type="date" {...register("dob")} /></span>
                </div>

                    <div className="form-group">
                        <div className="gender-group">
                            <label>Gender:</label>

                            <div className="options">
                            <label className="gender-option m">
                                <input type="radio" name="gender" value="M" {...register("gender")}/>
                                <div className="gender-label">M</div>
                            </label>
                            <label className="gender-option f">
                                <input type="radio" name="gender" value="F" {...register("gender")}/>
                                <div className="gender-label">F</div>
                            </label>
                            <label className="gender-option o">
                                <input type="radio" name="gender" value="O" {...register("gender")}/>
                                <div className="gender-label">O</div>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <OtherDemographics />
            </div>
            </div>
            )
}       