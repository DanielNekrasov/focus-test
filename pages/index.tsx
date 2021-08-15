import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import React, {useState} from 'react'

import RadioGroup from '../components/RadioGroup'

import eventsData from '../data/events.json'
import timezonesData from '../data/timezones.json'
import {ControlPanel, EventsSection, CanvasFrame} from '../shared/styles'

const CanvasStage = dynamic(() => import('../components/canvas/CanvasStage'), {
  ssr: false,
})
const EventCard = dynamic(() => import('../components/canvas/EventCard'), {
  ssr: false,
})

type Event = {
  start: string
  end: string
  summary: string
}

type Data = {
  events: Event[]
  timezones: string[]
}

export const getServerSideProps: GetServerSideProps<Data> = async () => {
  return {
    props: {
      events: eventsData.events,
      timezones: timezonesData.timezones,
    },
  }
}

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: NextPage<HomeProps> = ({events, timezones}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event>()
  const [selectedTimezone, setSelectedTimezone] = useState<string>()

  return (
    <>
      <Head>
        <title>Focus Calendar Test</title>
      </Head>
      <main>
        <EventsSection>
          <ControlPanel>
            <div>
              <RadioGroup
                name={'timezone'}
                options={timezones.map((tz, index) => ({
                  label: tz,
                  value: index,
                }))}
                onChange={value => {
                  setSelectedTimezone(timezones[value])
                }}
              />
            </div>
            <div>
              <RadioGroup
                name={'event'}
                options={events.map((event, index) => ({
                  label: event.summary,
                  value: index,
                }))}
                onChange={value => {
                  setSelectedEvent(events[value])
                }}
              />
            </div>
          </ControlPanel>
          <CanvasFrame>
            <CanvasStage>
              {selectedEvent && selectedTimezone && (
                <EventCard event={selectedEvent} timezone={selectedTimezone} />
              )}
            </CanvasStage>
          </CanvasFrame>
        </EventsSection>
      </main>
    </>
  )
}

export default Home
