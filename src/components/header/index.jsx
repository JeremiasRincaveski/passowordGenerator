import styled from "styled-components";
import { AiFillCopy } from "react-icons/ai";

AiFillCopy
const StyledHeader = styled.header`
    width: 100%;
    color: #363540;

    p {
        font-weight: bolder;
        text-align: center;
    }
    
    div {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #24232A;
        margin: 1rem 0;

        input {
            border: none;
            background-color: transparent;
            width: 93%;
            font-weight: bolder;
            font-size: 1.3rem;
            color: #ADACB3;
        }

        input:focus {
            outline: none;
        }

        button {
            border: none;
            background-color: transparent;
            color: orange;
        }
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <p>Password Generator</p>
            <div>
                <input type="text" placeholder="P4$5WrD!" />
                <button><AiFillCopy size={20}/></button>
            </div>
        </StyledHeader>
    )
}