import { api } from "./api"

export const loginService = async (email: string, password: string) => {
  try {
    const res = await api.post("/auth/login", {email, password})
    return res.data
  } catch (error) {
    console.log(error)
  }
}
