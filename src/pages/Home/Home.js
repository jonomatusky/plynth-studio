import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'
import { Add } from '@mui/icons-material'

import useExperienceStore from 'hooks/store/use-experience-store'
import ExperienceItem from './components/ExperienceItem'
import LimitDialog from 'components/LimitDialog'
import useUserStore from 'hooks/store/use-user-store'

const Home = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const { user } = useUserStore()
  const navigate = useNavigate()
  const { experiences, createExperience } = useExperienceStore()
  const atLimit = experiences.length >= user.experienceLimit

  const handleCreateExperience = async () => {
    if (atLimit) {
      setDialogIsOpen(true)
    } else {
      const newExperience = await createExperience({
        name: 'My New Experience',
      })
      navigate(`/experiences/${newExperience.id}/edit`)
    }
  }

  return (
    <>
      <LimitDialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)} />
      <Container maxWidth="lg">
        <Box
          sx={{ display: { xs: 'none', sm: 'flex' } }}
          width="100%"
          flexWrap="wrap"
          padding={6}
        >
          <Box display="flex" flexWrap="wrap" width="256px" mr={4}>
            <Box
              height="256px"
              width="100%"
              borderRadius="6px"
              alignItems="center"
              justifyContent="center"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Button
                variant="outlined"
                // color="secondary"
                color="primary"
                sx={{
                  height: '256px',
                  width: '100%',
                  // backgroundColor: '#00000033',
                  // ':hover': {
                  //   backgroundColor: '#00000066',
                  // },
                }}
                size="large"
                // variant="contained"
                disableElevation
                onClick={handleCreateExperience}
              >
                <Box
                  display="flex"
                  flexWrap="wrap"
                  alignitems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Box width="100%" textAlign="center">
                    <Add sx={{ fontSize: 48 }} />
                  </Box>

                  <Typography sx={{ textTransform: 'none' }}>
                    <b>Create New Experience</b>
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
          {experiences.map(exp => {
            return <ExperienceItem exp={exp} key={exp.id} />
          })}
        </Box>
        <Box
          width="100%"
          flexWrap="wrap"
          padding={3}
          justifyContent="center"
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <Typography textAlign="center" pb={1}>
            Switch over to desktop to create a new experience.
          </Typography>

          {experiences.map(exp => {
            return <ExperienceItem exp={exp} key={exp.id} isMobile />
          })}
        </Box>
      </Container>
    </>
  )
}

export default Home
