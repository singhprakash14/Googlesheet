import { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';

export default function Contactas() {
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      PhoneNo: '',
      Message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(
        "https://script.google.com/macros/s/AKfycbz8q0WDG4WlwyH09BcZy7bHsgghZGIlPsz9NEbubs3uDjvSMLYpWOO27bZ0dB2AW0jp/exec",
        formData
      )
        .then((response) => {
          console.log(response.data);
          setSubmissionStatus('success');
        })
        .catch((error) => {
          console.error('Error submitting data:', error);
          setSubmissionStatus('error');
        });
    };
  
    return (
      
      <Container 
        maxWidth="md" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '50px', 
          marginBottom: '50px',
          color:"#646cffaa",
          height: '100vh', 
        }}
      >
        <Typography variant="h4">Contact Me form</Typography>
        <div  style={{ width: '100%', h:"100%", border:"1px solid red",display: 'flex',  
          alignItems: 'center', }}>
             <form onSubmit={handleSubmit} style={{ width: '100%', h:"100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Your Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Phone No"
                name="PhoneNo"
                value={formData.PhoneNo}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {submissionStatus === 'success' && (
          <Typography variant="body1" style={{ color: 'green' }}>
            Data submitted successfully!
          </Typography>
        )}
        {submissionStatus === 'error' && (
          <Typography variant="body1" style={{ color: 'red' }}>
            Error submitting data. Please try again later.
          </Typography>
        )}
        </div>
     
      </Container>
    );
}
