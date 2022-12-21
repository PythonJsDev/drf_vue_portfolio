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
                // let msg = datas.data.length > 0 ? 'Liste des projets' : `Détail du projet : ${datas.data.name}`
                // this.successToats(msg)
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
            // console.log('plist',projectsList)
            // return (projectId) => {console.log('id in get project',projectId)}
            return (projectId) => {return projectsList.filter(project => {return project.id === projectId})}
        },
        getProjectByCat(state){
            
            return (catName) => {
                return state.datasList.categories.filter(category => {return category.name === catName})}
        
        },
        // getDetailProject(state) {
        //     const activeProjects = state.datasList.categories.filter((project) => project.active)
        //     return (id) => {console.log('id', id, activeProjects)
        //     console.log('truc', activeProjects.filter(project => project.id === id))
        //         return activeProjects.find(project => project.id === id)};

        // },
        // getDetailProject(state) {
        //     console.log('in getter cat', this.getAllProjects)
        // },

        // getTest(state) {
        //     console.log('in getter', state.test)
        //     return state.test[0].content

        // },
        // return (userId) => state.users.find((user) => user.id === userId)
        // const activeUsers = state.users.filter((user) => user.active)
        // return (userId) => activeUsers.find((user) => user.id === userId)

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
