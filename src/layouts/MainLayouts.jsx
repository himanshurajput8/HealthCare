import React from "react";
import { useState } from "react";
import { PatientProfile } from "../components/patientsDemographics/PatientProfiles";
import { FormProvider, useForm } from "react-hook-form";
import { ChiefComplaint } from "../components/chiefComplaintNoteComp/ChiefComplaintNote";
import { GeneralExamination } from "../components/generalExaminationComp/GeneralExamination";
import { Signtaure } from "../components/signatureComp/Signature";
import Button from "../components/buttonComp/Button";
import { History } from "../components/illnessHistory/History";

export const MainLayout = () => {
    const methods = useForm()
    const [formResetKey, setFormResetKey] = useState(0);
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        methods.reset();
        setFormResetKey(prev => prev + 1);
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <PatientProfile key={`patient-${formResetKey}`} /><hr />
                    <ChiefComplaint /><hr />
                    <History /><hr />
                    <GeneralExamination key={`general-${formResetKey}`} /><hr />
                    <Signtaure />
                    <Button type="submit" className="submit-btn">Submit</Button>
                </form>
            </FormProvider>
        </>
    )
}