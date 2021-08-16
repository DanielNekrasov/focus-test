import React, {useContext} from 'react'
import {Text, Rect, Group} from 'react-konva'
import Konva from 'konva'
import {FontContext} from '../FontContext'
import {diffBetweenDatesInMinutes, parseTime} from '../../utils/date'

interface Event {
  start: string
  end: string
  summary: string
}

export interface EventCardProps {
  event: Event
  timezone: string
}

const WIDTH = 120
const PADDING = 5
const TIME_FONT_SIZE = 11
const EVENT_FONT_SIZE = 12
const LINE_HEIGHT = TIME_FONT_SIZE * 1.3
const TEXT_COLOR = '#39AE4C'
const CARD_COLOR = '#6CE37F'

const EventCard = React.forwardRef<Konva.Group, EventCardProps>(
  ({event, timezone}, ref) => {
    const fontFamily = useContext(FontContext)

    const startDate = parseTime(event.start, timezone)
    const endDate = parseTime(event.end, timezone)

    const diff = diffBetweenDatesInMinutes(
      new Date(event.start),
      new Date(event.end),
    )

    const cardHeight = (diff / 30) * 39

    return (
      <Group draggable={true} height={cardHeight} ref={ref}>
        <Rect
          width={WIDTH}
          height={cardHeight}
          opacity={0.4}
          fill={CARD_COLOR}
          cornerRadius={3}
        />
        <Rect
          height={cardHeight}
          width={2}
          fill={CARD_COLOR}
          cornerRadius={[3, 0, 0, 3]}
        />
        <Group
          width={WIDTH - PADDING}
          height={cardHeight - PADDING}
          x={PADDING}
          y={PADDING}
        >
          <Text
            text={`${startDate} - ${endDate}`}
            height={LINE_HEIGHT}
            fill={TEXT_COLOR}
            fontFamily={fontFamily}
            fontStyle={'normal'}
            fontSize={TIME_FONT_SIZE}
          />
          <Text
            text={event.summary}
            ellipsis={true}
            y={LINE_HEIGHT}
            height={LINE_HEIGHT}
            width={WIDTH - PADDING * 2}
            fill={TEXT_COLOR}
            fontFamily={fontFamily}
            fontStyle={'bold'}
            fontSize={EVENT_FONT_SIZE}
          />
        </Group>
      </Group>
    )
  },
)

EventCard.displayName = 'EventCard'

export default EventCard
