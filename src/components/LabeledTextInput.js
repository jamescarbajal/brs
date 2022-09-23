import { StyledLabel, StyledInput } from './StyledComponents';

export default function LabeledTextInput({ name, value, setValue, inputType }) {

    return (

    <>

            <StyledLabel htmlFor={name}>{name}</StyledLabel>
            
            <StyledInput
                name={name}
                type={inputType || 'text'}
                value={value}
                onChange={ (event) => setValue(event.target.value) }
            />

    </>

    );
};