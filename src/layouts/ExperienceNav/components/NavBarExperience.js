import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Button,
  TextField,
} from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'

import useExperienceStore from 'hooks/store/use-experience-store'
import ExperienceName from './ExperienceName'
import ShareButton from './ShareButton'

const NavBarAdmin = () => {
  const { id } = useParams()
  const { selectExperience, updateExperience } = useExperienceStore()
  const experience = selectExperience(id)

  const [name, setName] = useState(experience?.name || '')

  useEffect(() => {
    setName(experience?.name)
  }, [experience?.name])

  const handleUpdateName = () => {
    updateExperience({ id, name })
  }

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'background.paper', color: 'text.secondary' }}
      elevation={0}
    >
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          color="text.secondary"
        >
          <Box>
            <Button
              startIcon={<ArrowBackIos />}
              component={Link}
              to={'/'}
              color="inherit"
            >
              Home
            </Button>
          </Box>
          <Box display="flex">
            {!!experience && (
              <Box
                mr={1}
                textAlign="end"
                sx={{ diplay: { xs: 'none', sm: 'block' } }}
              >
                <ExperienceName
                  text={name}
                  // placeholder="Your Experience"
                  type="input"
                  submit={handleUpdateName}
                >
                  <TextField
                    variant="standard"
                    type="text"
                    name="task"
                    fullWidth
                    placeholder="Your Experience"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={handleUpdateName}
                    size="small"
                    autoFocus={true}
                    // sx={{
                    //   '& .MuiOutlinedInput-root': {
                    //     fontWeight: 900,
                    //   },
                    // }}
                    // InputProps={{
                    //   style: { width: `${inputWidth}px` },
                    // }}
                    inputProps={{
                      style: { textAlign: 'end' },
                    }}
                  />
                </ExperienceName>
              </Box>
            )}

            <Box>
              <ShareButton experience={experience} />
            </Box>
          </Box>
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default NavBarAdmin
