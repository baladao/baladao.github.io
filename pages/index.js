import Head from 'next/head'
import styled from 'styled-components'

import { CardSection } from '../src/components/CardSection'
import { Link } from '../src/components/Link'

export default () => {
  return (
    <GlobalStyles>
      <Container>
        <Main>
          <Title>
            contact: <a href="mailto:gustavo@baladao.dev">gustavo@baladao.dev</a>
          </Title>

          <Grid>
            <CardSection link="https://arctouch.com">
              <h3>ArcTouch &rarr;</h3>
              <Code>
                Currently working on a project for <Link to="https://www.hp.com">HP</Link> using <Link to="https://single-spa.js.org">SSPA</Link>, <Link to="https://micro-frontends.org">MFEs</Link> and <Link to="https://reactjs.org">React</Link>.
              </Code>
            </CardSection>

            <CardSection link="https://www.yieldstreet.com">
              <h3>YieldStreet &rarr;</h3>
              <Code>
                As part of the Alternative Investments product the using <Link to="https://reactjs.org">React</Link> for Web and <Link to="https://reactnative.dev">React Native</Link> for Mobile.
              </Code>
            </CardSection>

            <CardSection link="https://www.globo.com">
              <h3>Globo.com &rarr;</h3>
              <Code>
                At <Link to="https://globoplay.com">globoplay</Link> developed the Web and Backend product using <Link to="https://reactjs.org">React</Link> and <Link to="https://www.apollographql.com">Apollo</Link> for Web and <Link to="https://nodejs.org">NodeJS</Link> and <Link to="https://www.apollographql.com">Apollo</Link> for the Backend.
              </Code>
            </CardSection>

            <CardSection link="https://www.adp.com">
              <h3>ADP Inc. &rarr;</h3>
              <Code>
                Worked at <Link to="https://expert.brasil.adp.com/instructions/instructions.html">Service Place</Link> using <Link to="https://reactjs.org">React</Link> for Web and <Link to="https://nodejs.org">NodeJS</Link> for the Backend.
              </Code>
            </CardSection>
          </Grid>
        </Main>
      </Container>
    </GlobalStyles>
  )
}

const GlobalStyles = styled.html`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;      
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;