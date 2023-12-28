import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Typography } from "@mui/material";
import dayjs from "dayjs";

function AppointmentDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <PickersDay
            { ...other }
            outsideCurrentMonth={ outsideCurrentMonth }
            day={ day }
            selected={ isSelected ? true : false }
        />
    );
}

function CustomCalendarHeader(props) {
    const months = [ 
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]

    return (
        <Typography>
            { months[dayjs(props.referenceDate).month()] }
        </Typography>
    )
}

export function MonthView({ appointments, referenceDate }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                value={ referenceDate }
                slots={{
                    day: AppointmentDay,
                    calendarHeader: CustomCalendarHeader
                }}
                slotProps={{
                    day: {
                        highlightedDays: appointments
                    },
                    calendarHeader: {
                        referenceDate: referenceDate
                    }
                }}
            />
        </LocalizationProvider>
    );
}
