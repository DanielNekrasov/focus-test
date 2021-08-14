import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next'
import Head from 'next/head'

import RadioGroup from '../components/RadioGroup'

import eventsData from '../data/events.json'
import timezonesData from '../data/timezones.json'
import {useState} from 'react'
import {ListItem, ListSection} from '../shared/styles'

type Data = {
  events: {
    start: string
    end: string
    summary: string
  }[]
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
  const [selectedEvent, setSelectedEvent] = useState(0)
  const [selectedTimezone, setSelectedTimezone] = useState(0)

  return (
    <>
      <Head>
        <title>Focus Calendar Test</title>
      </Head>
      <main>
        <ListSection>
          <ListItem>
            <RadioGroup
              name={'timezone'}
              options={timezones.map((tz, index) => ({
                label: tz,
                value: index,
              }))}
              onChange={value => {
                setSelectedTimezone(value)
              }}
            />
          </ListItem>
          <ListItem>
            <RadioGroup
              name={'event'}
              options={events.map((event, index) => ({
                label: event.summary,
                value: index,
              }))}
              onChange={value => {
                setSelectedEvent(value)
              }}
            />
          </ListItem>
        </ListSection>
        <div>
          {selectedEvent}
          {selectedTimezone}
        </div>
      </main>
    </>
  )
}

export default Home
