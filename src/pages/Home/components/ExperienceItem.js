import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Box, TextField, CardActionArea } from '@mui/material'

import useExperienceStore from 'hooks/store/use-experience-store'
import Image from 'components/Image'
import ItemName from './ItemName'
import { VideoCameraBack } from '@mui/icons-material'

const ExperienceItem = ({ exp }) => {
  const { updateExperience } = useExperienceStore()

  const [name, setName] = useState(exp.name || '')

  useEffect(() => {
    setName(exp.name)
  }, [exp.name])

  const updateName = async () => {
    console.log('submitting')
    try {
      await updateExperience({ id: exp.id, name: name })
    } catch (err) {
      console.log(err)
    }
  }

  const { thumbnailUrl } = (exp.objects || [])[0] || {}
  // const aspect =
  //   imageHeight / imageWidth === 1.5
  //     ? '2x3 (4"x6")'
  //     : imageWidth / imageHeight === 1.5
  //     ? '3x2 (6"x4")'
  //     : `${imageWidth}x${imageHeight}px`

  return (
    <Box
      // display="flex"
      // flexWrap="wrap"
      width="256px"
      height="300px"
      mr={4}
      // alignItems="flex-start"
    >
      <Card sx={{ width: '256px', height: '256px' }}>
        <CardActionArea
          sx={{ padding: '8px' }}
          component={Link}
          to={`/experiences/${exp.id}/edit`}
        >
          <Box
            height="240px"
            width="240px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              width="240px"
              height="240px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  style={{ maxHeight: '224px', maxWidth: '100%' }}
                />
              ) : (
                <VideoCameraBack
                  sx={{ fontSize: '128px', color: '#00000044' }}
                />
              )}
            </Box>
          </Box>
        </CardActionArea>
        {/* mobile view */}
        <CardActionArea
          sx={{ padding: '8px', display: { xs: 'flex', sm: 'none' } }}
          component={Link}
          to={'/' + exp.id}
          target="_blank"
        >
          <Box
            height="240px"
            width="240px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              width="240px"
              height="240px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  style={{ maxHeight: '224px', maxWidth: '100%' }}
                />
              ) : (
                <VideoCameraBack
                  sx={{ fontSize: '128px', color: '#00000044' }}
                />
              )}
            </Box>
          </Box>
        </CardActionArea>
      </Card>
      <ItemName
        text={name}
        // placeholder="Your Experience"
        type="input"
        submit={updateName}
      >
        <TextField
          variant="standard"
          type="text"
          name="task"
          fullWidth
          placeholder="Your Experience"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={() => updateName()}
          size="small"
          autoFocus={true}
        />
      </ItemName>
    </Box>
  )
}

export default ExperienceItem
