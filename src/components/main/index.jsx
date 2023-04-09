import styled from "styled-components";
import { Checkbox } from "../checkbox";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../Context/Context";

const StyledMain = styled.main`
    padding: 1rem;
    background-color: #24232A;
    color: #ADACB3;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header span {
        color: orange;
        font-weight: 900;
    }

    input[type="range"] {
        width: 100%;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: content-box;
        background-color: #070607;
        padding: 0 1rem;
        margin: 1rem 0;
    }

    .footer ul {
        display: flex;
    }

    .footer ul li {
        list-style: none;
        border: 1px solid #ADACB3;
        height: 2rem;
        width: .8rem;
        margin-left: .2rem;
    }

    .gerarSenha{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        height: 4rem;
        border-radius: 0;
        border: 2px solid greenyellow;
        background-color: greenyellow;
        text-transform: uppercase;
            
        &:hover {
            cursor: pointer;
            background-color: transparent;
            color: greenyellow;
        }

        svg {
            margin-left: 1rem;
        }
    }

`

export const Main = () => {

    const { tamanho, setTamanho } = useContext(Context)

    return (
        <StyledMain>
            <div className="header">
                <p>Character Length</p>
                <p>{tamanho}</p>
            </div>
            <input onChange={evento => setTamanho(evento.target.value)} type="range" max={15}/>
            <Checkbox para={'UpperCase'} label={'Include UpperCase Letters'} />
            <Checkbox para={'LowerCase'} label={'Include LowerCase Letters'} />
            <Checkbox para={'Numbers'} label={'Include Numbers'} />
            <Checkbox para={'Symbols'} label={'Include Symbols'} />
            <div className="footer">
                <p>Strength</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <button className="gerarSenha"><p>generate</p> <AiOutlineArrowRight /></button>
        </StyledMain>
    )
}