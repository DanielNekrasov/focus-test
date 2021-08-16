import {Stage, Layer} from 'react-konva'

import React, {useLayoutEffect, useRef, useState} from 'react'
import {FontContext} from '../FontContext'

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

const CanvasStage: React.FC = ({children}) => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const [width, height] = useWindowWidth(containerRef.current)

  return (
    <div ref={containerRef} style={{width: '100%', height: '100%'}}>
      <FontContext.Consumer>
        {font => (
          <Stage width={width} height={height}>
            <FontContext.Provider value={font}>
              <Layer x={PADDING} y={PADDING}>
                {children}
              </Layer>
            </FontContext.Provider>
          </Stage>
        )}
      </FontContext.Consumer>
    </div>
  )
}

export default CanvasStage
