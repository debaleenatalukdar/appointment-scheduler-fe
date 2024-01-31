import { useEffect, useState } from "react";
import { Autocomplete, Box, Button, Chip, Paper, TextField } from "@mui/material";
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
    const [ meetingStartTime, setMeetingStartTime ] = useState(dayjs());
    const [ meetingEndTime, setMeetingEndTime ] = useState(dayjs().add(1, "hour"));

    useEffect(() => {
        fetchUserData().then(userData => {
            const userDataWithoutLoggedInUser = userData.filter(
                data => data.email !== userAuth.userData.email
            )
            setUsers([ userAuth.userData, ...userDataWithoutLoggedInUser ])
        });
    }, [ userAuth ]);

    const handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData(event.target);

        try {
            const response = await fetch('http://localhost:5209/meetings/new', {
                method: 'POST',
                body: JSON.stringify({
                    'title': data.get('meeting-title'),
                    'description': data.get('meeting-agenda'),
                    'attendees': attendeeList,
                    'startDate': meetingStartTime.format('MM/DD/YYYY hh:mm:ss A'),
                    'endDate': meetingEndTime.format('MM/DD/YYYY hh:mm:ss A')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const response_data = await response.json();

            if(response_data.success) {
                console.log('Successful');
            }
            else {
                throw response_data.message;
            }
        }
        catch(exception) {
            console.log(exception);
        }
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
                        id="start-time"
                        defaultValue={ meetingStartTime }
                        sx={{ width: 1, mt: 2, mb: 1 }}
                        onChange={ value => setMeetingStartTime(value) }
                    />
                    <DateTimePicker
                        label="Meeting End Time"
                        id="end-time"
                        defaultValue={ meetingEndTime }
                        sx={{ width: 1, mt: 2, mb: 1 }}
                        onChange={ value => setMeetingEndTime(value) }
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
                    <Button
                        type="submit"
                        sx={{ mt: 2, mb: 1, p: 2 }}
                    >
                        Create Meeting
                    </Button>
                </Box>
            </LocalizationProvider>
        </Paper>
    );
}