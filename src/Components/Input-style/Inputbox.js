import React from 'react';
import { Inputstyled , FormFeedbackstyled } from './Inputbox.style';

function Inputbox({children , error=false , errormsg='' , ...rest}) {
    return (
        <>
        <Inputstyled {...rest}>
            {children}
        </Inputstyled>
        <FormFeedbackstyled error={error}>
            {errormsg}
        </FormFeedbackstyled>
        </>
    );
}

export default Inputbox;