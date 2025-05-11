import React from "react";
import { useState } from "react";
import { PatientProfile } from "../components/patientsDemographics/PatientProfiles";
import { FormProvider, useForm } from "react-hook-form";
import { ChiefComplaint } from "../components/chiefComplaintNote/ChiefComplaintNote";
import { History } from "../components/History/History";
import { GeneralExamination } from "../components/generalExamination/GeneralExamination";
import { Signtaure } from "../components/signature/Signature";
import Button from "../components/button/Button";


export const MainLayout = ()=> {
    const methods = useForm()
     const [formResetKey, setFormResetKey] = useState(0); 
    const onSubmit = (data) => {
    console.log("Form Data:", data);
     methods.reset();
     setFormResetKey(prev => prev + 1);
  };
  
    return(
        <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <PatientProfile key={`patient-${formResetKey}`}/><hr />
                <ChiefComplaint/><hr />
                <History/><hr />
                <GeneralExamination key={`general-${formResetKey}`} />
                <Signtaure/>
                <div className="submit-container">
                <Button type="submit" className="submit-btn">Submit</Button>
                </div>
          </form>            
        </FormProvider>
        </>
    )
}