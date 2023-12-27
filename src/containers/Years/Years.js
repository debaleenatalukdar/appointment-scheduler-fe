import dayjs from "dayjs";
import { MonthView } from "../../components/MonthView";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Container } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const monthNumbers = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]

export function Years() {
    const [ selectedYear, setSelectedYear ] = useState('2023');

    return(
        <Container>
            <Box sx={{ mb: 4 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        defaultValue={dayjs()}
                        views={['year']}
                        onChange={ value => setSelectedYear(dayjs(value).year().toString()) }
                    />
                </LocalizationProvider>
            </Box>
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