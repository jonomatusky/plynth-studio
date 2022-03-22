import { useEffect } from 'react'

import { useUserStore } from './store/use-user-store'
import { useExperienceStore } from './store/use-experience-store'
import { useSession } from './use-session'
import useAlertStore from './store/use-alert-store'

export const useFetch = () => {
  const { user } = useSession()
  const { setError } = useAlertStore()

  const {
    fetchUser,
    fetchStatus: fetchUserStatus,
    user: storeUser,
    subscribe,
  } = useUserStore()
  const { fetchExperiences, fetchStatus: fetchExperiencesStatus } =
    useExperienceStore()

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchUser()
      } catch (err) {
        setError({ message: err.message })
      }
    }

    if (!!user && fetchUserStatus === 'idle') {
      fetch()
    }
  }, [user, fetchUser, fetchUserStatus, setError, subscribe])

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchExperiences()
      } catch (err) {
        setError({ message: err.message })
      }
    }
    if (
      !!user &&
      fetchUserStatus === 'succeeded' &&
      fetchExperiencesStatus === 'idle' &&
      !!storeUser._id
    ) {
      fetch()
    }
  }, [
    fetchUserStatus,
    fetchExperiencesStatus,
    fetchExperiences,
    storeUser,
    setError,
    user,
  ])

  return
}
