import React, {useState} from "react";
import styled from "styled-components";
import hero from '../assets/hero.png';
import Button from "./Button";


export default function Home() {
    const [priceValue, setPriceValue] = useState('$5,000 - $10,000');
  return (
    <Section>
        <div className="background">
            <img src={hero} alt="hero" />
        </div>
        <div className="content">
            <div className="info">
                <h1>It's Time To</h1>
                <h1>Explore the world</h1>
                <Button text = "Plan your Trip" />
            </div>
        </div>
        <div className="planner">
            <form>
                <div className="row">
                    <label>Destinations</label>
                    <select>
                        <option>Arab Egypt</option>
                        <option>Udaipur India</option>
                    </select>
                </div>
                <div className="row">
                    <label>Check In</label> 
                    <input type="date" />
                </div>
                <div className="row">
                    <label>Price Range </label>
                    <input type="text" value={priceValue} onChange={(event) => setPriceValue(event.target.value)} />
                </div>
                <div className="row">
                    <Button text= "Discover More"/>
                </div>
            </form>
        </div>
    </Section>
  )
}

const Section = styled.section`
margin-top: 2rem;
position: relative;
.background{
    img{
        height: 90vh;
        width: 100%;
    }
}
.content{
    .info{
        position: absolute;
        top: 5rem;
        margin-left: 8rem;
        h1{
            font-size: 5rem;
            margin-bottom: 2rem;
        }
    }
}
.planner{
    position: absolute;
    bottom: -2rem;
    right: 0;
    background-color: white;
    padding: 2rem;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    .row{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: start;
    label{
        font-size: 0.7rem;
        color: var(--secondary-text);
    }
    input,
    select {
        border: none;
        color: var(--primary-color);
        margin-top: 0.5rem;
        margin-top: 0.5rem;
        background-color: white;
        border-bottom: 1px solid #f5ebe9;
        padding-bottom: 0.3rem;
    }
    input: focus{
        outline: none
    }
    input[type="date"]::-webkit-calendar-picker-indicator{
        cursor: pointer;
        filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg) brightness(105%) contrast(101%);

    }
    }
    }
}
`