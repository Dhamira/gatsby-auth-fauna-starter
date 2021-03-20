import React from "react"
import { login, isAuthenticated, getProfile } from "utils/auth"
const Home = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()

  return <div>Private Route - {user.name}</div>
}

export default Home
