import React, { ReactNode } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  /** Yield element as children. */
  children?: ReactNode
  /** The format for parsed and displayed dates. */
  dateFormat?: string
  /** The format for parsed and displayed dates in internal yeardropdown. */
  dateFormatCalendar?: string
  /** Disable datepicker. */
  disabled?: boolean
  /** Change selection for internal year/month dropdowns. */
  dropdownMode: 'scroll' | 'select'
  /** The end date of the initially selected date range. */
  endDate?: Date
  /** Exclude dates within the specific date range. */
  excludeDates?: Date[]
  /** Include dates within the specific date range. */
  includeDates?: Date[]
  /** Visualize calendar as inline element. */
  inline?: boolean
  /** Set datepicker locale. */
  locale?: string
  /** The maximum selectable date. */
  maxDate?: Date
  /** The maximum selectable time. */
  maxTime?: Date
  /** The minimum selectable date. */
  minDate?: Date
  /** The minimum selectable time. */
  minTime?: Date
  /** Show more months. */
  monthsShown?: number
  /** Callback when date is changed. */
  onChange: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void
  /** Selected date value. */
  selected?: Date
  /** Selected date end. */
  selectsEnd?: boolean
  /** Selected date start. */
  selectsStart?: boolean
  /** Show dropdown list with all months. */
  showMonthDropdown?: boolean
  /** Enable time selection. */
  showTimeSelect?: boolean
  /** Show dropdown list with years. */
  showYearDropdown?: boolean
  /** Enable only time selection. */
  showTimeSelectOnly?: boolean
  /** The format for parsed and displayed time. */
  timeFormat?: string
  /** Configure timer intervals. */
  timeIntervals?: number
  /** Header over the time selector. */
  timeCaption?: string
  /** Enable and set text for today button. */
  todayButton?: string
  /** The beginning date of the initially selected date range. */
  startDate?: Date
  /** Visualize calendar as portal. */
  withPortal?: boolean
  /**
   * Defines the class of the datetimepicker.
   */
  className?: string
}

const DateTimePicker = (props: Props) => {
  const {
    children,
    dateFormat,
    dateFormatCalendar,
    disabled,
    dropdownMode,
    endDate,
    excludeDates,
    includeDates,
    inline,
    locale,
    maxDate,
    maxTime,
    minDate,
    minTime,
    monthsShown,
    onChange,
    selected,
    selectsEnd,
    selectsStart,
    showMonthDropdown,
    showTimeSelect,
    showYearDropdown,
    showTimeSelectOnly,
    timeFormat,
    timeIntervals,
    timeCaption,
    todayButton,
    startDate,
    withPortal,
    className,
  } = props

  return (
    <DatePicker
      dateFormat={dateFormat}
      dateFormatCalendar={dateFormatCalendar}
      disabled={disabled}
      dropdownMode={dropdownMode}
      endDate={endDate}
      excludeDates={excludeDates}
      includeDates={includeDates}
      inline={inline}
      locale={locale}
      maxDate={maxDate}
      maxTime={maxTime}
      minDate={minDate}
      minTime={minTime}
      monthsShown={monthsShown}
      onChange={onChange}
      selected={selected}
      selectsEnd={selectsEnd}
      selectsStart={selectsStart}
      showMonthDropdown={showMonthDropdown}
      showTimeSelect={showTimeSelect}
      showYearDropdown={showYearDropdown}
      showTimeSelectOnly={showTimeSelectOnly}
      timeFormat={timeFormat}
      timeIntervals={timeIntervals}
      timeCaption={timeCaption}
      todayButton={todayButton}
      startDate={startDate}
      withPortal={withPortal}
      className={className}
    >
      {children}
    </DatePicker>
  )
}

DateTimePicker.defaultProps = {
  dateFormat: 'MM/dd/yyyy',
  dateFormatCalendar: 'LLLL yyyy',
  dropdownMode: 'scroll',
  timeIntervals: 30,
  withPortal: false,
}

export { DateTimePicker }
