import {
  Avatar, Grid, Paper, TextField,
} from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="login">
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          paddingTop="7rem"
          style={{ minHeight: '100vh' }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid container direction="column" spacing={2}>
              <Avatar
                style={{
                  marginTop: '-25px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'red',
                  width: '100px',
                  height: '100px',
                }}
                src="/broken-image.jpg"
              />
              <h2
                style={{
                  marginTop: '-20px',
                  paddingBottom: '15px',
                  textAlign: 'center',
                }}
              >
                Register
              </h2>
              <Grid
                item
                style={{
                  paddingBottom: '17px',
                }}
              >
                <TextField
                  id="demo-helper-text-aligned"
                  label="nama depan"
                  variant="standard"
                />
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  variant="standard"
                  label="nama belakang"
                  style={{ marginLeft: '2px' }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="demo-helper-text-aligned"
                  label="Enter your email"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="demo-helper-text-aligned"
                  label="Enter your password"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="demo-helper-text-aligned"
                  label="Confirm your password"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <p style={{ textAlign: 'center' }}>
              {' '}
              <br />
              {' '}
              Already have an account?
              {' '}
              <Link to="/register" style={{ color: 'red' }}>
                Login
              </Link>
            </p>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
