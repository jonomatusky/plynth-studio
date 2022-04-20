import { useState, useEffect, useCallback } from 'react'
import firebase from 'config/firebase'
import posthog from 'posthog-js'
import useUserStore from 'hooks/store/use-user-store'
import useExperienceStore from 'hooks/store/use-experience-store'

export const useAuth = () => {
  const { clearUser } = useUserStore()
  const { clearExperiences } = useExperienceStore()

  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser
    return {
      initializing: !user,
      user,
    }
  })

  const logout = useCallback(async () => {
    try {
      await firebase.auth().signOut()
      clearUser()
      clearExperiences()
      posthog.reset()
    } catch (err) {}
  }, [clearUser, clearExperiences])

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setState({ initializing: false, user })
      if (!!user && user.email) {
        posthog.identify(user.uid, {
          email: user.email,
          // displayName: user.displayName,
        })
      }
    })

    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return { ...state, logout }
}
