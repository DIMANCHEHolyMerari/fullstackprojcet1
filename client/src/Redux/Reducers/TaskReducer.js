import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getList = createAsyncThunk("Tasks/getList", async ()=>{
    return axios.get("http://localhost:9000/home")
    .then(res => {return res.data})
    .catch(err => console.log(err))
})

export const supprimer = createAsyncThunk("Supprimer/supprimer", async (titre)=>{
    return axios.delete(`http://localhost:9000/supprimer/${titre}`)
    .then(res => {return res.data})
    .catch(err => console.log(err))
})

export const ajouter = createAsyncThunk("Tasks/ajouter", async (titre)=>{
    console.log(titre)
    return axios.post("http://localhost:9000/ajouter", titre)
    .then(res => {return res.data})
    .catch(err => console.log(err))
} )

const CountSlice = createSlice({
    name: "Tasks",
    initialState:{
        Tasks:[],
        statut:"",
        erreur:""
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(getList.fulfilled, (state, action)=>{
            state.Tasks = action.payload
            state.statut = "Accepted"
        })
        .addCase(getList.rejected, (state, action)=>{
            state.statut = "rejected"
            state.erreur = action.payload
        })
        .addCase(getList.pending, (state)=>{
            state.statut = "pending"
        })


        .addCase(supprimer.fulfilled, (state, action)=>{
            state.Tasks = action.payload
            state.statut = "Accepted"
        })
        .addCase(supprimer.rejected, (state, action)=>{
            state.statut = "rejected"
            state.erreur = action.payload
        })
        .addCase(supprimer.pending, (state)=>{
            state.statut = "pending"
        })


        .addCase(ajouter.fulfilled, (state, action)=>{
            state.Tasks = action.payload
            state.statut = "Accepted"
        })
        .addCase(ajouter.rejected, (state, action)=>{
            state.statut = "rejected"
            state.erreur = action.payload})
        .addCase(ajouter.pending, (state)=>{
            state.statut = "pending"
        })
    }
})




export default CountSlice.reducer