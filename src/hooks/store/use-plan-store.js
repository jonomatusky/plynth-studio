import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { openPlans, closePlans } from 'redux/planSlice'

export const usePlanStore = () => {
  const dispatch = useDispatch()

  const _openPlans = useCallback(() => {
    dispatch(openPlans())
  }, [dispatch])

  const _closePlans = useCallback(() => {
    dispatch(closePlans())
  }, [dispatch])

  const { isOpen } = useSelector(state => state.plan)

  return {
    openPlans: _openPlans,
    closePlans: _closePlans,
    isOpen,
  }
}

export default usePlanStore
