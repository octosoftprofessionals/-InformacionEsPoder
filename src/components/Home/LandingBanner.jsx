import React from 'react'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MicIcon from '@Assets/micIcon.svg'
import { colors, shadows } from '@Styles/Color'
import micIconico from '@Assets/micIconico.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(6),
  },
  boxTitles: { position: 'relative', minHeight: '50vh' },
  imageLeft: {
    backgroundImage: `url(${micIconico})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    paddingBottom: '31vw',
    width: '31vw',
    left: '-15.5%',
  },
  imageRight: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  icon: { fontSize: theme.typography.h3.fontSize },
  firstTitle: {
    fontFamily: theme.typography.fontFamily[1],
    fontWeight: 400,
    color: colors.ColumbiaBlue,
    fontSize: '11.4rem',
    lineHeight: '0.65',
  },
  secundTitle: {
    fontFamily: theme.typography.fontFamily[1],
    fontWeight: 400,
    color: colors.HotPink,
    lineHeight: '1.1',
    textShadow: `${shadows.textShadow1}, ${shadows.textShadow2}`,
  },
  description: {
    fontWeight: 500,
    color: colors.LightCyan,
    fontFamily: theme.typography.fontFamily[0],
  },
}))

const LandingBanner = ({ description, imageUrl }) => {
  const classes = useStyles({ imageUrl })
  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={12} md={5} container justify="center">
        <Hidden mdDown>
          <div className={classes.imageLeft} />
        </Hidden>
        <Grid item xs={11} md={9} container className={classes.boxTitles}>
          <Typography variant="h1" className={classes.firstTitle}>
            VOICES
            <Grid container alignItems="center">
              <Typography variant="h1" className={classes.secundTitle}>
                AFTER HOUR
              </Typography>
              <MicIcon className={classes.icon} />
            </Grid>
          </Typography>
          <Typography variant="h5" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.imageRight} />
    </Grid>
  )
}

export default LandingBanner
