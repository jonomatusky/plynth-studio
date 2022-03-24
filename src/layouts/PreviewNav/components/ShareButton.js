import React, { useEffect, useState } from 'react'
import {
  Grid,
  Button,
  Menu,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import {
  Download,
  FilterNone,
  IosShare,
  LocalShipping,
  Print,
} from '@mui/icons-material'
import copy from 'copy-to-clipboard'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import useAlertStore from 'hooks/store/use-alert-store'
import { useRequest } from 'hooks/use-request'
import useDialog from 'hooks/use-dialog'
import DownloadQR from 'components/DownloadQr'

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [isCopied])

  const handleCopy = () => {
    setIsCopied(true)
    copy(text)
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<FilterNone />}
      onClick={handleCopy}
      fullWidth
      disableElevation
    >
      {isCopied ? 'Copied!' : 'Copy Link'}
    </Button>
  )
}

const ShareButton = ({ experience }) => {
  const { id, experienceUrl, objects } = experience || {}
  const { posterUrl } = (objects || [])[0] || {}
  const { isOpen, handleOpen, handleClose } = useDialog()
  const { request } = useRequest()
  const [sendStatus, setSendStatus] = useState('idle')
  const { setError } = useAlertStore()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // const [product, setProduct] = useState(null)
  // const [quantity, setQuantity] = useState(null)

  const handleSubmit = async values => {
    setSendStatus('pending')
    values.id = id
    values.posterUrl = posterUrl

    try {
      await request({
        url: '/quotes',
        method: 'POST',
        data: values,
      })
      setSendStatus('success')
    } catch (err) {
      console.log(err)
      setSendStatus('idle')
      setError({
        message: 'Unable to request a quote. Please try again later.',
      })
    }
  }

  const validationSchema = Yup.object({
    label: Yup.string().max(32, 'Must be 32 characters or less'),
    url: Yup.string().url(`Must be a valid URL. Include http:// or https://`),
    message: Yup.string().max(250, 'Must be 250 characters or less'),
  })

  const formik = useFormik({
    initialValues: {
      product: '',
      quantity: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  })

  useEffect(() => {
    setSendStatus('idle')
  }, [isOpen])

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Order Prints</DialogTitle>
        {sendStatus === 'success' ? (
          <>
            <DialogContent>
              Your request has been sent. We'll contact you shortly!
            </DialogContent>
            <DialogActions>
              <LoadingButton
                variant="contained"
                onClick={handleClose}
                disableElevation
              >
                Close
              </LoadingButton>
            </DialogActions>
          </>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <DialogContent sx={{ pt: 0 }}>
              <Box pb={2}>
                Need help printing your design? Submit a request and we'll send
                you a quote:
              </Box>
              <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="product-label">Product</InputLabel>
                    <Select
                      labelId="product-label"
                      {...formik.getFieldProps('product')}
                      label="Product"
                      // onChange={event => setProduct(event.target.value)}
                    >
                      <MenuItem value={'Business Cards'}>
                        Business Cards
                      </MenuItem>
                      <MenuItem value={'Postcards'}>Postcards</MenuItem>
                      <MenuItem value={'Flyers'}>Flyers</MenuItem>
                      <MenuItem value={'Inserts'}>Inserts</MenuItem>
                      <MenuItem value={'Stickers'}>Stickers</MenuItem>
                      <MenuItem value={'Posters/Prints'}>
                        Posters/Prints
                      </MenuItem>
                      <MenuItem value={'Brochures'}>Brochures</MenuItem>
                      <MenuItem value={'Menus'}>Menus</MenuItem>
                      <MenuItem value={'Books'}>Books</MenuItem>
                      <MenuItem value={'Shirts'}>Shirts</MenuItem>
                      <MenuItem value={'Hats'}>Hats</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="quantity-label">Quantity</InputLabel>
                    <Select
                      labelId="quantity-label"
                      {...formik.getFieldProps('quantity')}
                      label="Quantity"
                    >
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                      <MenuItem value={500}>500</MenuItem>
                      <MenuItem value={1000}>1000</MenuItem>
                      <MenuItem value={2000}>2000+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="message"
                    label="Message (optional)"
                    placeholder="Add a message"
                    {...formik.getFieldProps('message')}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    autoComplete="off"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    multiline
                    rows={2}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                color="secondary"
                onClick={handleClose}
                variant="contained"
                type="button"
                disableElevation
              >
                Cancel
              </Button>
              <LoadingButton
                variant="contained"
                type="submit"
                disableElevation
                loading={sendStatus === 'pending'}
              >
                Submit
              </LoadingButton>
            </DialogActions>
          </form>
        )}
      </Dialog>
      {!!experience && (
        <>
          <Button
            endIcon={<IosShare />}
            variant="contained"
            disableElevation
            onClick={handleMenuOpen}
          >
            Share
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            transitionDuration={0}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
          >
            <Grid container p={2} spacing={2} maxWidth="400px">
              <Grid item xs={12}>
                <Typography variant="h6">Share this experience</Typography>
              </Grid>
              <Grid item xs={12}>
                <DownloadQR qrValue={experienceUrl} fileName={id}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    endIcon={<Download />}
                    disableElevation
                  >
                    Download QR Code
                  </Button>
                </DownloadQR>
              </Grid>
              <Grid item xs={12}>
                <CopyButton text={experienceUrl} />
              </Grid>
            </Grid>
            <Divider />
            <Grid container p={2} spacing={2} maxWidth="400px">
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  endIcon={<Print />}
                  href={posterUrl}
                  disableElevation
                >
                  Download Print Files
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  endIcon={<LocalShipping />}
                  disableElevation
                  onClick={handleOpen}
                >
                  Order Prints
                </Button>
              </Grid>
            </Grid>
          </Menu>
        </>
      )}
    </>
  )
}

export default ShareButton
