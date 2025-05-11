import React from "react";
import './signature.css'
import { useFormContext } from "react-hook-form";


export const Signtaure = () => {
        const { register } = useFormContext();
    
    return (
        <div>
            <div className="provisional-diagnosis">
                <label htmlFor="provisional-diagnosis">Provisional Diagnosis: </label>
                <input type="text" id="provisional-diagnosis" {...register("provisionalDiagnosis")} />
            </div>
            <div className="signature">
                <div>

                <label htmlFor="signature">Signature: </label><br />
                <input type="text" id="signature" {...register("signature")} />
                </div>
            </div>
        </div>
    )
}