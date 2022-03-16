import React, { useEffect, useState } from 'react'
import contentful from 'config/contentful'
import { Container, Grid, Typography } from '@material-ui/core'

import PublicNav from 'layouts/PublicNav'
import PricingPanel from 'components/PricingPanel'

const Pricing = () => {
  const [tiers, setTiers] = useState([])

  useEffect(() => {
    const getContent = async () => {
      try {
        const content = await contentful.getEntries({
          content_type: 'tiers',
          order: 'fields.order',
        })

        setTiers(content.items)
      } catch (err) {}
    }

    getContent()
  }, [])

  return (
    <Container>
      <PublicNav hideFooter>
        <Grid container justifyContent="center">
          <Grid item xs={10} container spacing={6} alignItems="stretch">
            <Grid item xs={12} mt={4}>
              <Typography variant="h4" color="white" sx={{ fontWeight: 900 }}>
                Choose a plan
              </Typography>
            </Grid>
            {tiers.map(tier => {
              return (
                <Grid item xs={12} sm key={tier.sys.id}>
                  <PricingPanel {...tier.fields} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </PublicNav>
    </Container>
  )
}

export default Pricing
