import {css, Global} from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        font-size: 24px;
      }

      body {
        padding: 3rem 1rem;
      }

      * {
        box-sizing: border-box;
      }

      :root {
        --color-white: #ffffff;
        --color-gray: #4c4c56;
        --color-gray-light: #ececed;
      }
    `}
  />
)

export const srOnlyStyles = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
`

export const ControlPanel = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto;
`

export const EventsSection = styled.section`
  display: grid;
  gap: 40px;
`

export const CanvasFrame = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 500px;
  border: 2px solid #c4c4c4;
  overflow: auto;
`

export const Button = styled.button`
  display: inline-block;
  min-width: 120px;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  text-align: center;
  background-color: white;
  color: black;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 1px 8px 0 var(--color-gray-light);
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: normal;

  &:focus {
    outline: 1px solid black;
  }
`
