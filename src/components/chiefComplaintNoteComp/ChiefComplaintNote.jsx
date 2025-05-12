import React from "react";
import { ChieftComplaintSuggestionData } from "./ComplaintDataSuggestion";
import { Complaint } from "./Complaint";

export const ChiefComplaint = () => {
    return (
        <>
            <Complaint data={ChieftComplaintSuggestionData} />
        </>
    )
}