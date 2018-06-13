// React
import React from 'react'
import PropTypes from 'prop-types'

// Base Components
import {
  // Atoms
  Input,
  TextArea,

  // Icons
  FlightIcon,

  // Molecules
  DatePicker,

  // Mixins
  toCollapsible,
} from '@optune/react-base-components'

// Container
import Uploader from '../../../../containers/Attachments'

// utils
import getFields from '../../../utils/getFields'

const textAreaFields = [
  // Flight
  'inboundNotes',
  'outboundNotes',
]

const flightFields = [
  // Flight
  'inboundReservationCode',
  'inboundFlightNr',
  'inboundFlightDate',
  'inboundDepartureAirport',
  'inboundDepartureTime',
  'inboundArrivalAirport',
  'inboundArrivalTime',

  'outboundReservationCode',
  'outboundFlightNr',
  'outboundFlightDate',
  'outboundDepartureAirport',
  'outboundDepartureTime',
  'outboundArrivalAirport',
  'outboundArrivalTime',
].concat(textAreaFields)

const ItinenaryFlight = ({
  attachments,
  open,
  readonly,
  showFlightInbound,
  showFlightOutbound,
  summary,
  updateSummary,
}) => {
  const fields = getFields(flightFields, readonly)

  return (

      <div className="row push bottom large page-break">
        {/* Inbound Flight*/}
        {showFlightInbound && (
          <div className="column golden-13">
            <h2 className="push top medium inline no-print">Inbound</h2>
            <h2 className="push top medium inline print-only">
              Flight - Inbound
            </h2>
            <Input
              className="close fullwidth"
              label="Reservation Code"
              {...fields.inboundReservationCode}
            />
            <Input
              className="close fullwidth"
              label="Flight No"
              onBlurred={updateSummary}
              {...fields.inboundFlightNr}
            />
            <DatePicker
              label="Date"
              className="close size date"
              onDateSet={updateSummary}
              {...fields.inboundFlightDate}
            />
            <div className="field-group fullwidth">
              <Input
                className="close fullwidth"
                label="From (Airport)"
                onBlurred={updateSummary}
                {...fields.inboundDepartureAirport}
              />
              <Input
                className="close size time"
                type="time"
                label="Departure"
                {...fields.inboundDepartureTime}
              />
            </div>
            <div className="field-group fullwidth">
              <Input
                className="fullwidth"
                label="To (Airport)"
                onBlurred={updateSummary}
                {...fields.inboundArrivalAirport}
              />
              <Input
                className="size time"
                type="time"
                label="Arrival"
                {...fields.inboundArrivalTime}
              />
            </div>

            <TextArea
              className="fullwidth"
              label="Notes"
              {...fields.inboundNotes}
            />

            {(!readonly || attachments.length) && (
              <div className="push top small">
                <Uploader
                  {...attachments}
                  category="flightInbound"
                  label="Add Flight Ticket"
                />
              </div>
            )}
          </div>
        )}

        <div className="column golden-8 flex-center-middle tablet hide no-print">
          <h3 className="font-medium-bold flex-center-middle push top x-large">
            <FlightIcon className="big" />
          </h3>
        </div>

        {/* Outbound Flight*/}
        {showFlightOutbound && (
          <div className="column golden-13">
            <h2 className="push top medium inline no-print">Outbound</h2>
            <h2 className="push top medium inline print-only">
              Flight - Outbound
            </h2>
            <Input
              className="close fullwidth"
              label="Reservation Code"
              {...fields.outboundReservationCode}
            />
            <Input
              className="close fullwidth"
              label="Flight No"
              onBlurred={updateSummary}
              {...fields.outboundFlightNr}
            />
            <DatePicker
              label="Date"
              className="close size date"
              onDateSet={updateSummary}
              {...fields.outboundFlightDate}
            />
            <div className="field-group fullwidth">
              <Input
                className="close fullwidth"
                label="From (Airport)"
                onBlurred={updateSummary}
                {...fields.outboundDepartureAirport}
              />
              <Input
                className="close size time"
                type="time"
                label="Departure"
                {...fields.outboundDepartureTime}
              />
            </div>
            <div className="field-group fullwidth">
              <Input
                className="fullwidth"
                label="To (Airport)"
                onBlurred={updateSummary}
                {...fields.outboundArrivalAirport}
              />
              <Input
                className="size time"
                type="time"
                label="Arrival"
                {...fields.outboundArrivalTime}
              />
            </div>

            <TextArea
              className="fullwidth"
              label="Notes"
              {...fields.outboundNotes}
            />

            {(!readonly || attachments.length) && (
              <div className="push top small">
                <Uploader
                  {...attachments}
                  category="flightOutbound"
                  label="Add Flight Ticket"
                />
              </div>
            )}
          </div>
        )}
      </div>

  )
}

ItinenaryFlight.propTypes = {
  attachments: PropTypes.object,
  open: PropTypes.bool,
  readonly: PropTypes.bool,
  showFlightInbound: PropTypes.bool,
  showFlightOutbound: PropTypes.bool,
  summary: PropTypes.object,
  updateSummary: PropTypes.func,
}

export default toCollapsible(ItinenaryFlight)
