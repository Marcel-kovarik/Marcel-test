import React from 'react'
import { useEvent } from '../../contexts/EventContext'
import { BiCalendar, BiChevronRight, BiMap } from "react-icons/bi";

import {
  Container,
  ContentWrapper,
  LeftWrapper,
  RightWrapper,
  Title,
  EventHost,
  ItemWrapper,
  TitleWrapper,
  IconWrapper,
  FirstLine,
  SecontLine,
  ArrowIconWrapp,
  DetailWrapper
} from './styles'

export const Event = () => {
  const [event] = useEvent()

  return (
    <Container>
      <ContentWrapper>
        <LeftWrapper>
          <TitleWrapper>
            <Title>
              {event.event_name}
            </Title>
            <EventHost>
              Hosted by {event.host_name}
            </EventHost>
          </TitleWrapper>

          <ItemWrapper>
            <DetailWrapper>
              <IconWrapper>
                <BiCalendar />
              </IconWrapper>
              <div>
                <FirstLine>
                  {event.start_time}
                </FirstLine>
                <SecontLine>
                  {event.end_time}
                </SecontLine>
              </div>
            </DetailWrapper>
            <ArrowIconWrapp>
              <BiChevronRight />
            </ArrowIconWrapp>
          </ItemWrapper>

          <ItemWrapper>
            <DetailWrapper>
              <IconWrapper>
                <BiMap />
              </IconWrapper>
              <div>
                <FirstLine>
                  Street Name
                </FirstLine>
                <SecontLine>
                  {event.location}
                </SecontLine>
              </div>
            </DetailWrapper>
            <ArrowIconWrapp>
              <BiChevronRight />
            </ArrowIconWrapp>
          </ItemWrapper>

        </LeftWrapper>
        <RightWrapper>
          <img src="/images/event-image.png" alt="" />
        </RightWrapper>
      </ContentWrapper>
    </Container>
  )
}