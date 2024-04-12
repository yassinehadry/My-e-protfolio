import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const devskills = [
    'Site reliability engineering',
    'Software Development',
    'Cloud Computing',
    'Automation',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">My Story</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Coding has been a lifelong passion of mine, ever since I wrote my first 'Hello,
              World!' program at just 14 years old. I still remember the sense of wonder and
              accomplishment I felt when I saw those simple words appear on the screen - it was like
              unlocking the door to a whole new world of possibilities.
            </p>

            <p>
              My journey extends beyond just code, though. When I was still in high school, I
              co-founded an educational startup with two of my classmates. Our mission was to
              transform boring lessons into fun, engaging learning experiences. Throughout my
              university years, I built a freelance career in parallel with my studies. I helped
              small businesses establish strong online identities and navigate their digital
              transformation journeys. I was also deeply committed to giving back to my community -
              I served as the chairman of the IEEE ENSIAS Branch, and volunteered for organizations
              like Anoual Association, Injaz Al Maghrib, and Enactus.
            </p>

            <p>
              My professional experiences have been equally rewarding. I was a Software engineering
              intern at Orange and I had the opportunity to work with the SRE team for GraalVM at
              Oracle as an intern.
            </p>

            <p>
              I'm confident that I can bring this same level of enthusiasm, creativity, and
              technical expertise to an apprenticeship or early career role, where I can continue to
              grow and contribute to the next wave of technological advancements.
            </p>

            <p>I have a genuine interest in these fields :</p>
          </div>

          <ul className="skills-list">
            {devskills && devskills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br></br>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me2.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
