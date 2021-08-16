import {globalStyles} from '../shared/styles'
import type {AppProps} from 'next/app'
import {useEffect, useState} from 'react'
import FontFaceObserver from 'fontfaceobserver'
import {FontContext} from '../components/FontContext'

function MyApp({Component, pageProps}: AppProps) {
  const [font, setFont] = useState('Arial')

  useEffect(() => {
    const fontObserver = new FontFaceObserver('Inter')

    fontObserver.load().then(() => {
      setFont('Inter')
    })
  }, [])

  return (
    <>
      {globalStyles}
      <FontContext.Provider value={font}>
        <Component {...pageProps} />
      </FontContext.Provider>
    </>
  )
}
export default MyApp
