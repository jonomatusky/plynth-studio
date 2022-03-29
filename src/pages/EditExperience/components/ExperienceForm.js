import React, { useState } from 'react'
import { Box, Grid, Switch, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import ButtonColorPicker from 'components/ButtonColorPicker'
import useExperienceStore from 'hooks/store/use-experience-store'

const ExperienceForm = ({ experience }) => {
  const { updateExperience } = useExperienceStore()
  const { id, links } = experience || {}
  const link = (links || [])[0]
  const { url, color, label } = link || {}

  const handleSubmit = updates => {
    updateExperience({ id, links: [{ ...link, ...updates }] })
  }

  const handleColorChange = color => {
    updateExperience({ id, links: [{ ...link, color }] })
  }

  const validationSchema = Yup.object({
    label: Yup.string().max(32, 'Must be 32 characters or less'),
    url: Yup.string().url(`Must be a valid URL. Include http:// or https://`),
  })

  const formik = useFormik({
    initialValues: {
      url: url || '',
      label: label || '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  })

  const [showLinksImmediately, setShowLinksImmediately] = useState(
    experience?.showLinksImmediately
  )

  const handleShowLinksImmediately = e => {
    const checked = e.target.checked

    setShowLinksImmediately(checked)
    updateExperience({ id, showLinksImmediately: checked })
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="flex-end" spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="url"
                label="URL"
                placeholder="Add a link to an external website"
                {...formik.getFieldProps('url')}
                error={formik.touched.url && Boolean(formik.errors.url)}
                helperText={formik.touched.url && formik.errors.url}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={formik.handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="label"
                label="Button Label"
                placeholder="Add a button label"
                {...formik.getFieldProps('label')}
                error={formik.touched.label && Boolean(formik.errors.label)}
                helperText={formik.touched.label && formik.errors.label}
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={formik.handleSubmit}
              />
            </Grid>
            <Box display="none">
              <button type="submit">Submit</button>
            </Box>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography>Button Color:</Typography>
          </Box>
          <Box>
            <ButtonColorPicker
              color={color || '#000'}
              onChange={handleColorChange}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex">
          <Box pt={1}>
            <Typography fontSize={14}>
              <b>Show Button Immediately</b>
            </Typography>
            <Typography fontSize={14}>
              Show the button as soon as the user loads the experience.
            </Typography>
          </Box>
          <Switch
            checked={showLinksImmediately}
            onChange={handleShowLinksImmediately}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ExperienceForm
