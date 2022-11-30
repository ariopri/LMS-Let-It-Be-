import { Avatar, Button, Grid, Paper, TextField } from "@mui/material"
import { Container } from "@mui/system"

const Login = () => {

    return (
        <div>
            <Container style={{ width: "500px" }}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    paddingTop="7rem"
                    style={{ minHeight: '100vh' }}
                >
                    <Paper elevation={2} sx={{ padding: 5 }}>
                        <form>
                            <Grid container direction="column" spacing={2}>
                                <Avatar
                                    style={{
                                        marginTop: "-25px",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "red",
                                        width: "100px",
                                        height: "100px",
                                    }}
                                    src="/broken-image.jpg" />
                                <h2
                                    style={{
                                        marginTop: "-20px",
                                        paddingBottom: "15px",
                                        textAlign: "center",
                                    }}
                                >Login</h2>
                                <Grid item
                                    style={{
                                        paddingBottom: "17px",
                                    }}
                                >
                                    <TextField
                                        type="email"
                                        fullWidth
                                        label="Enter your email"
                                        variant="standard"
                                        required
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        label="Enter your password"
                                        variant="standard"
                                        required
                                    />
                                </Grid>
                                <Grid item>
                                    <Button type="submit" fullWidth variant="contained">
                                        Login
                                    </Button>
                                </Grid>
                                <p style={{
                                    textAlign: "center",
                                }}> <br /> --- Or Sign In With ---</p>
                                <div className="social-icon">
                                    <Button type="button">
                                        <i className="fa fa-google">
                                            <span>Google</span>
                                        </i>
                                    </Button>
                                    <Button type="button">
                                        <i className="fa fa-facebook">
                                            <span>Facebook</span>
                                        </i>
                                    </Button>
                                </div>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}

export default Login