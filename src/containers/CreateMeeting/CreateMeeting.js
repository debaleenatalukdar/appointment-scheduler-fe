import { useEffect, useState } from "react";
import { Autocomplete, Box, Chip, Paper, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

async function fetchUserData() {
    const response = await fetch('http://localhost:5209/users/getallusers', {
        method: 'GET'
    });
    const response_data = await response.json();

    // If data successfully fetched, return it. Else, yet to be implemented.
    if(response_data.success) {
        return response_data.data;
    }
}

export function CreateMeeting() {
    const userAuth = useSelector(state => state.auth);
    const [ users, setUsers ] = useState([]);
    const [ attendeeList, setAttendeeList ] = useState([ userAuth.userData ]);

    useEffect(() => {
        fetchUserData().then(userData => {
            const userDataWithoutLoggedInUser = userData.filter(
                data => data.email !== userAuth.userData.email
            )
            setUsers([ userAuth.userData, ...userDataWithoutLoggedInUser ])
        });
    }, [ userAuth ]);

    const handleSubmit = event => {

    };

    return(
        <Paper
            elevation={ 2 }
            sx={{
                width: 1,
                pl: 4,
                pr: 4,
                pb: 4
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                    component="form"
                    onSubmit={ handleSubmit }
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="meeting-title"
                        label="Meeting Title"
                        name="meeting-title"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="meeting-agenda"
                        label="Meeting Agenda"
                        name="meeting-agenda"
                        multiline
                        rows={ 3 }
                    />
                    <DateTimePicker
                        label="Meeting Start Time"
                        defaultValue={ dayjs() }
                        sx={{ width: 1, mt: 2, mb: 1 }}
                    />
                    <DateTimePicker
                        label="Meeting End Time"
                        defaultValue={dayjs().add(1, "hour")}
                        sx={{ width: 1, mt: 2, mb: 1 }}
                    />
                    <Autocomplete
                        multiple
                        id="meeting-attendees"
                        value={ attendeeList }
                        onChange={ (event, newValue) => {
                            setAttendeeList([
                                userAuth.userData,
                                ...newValue.filter(user => user !== userAuth.userData),
                            ]);
                        }}
                        options={ users }
                        getOptionLabel={ option => option.email }
                        renderTags={ (tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                                <Chip
                                    label={ option.email }
                                    { ...getTagProps({ index }) }
                                    disabled={ option === userAuth.userData }
                                />
                            ))
                        }
                        sx={{ mt: 2 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Meeting Attendees" />
                        )}
                    />
                </Box>
            </LocalizationProvider>
        </Paper>
    );
}