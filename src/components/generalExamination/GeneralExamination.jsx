import React, { useState, useEffect } from "react";
import './GeneralExamination.css'; 
import { useFormContext } from "react-hook-form";

export const GeneralExamination = () => {
    const { setValue } = useFormContext();

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [build, setBuild] = useState("");
    const [piccle, setPiccle] = useState([]);

    useEffect(() => {
        if (height && weight) {
            const heightInMeters = Number(height) / 100;
            const calculatedBmi = (Number(weight) / (heightInMeters ** 2)).toFixed(2);
            setBmi(calculatedBmi);
            setValue("generalExamination.bmi", calculatedBmi); // 👈 set in form
        } else {
            setBmi("");
            setValue("generalExamination.bmi", "");
        }
    }, [height, weight, setValue]);

    useEffect(() => {
        setValue("generalExamination.height", height);
    }, [height, setValue]);

    useEffect(() => {
        setValue("generalExamination.weight", weight);
    }, [weight, setValue]);

    useEffect(() => {
        setValue("generalExamination.build", build);
    }, [build, setValue]);

    useEffect(() => {
        setValue("generalExamination.piccle", piccle);
    }, [piccle, setValue]);

    const togglePiccle = (letter) => {
        setPiccle(prev =>
            prev.includes(letter) ? prev.filter(l => l !== letter) : [...prev, letter]
        );
    };

    const buildOptions = ["Thin", "Average", "Good"];
    const piccleOptions = ["P", "I", "C", "C", "L", "E"];

    return (
        <div className="general-exam-container">
            <h2>General Examination:</h2>

            <div className="input-row">
                <label>Height:<input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />cm</label>

                <label>Weight:<input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />kg</label>

                <label>BMI:<input type="text" value={bmi} readOnly /></label>
            </div>

            <div className="build-section">
                <label>Build: </label>
                <div className="build-section-input">
                    {buildOptions.map(option => (
                    <label key={option} className={`build-option ${build === option ? 'selected' : ''}`}>
                        <input type="radio" name="build" value={option} checked={build === option} onChange={(e) => setBuild(e.target.value)} />
                        {option}
                    </label>
                ))}
                </div>
            </div>

            <div className="piccle-section">
                <label>PICCLE: </label>
                <div className="piccle-section-input">

                {piccleOptions.map((letter, index) => (
                    <button key={index} type="button" onClick={() => togglePiccle(letter)}
                    className={`piccle-button ${piccle.includes(letter) ? 'selected' : ''}`}>
                        {letter}
                    </button>
                ))}
                </div>
            </div>
        </div>
    );
};
