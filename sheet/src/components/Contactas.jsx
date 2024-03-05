import { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

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
      fetch(
       "https://script.google.com/macros/s/AKfycbzPncumcoIf5MEhRfVXUnf-S7OXI-_FQxp1N9MpwCliNGqKPPFV3n8jE7xzmpb-AXeydA/exec",
        {
          method: "POST",
          body: new FormData(e.target)
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSubmissionStatus('success');
        })
        .catch((error) => {
          console.log(error);
          setSubmissionStatus('error');
        });
    };
  
    return (
      <Container 
        maxWidth="md"
        style={{ 
          height: '100vh', // Full viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <Typography variant="h4">Contact Me form</Typography>
          <form onSubmit={handleSubmit}>
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
        </div>
      </Container>
    );
}
