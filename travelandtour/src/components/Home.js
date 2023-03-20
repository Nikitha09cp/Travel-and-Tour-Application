import React, {useState} from "react";
import styled from "styled-components";
import hero from '../assets/hero.png';


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
                <button>Plan your Trip</button>
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
            </form>
        </div>
    </Section>
  )
}

const Section = styled.section`

`