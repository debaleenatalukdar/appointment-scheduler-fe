import { ListItemButton, ListSubheader, ListItemIcon, ListItemText } from "@mui/material";
import { CalendarViewDay, CalendarViewMonth, CalendarViewWeek, MeetingRoom, Schedule } from "@mui/icons-material";
import { useDispatch } from "react-redux";

export function MainListItems({ selectedView }) {
    const dispatch = useDispatch();

    const handleClick = view => {
        dispatch({
            type: 'updateHomeView',
            body: view
        });
    }
    
    return(
        <>
            <ListSubheader component="div" inset>
                Calendar
            </ListSubheader>
            <ListItemButton selected={ selectedView === 'Day' ? true : false } onClick={ () => handleClick('Day') }>
                <ListItemIcon>
                    <CalendarViewDay />
                </ListItemIcon>
                <ListItemText primary="Day" />
            </ListItemButton>
            <ListItemButton selected={ selectedView === 'Week' ? true : false } onClick={ () => handleClick('Week') }>
                <ListItemIcon>
                    <CalendarViewWeek />
                </ListItemIcon>
                <ListItemText primary="Week" />
            </ListItemButton>
            <ListItemButton selected={ selectedView === 'Month' ? true : false } onClick={ () => handleClick('Month') }>
                <ListItemIcon>
                    <CalendarViewMonth />
                </ListItemIcon>
                <ListItemText primary="Month" />
            </ListItemButton>
            <ListItemButton selected={ selectedView === 'Year' ? true : false } onClick={ () => handleClick('Year') }>
                <ListItemIcon>
                    <MeetingRoom />
                </ListItemIcon>
                <ListItemText primary="Year" />
            </ListItemButton>
            <ListItemButton selected={ selectedView === 'Create' ? true : false } onClick={ () => handleClick('Create') }>
                <ListItemIcon>
                    <Schedule />
                </ListItemIcon>
                <ListItemText primary="Create" />
            </ListItemButton>
        </>
    );
}