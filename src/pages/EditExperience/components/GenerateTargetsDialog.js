import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {
  CircularProgress,
  Dialog,
  DialogContent,
  Box,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from '@mui/material'
import { loadImgAsync } from 'util/imageHandling'
import { useRequest } from 'hooks/use-request'
import { useAlertStore } from 'hooks/store/use-alert-store'
import useExperienceStore from 'hooks/store/use-experience-store'

const TargetSpinner = ({ setTargetError }) => {
  const { id } = useParams()

  const [percent, setPercent] = useState(0)

  const { request } = useRequest()

  const { setError } = useAlertStore()

  const { updateExperience, selectExperience } = useExperienceStore()
  const experience = selectExperience(id) || {}

  const { objects } = experience || {}
  const object = objects[0] || {}
  const { posterUrl: imageUrl } = object || {}

  let isMounted = useRef(true)

  useEffect(() => {
    let compiler

    if (imageUrl) {
      const getImageTargets = async () => {
        let img
        let src
        let signedUrl
        let filepath

        try {
          const response = await request({
            url: imageUrl,
            responseType: 'blob',
          })

          if (isMounted) {
            const blob = await response
            src = URL.createObjectURL(blob)
          }

          if (isMounted) {
            img = await loadImgAsync(src)
            URL.revokeObjectURL(src)
          }

          if (isMounted) {
            compiler = new window.MINDAR.IMAGE.Compiler()
            await compiler.compileImageTargets([img], progress => {
              return setPercent(progress.toFixed(0))
            })
          }

          if (isMounted) {
            const exportedBuffer = await compiler.exportData()
            var targetBlob = new Blob([exportedBuffer])
            var targetFile = new File([targetBlob], `${id}-targets.mind`)
          }

          if (isMounted) {
            let response = await request({
              url: '/uploads/sign-s3',
              method: 'POST',
              data: {
                fileName: `${id}-targets`,
                fileType: 'application/mind',
              },
            })

            signedUrl = response.signedUrl
            filepath = response.filepath
          }

          if (isMounted) {
            await request({
              url: signedUrl,
              method: 'PUT',
              data: targetFile,
              timeout: 100000,
            })
          }

          if (isMounted) {
            await updateExperience({ id, target: filepath })
          }
        } catch (err) {
          setTargetError(true)
          setError({
            message: 'Something went wrong. Please use a different image.',
          })
        }
      }

      getImageTargets()

      return () => {
        // clean up
        isMounted.current = false
        compiler = null
      }
    }
  }, [imageUrl, id, request, setError, updateExperience, setTargetError])

  return (
    <Box textAlign="center">
      <CircularProgress />
      <Typography>{percent}%</Typography>
    </Box>
  )
}

const GenerateTargetsDialog = ({ open, setTargetError }) => {
  const handleClose = () => setTargetError(true)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Generating Experience...</DialogTitle>
      <DialogContent>
        <Box>{open && <TargetSpinner setTargetError={setTargetError} />}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default GenerateTargetsDialog
