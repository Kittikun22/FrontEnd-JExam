import React, {useState,useEffect} from "react";
import {
    Typography,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    Slide
} from "@mui/material";
import Axios from 'axios'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function ProfileAnalysisDialog({ openAnalysisDialog, setOpenAnalysisDialog, myExamList }) {

    const handleClose = () => {
        setOpenAnalysisDialog(false)
    }

    console.log(myExamList);

    return (
        <Dialog open={openAnalysisDialog} fullWidth={true} maxWidth={"md"} TransitionComponent={Transition}>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >

                <Typography variant="h5">วิเคราะห์คะแนน</Typography>

            </DialogContent>

            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{ borderRadius: 3, width: "125px" }}
                >
                    <Typography sx={{ fontSize: "1rem" }}>ปิด</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProfileAnalysisDialog;
