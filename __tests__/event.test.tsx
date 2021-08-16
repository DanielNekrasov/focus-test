import React, {createRef} from 'react'
import {render, cleanup} from '@testing-library/react'
import {Stage, Layer} from 'react-konva'
import EventCard, {EventCardProps} from '../components/canvas/EventCard'
import Konva from 'konva'
import eventsMock from '../data/events.json'
import timezoneMock from '../data/timezones.json'

const pxPer30Mins = 39
const events = eventsMock.events
const timezones = timezoneMock.timezones

const expectedHeights = [4 * pxPer30Mins, 8 * pxPer30Mins, 8 * pxPer30Mins]

describe('Test Event Card', () => {
  let ref = createRef<Konva.Group>()

  const Canvas: React.FC<EventCardProps> = ({event, timezone}) => (
    <Stage>
      <Layer>
        <EventCard event={event} timezone={timezone} ref={ref} />
      </Layer>
    </Stage>
  )

  for (const eventIndex in events) {
    for (const tz of timezones) {
      it(`renders card with proper height for ${tz} timezone`, function () {
        render(<Canvas event={events[eventIndex]} timezone={tz} />)
        const card = ref.current!
        expect(card.height()).toEqual(expectedHeights[eventIndex])
      })
    }
  }
})
