import styled from "styled-components";

const StyledDiv = styled.div`
    margin: .5rem 0
`

export const Checkbox = ({ para, label }) => {
    return (
        <StyledDiv>
            <input type="checkbox" id={para} />
            <label htmlFor={para}>{label}</label>
        </StyledDiv>
    )
}