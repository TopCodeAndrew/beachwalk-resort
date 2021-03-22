import React from 'react'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles'
import { PrimaryBtn } from '../globals/Buttons'
import styled from 'styled-components'


const About = () => {
    return (
        <Section >
            <AboutCenter>
                <div className='about-img'>
                    <img src={aboutImg} alt='about-img' />
                </div>

                <Title title='about us' />
            </AboutCenter>
        </Section>
    )
}

const AboutCenter = styled.div`

`

export default About
