import { defineStore } from 'pinia'
import axios from "axios";
import { toast } from 'bulma-toast'

export const useProjectsListStore = defineStore({
    id: 'projectsList',
    state: () => ({
        projectsList: {
            loading: false,
            projects: [],
            errorMessage: null
        },

    }),

    actions: {
        errorToats () {
            toast({
                message: "Une erreur s'est produite !",
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 3000,
                position: 'bottom-right',
            })
        
        },
        successToats (msg) {
            toast({
                message: msg,
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 3000,
                position: 'bottom-right',
            })
        
        },
        async fetchHTTP(url){
            try {
                this.projectsList.loading = true       
                let projects = await axios.get(url)
                this.projectsList.loading = false
                this.projectsList.projects = projects.data
                // console.log(projects.data.length)
                // console.log(projects.data)
                let msg = projects.data.length > 0 ? 'Liste des projets' : `Détail du projet : ${projects.data.name}`
                this.successToats(msg)
            } catch (error) {
                this.projectsList.loading = true
                this.projectsList.errorMessage = error
                this.errorToats() 
            }
        
        },
        fetchProjects() {
            console.log('fp')
            this.fetchHTTP("http://127.0.0.1:8000/categories/")
           
        },
        // fetchOneProject(idProject) {
        //     // console.log('fop')
        //     this.fetchHTTP(`http://127.0.0.1:8000/projects/${idProject.toString()}/`)
        // },


    },
    getters: {
        getProjects(state) {
            return state.projectsList.projects
        },
        getProjectById(state) {
            console.log('in getProjectById')
            let arr = state.projectsList.projects
            console.log('---', arr)
            let projects = []
            const allProjects=arr.forEach(el => {
                el.projects.forEach(p => projects.push(p))   
            })
            console.log('projects', projects)
            // return projects
            return (projectId) => {
                let see = projects.filter((project) => project.id === projectId)
                console.log('see', see)
                return projects.find((project) => project.id === projectId)}  
        },
       
        // getNoteContent: (state) => {
        //     return (id) => {
        //       return state.notes.filter(note => note.id === id)[0].content
        //     }
        //   },
    },

    

})

