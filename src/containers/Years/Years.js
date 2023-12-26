import dayjs from "dayjs";
import { MonthView } from "../../components/MonthView";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const monthNumbers = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]

function CustomActionBar(props) {
    return <></>
}

export function Years() {
    const [ selectedYear, setSelectedYear ] = useState('2023');

    return(
        <Container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    views={['year']}
                    selectedSections={'year'}
                    onChange={ value => setSelectedYear(dayjs(value).year().toString()) }
                    slots={{
                        actionBar: CustomActionBar
                    }}
                />
            </LocalizationProvider>
            <Grid container spacing={2}>
                { monthNumbers.map(month => {
                    return(
                        <MonthView
                            key={month}
                            appointments={[ 2, 5, 15 ]}
                            referenceDate={ dayjs(`${selectedYear}-${month}-01`) }
                        />
                    )
                }) }
            </Grid>
        </Container>
    )
}