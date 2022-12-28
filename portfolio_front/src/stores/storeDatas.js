import { defineStore } from 'pinia'
import axios from "axios";
import { toast } from 'bulma-toast'

export const useDatasStore = defineStore({
    id: 'storeDatas',
    state: () => {
        return {
            datasList: {
                loading: false,
                categories: [],
                errorMessage: null
            },

        }

    },
    actions: {
        errorToats() {
            toast({
                message: "Une erreur s'est produite !",
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 3000,
                position: 'bottom-right',
            })

        },
        successToats(msg) {
            toast({
                message: msg,
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 3000,
                position: 'bottom-right',
            })

        },
        async fetchHTTP(url) {
            try {
                this.datasList.loading = true
                let datas = await axios.get(url)
                this.datasList.loading = false
                this.datasList.categories = datas.data
               
            } catch (error) {
                this.datasList.loading = true
                this.datasList.errorMessage = error
                this.errorToats()
            }

        },
        fetchDatas() {
            this.fetchHTTP("http://127.0.0.1:8000/categories/")
        },
    },
    getters: {
        getAllCategories(state) {
            return state.datasList.categories
        },
        getCategories(state) {
            return (value) => {
                let web_category = (value === 'web-projects') ? true : false;
                return state.datasList.categories.filter(w => w.web_project === web_category);
            }
        },
        getProjectById() {
            let projectsList = []
            this.getAllCategories.forEach(el => {
                el.projects.forEach(p => projectsList.push(p))
            })
            
            return (projectId) => {return projectsList.filter(project => {return project.id === projectId})}
        },
        getProjectByCat(state){
            
            return (catName) => {
                return state.datasList.categories.filter(category => {return category.name === catName})}
        
        },
        getLoading(state) {
            return state.datasList.loading
        },
        getAxiosError(state) {
            if (state.datasList.errorMessage) {
                return "Problème de connexion !"
            }
        },




    }

})
