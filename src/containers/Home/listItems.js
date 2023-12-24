import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { CalendarViewDay, CalendarViewMonth, CalendarViewWeek, MeetingRoom, Schedule } from '@mui/icons-material';

export const mainListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Calendar
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <CalendarViewDay />
            </ListItemIcon>
            <ListItemText primary="Day" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarViewWeek />
            </ListItemIcon>
            <ListItemText primary="Week" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarViewMonth />
            </ListItemIcon>
            <ListItemText primary="Month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MeetingRoom />
            </ListItemIcon>
            <ListItemText primary="Year" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Schedule />
            </ListItemIcon>
            <ListItemText primary="Create" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader> */}
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Actions" />
        </ListItemButton>
    </React.Fragment>
);
