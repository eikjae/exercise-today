import { Chip } from '@mui/material';
import React from 'react';

const BaseChip = ({title, content}) => {
    return (
        <>
            <h2>{title}</h2>
            <Chip label={content} color="default" variant="outlined" size="medium" style={{marginBottom: "20px", backgroundColor: "white", fontSize: "20px"}}/>
        </>
    )
};

export default BaseChip;