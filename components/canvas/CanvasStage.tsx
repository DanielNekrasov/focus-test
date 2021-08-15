import {Stage, Layer} from 'react-konva'

import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import FontFaceObserver from 'fontfaceobserver'
import {FontContext} from './FontContext'

const PADDING = 20

function useWindowWidth(node: HTMLElement) {
  const [[width, height], setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateWidth() {
      setSize([
        node?.getBoundingClientRect().width,
        node?.getBoundingClientRect().height,
      ])
    }
    window.addEventListener('resize', updateWidth)
    updateWidth()
    return () => window.removeEventListener('resize', updateWidth)
  }, [node])
  return [width, height]
}

const fontObserver = new FontFaceObserver('Inter')

const CanvasStage: React.FC = ({children}) => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const [width, height] = useWindowWidth(containerRef.current)
  const [font, setFont] = useState('Arial')

  useEffect(() => {
    fontObserver.load().then(() => {
      setFont('Inter')
    })
  }, [])

  return (
    <div ref={containerRef} style={{width: '100%', height: '100%'}}>
      <Stage width={width} height={height}>
        <FontContext.Provider value={font}>
          <Layer x={PADDING} y={PADDING}>
            {children}
          </Layer>
        </FontContext.Provider>
      </Stage>
    </div>
  )
}

export default CanvasStage
