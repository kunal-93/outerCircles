import React from "react";
import Header from "components/Header";
import Cards from "components/Cards";
import MainCard from "components/MainCard";
import Grid from '@material-ui/core/Grid';

const Article = () => {
    return (
        <>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                     <h1>My Personal Blog.</h1>
                </Grid>
                <Grid item xs={9}>
                    <MainCard />
                </Grid>
                <Grid item xs={3}>
                    <Cards />
                </Grid>
            </Grid>
            
        </>
    )
}

export default Article;