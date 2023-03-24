import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

export default function Services() {
  return (
    <Section>
        <div className='service1'>
            <img src={service1} alt="service1" />
            <h3>Choose Destination</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className='service2'>
            <img src={service2} alt="service2" />
            <h3>Explore the Place</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className='service3'>
            <img src={service3} alt="service3" />
            <h3>Start Your Journey</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className='service4'>
            <img src={service4} alt="service4" />
            <h3>Let's Enjoy</h3>
            <p>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
    </Section>
  )
}

const Section = styled.section`
margin: 8rem 4rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
.service1{
    background-color: var(--card-grey);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 1rem;
    text-align: center;
    h3{
        color: var(--primary-text);
    }
    p{
        color: var(--secondary-text);
    }
    img{
        height: 128px;
        width: 128px;
    }
}
.service2{
    background-color: var(--card-grey);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 1rem;
    text-align: center;
    h3{
        color: var(--primary-text);
    }
    p{
        color: var(--secondary-text);
    }
    img{
        height: 128px;
        width: 128px;
    }
}
.service3{
        background-color: var(--card-grey);
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        gap: 1rem;
        text-align: center;
        h3{
            color: var(--primary-text);
        }
        p{
            color: var(--secondary-text);
        }
        img{
            height: 128px;
            width: 128px;
        }
}
.service4{
        background-color: var(--card-grey);
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        gap: 1rem;
        h3{
            color: var(--primary-text);
        }
        p{
            color: var(--secondary-text);
        }
        img{
            height: 128px;
            width: 128px;
        }
}
}
`