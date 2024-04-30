"use client";
import { useState } from "react";
import styles from "../Contactpage.module.css"
import { Alert, Box, Button, TextField, TextareaAutosize, styled} from "@mui/material";

const ContactForm = () => {
    const defaultSubmission = {
        status: null,
        message: null,
    }

    const [submission, setSubmission] = useState(defaultSubmission);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData: { [key: string]: string } = {};
        const elements = e.currentTarget.elements as unknown as Array<
        HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
        >;

        Array.from(elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
        });

        await fetch('/contact/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        });
    }

    return (
        <div>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextField name="name" id="name-basic" color="primary" label="Name" variant="outlined" type="text" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextArea name="message" id="message" placeholder="Enter message here!" minRows={3} />
                </Box>
                <Button type="submit" variant="contained" color="primary">Submit contact</Button>
            </form>
        </div>
        
    );

}

export default ContactForm;

const StyledTextField = styled(TextField)`
    width: 100%;
    fieldset {
        border-color: ${({ theme }) => theme.palette.secondary.main};
        border-width: 4px;
    }    
`
const StyledTextArea = styled(TextareaAutosize)`
    background-color: white;
    border-color: #5A0084;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.palette.secondary.main};
    border-width: 4px;
    color: black;
    width: 100%;
    
`