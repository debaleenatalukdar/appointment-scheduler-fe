import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useDispatch } from "react-redux";

export function SecondaryListItems({ selectedView }) {
    const dispatch = useDispatch();

    const handleClick = view => {
        dispatch({
            type: 'updateHomeView',
            body: view
        });
    }

    return(
        <>
            <ListItemButton selected={ selectedView === 'Users' ? true : false } onClick={ () => handleClick('Users') }>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton selected={ selectedView === 'Actions' ? true : false } onClick={ () => handleClick('Actions') }>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Actions" />
            </ListItemButton>
        </>
    )
}