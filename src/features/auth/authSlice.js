import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isError: false,
    user: { email: "", role: "" },
    error: ""
}


export const getUser = createAsyncThunk("auth/getUser", async (email) => {
    const res = await fetch(`https://elite-recruiting-server.vercel.app/user/${email}`)
    const data = await res.json()
    if (data.status) return data
    return email
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOutReducer: (state) => {
            state.user.email = ""
        },
        toggleLoading: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder

            /* Sign Up Thunk */
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            }).addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user.email = action.payload
            }).addCase(getUser.rejected, (state, { error }) => {
                state.user.email = ''
                state.isError = true
                state.isLoading = false
                state.error = error.message
            })

    }
})

export const { signOutReducer, toggleLoading} = authSlice.actions
export default authSlice.reducer