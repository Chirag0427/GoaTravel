import { Grid } from '@mui/material'
import React from 'react'
import North from './components/North'

const page = () => {
  return (
    <div>
      <Grid container md={12} sx={{ width: '100%' }}>
        <Grid item md={12} xs={12} sm={12}>
          <North />
        </Grid>
      </Grid>
    </div>
  )
}

export default page
