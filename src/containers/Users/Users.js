import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { ActionAreaCard } from "../../components/ActionAreaCard";

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

export function Users() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetchUserData().then(userData => setUsers(userData));
    }, []);

    return(
        <Grid container spacing={2}>
            { users.map(user => {
                return(
                    <Grid xs={6}>
                        <ActionAreaCard user={ user } />
                    </Grid>
                )
            }) }
        </Grid>
    )
}