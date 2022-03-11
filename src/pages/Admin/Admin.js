import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'
import { Add } from '@mui/icons-material'

import useExperienceStore from 'hooks/store/use-experience-store'
import ExperienceItem from './components/ExperienceItem'

const Admin = () => {
  const navigate = useNavigate()
  const { experiences, createExperience } = useExperienceStore()

  const handleCreateExperience = async () => {
    const newExperience = await createExperience({
      name: 'My New Experience',
      style: { backgroundColor: '#fafafa', fontColor: '#222222' },
      isPublic: false,
      shareWithLink: true,
      cards: [
        {
          type: 'ar',
        },
      ],
    })
    navigate(`/experiences/${newExperience.id}/edit`)
  }

  return (
    <>
      <Box height="calc(100vh - 48px)" overflow="scroll">
        <Container disableGutters maxWidth={false}>
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
      </Box>
    </>
  )
}

export default Admin
