import React from 'react'
import { DialogTitle, Grid, Button, Box, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { ArrowBackIos, Close } from '@mui/icons-material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useExperienceStore from 'hooks/store/use-experience-store'

const VideoLinkScreen = ({ submit, onClose, setMethod }) => {
  const { updateStatus } = useExperienceStore()

  const handleSubmit = ({ url }) => {
    submit(url)
  }

  const validationSchema = yup.object({
    url: yup
      .string('Enter a link')
      .url(`Must be a valid URL. Include http:// or https://`),
  })

  const formik = useFormik({
    initialValues: {
      url: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  return (
    <>
      <DialogTitle>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box>Add a Video</Box>
          <Box>
            <Button
              endIcon={<Close />}
              onClick={onClose}
              variant="secondary"
              size="small"
            >
              Close
            </Button>
          </Box>
        </Box>
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" flexWrap="wrap" width="100%" pr={2} pl={2}>
          <Box
            width="100%"
            minHeight="100px"
            display="flex"
            justifyContent="center"
          >
            <Grid container>
              <Grid item xs={12} textAlign="center">
                <TextField
                  variant="outlined"
                  fullWidth
                  name="url"
                  label="Link"
                  placeholder="Enter Password"
                  {...formik.getFieldProps('url')}
                  autoComplete="off"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              {/* <Grid item xs={6} textAlign="center">
                <LoadingButton fullWidth>Save</LoadingButton>
              </Grid> */}
            </Grid>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignContent="center"
            pt={2}
            pb={2}
          >
            <Button
              color="secondary"
              startIcon={<ArrowBackIos />}
              onClick={() => setMethod(null)}
              variant="secondary"
            >
              Back
            </Button>
            <LoadingButton
              variant="contained"
              loading={updateStatus === 'loading'}
              type="submit"
            >
              Save
            </LoadingButton>
          </Box>
        </Box>
      </form>
    </>
  )
}

export default VideoLinkScreen
