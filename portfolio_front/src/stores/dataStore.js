import { defineStore } from 'pinia'
import axios from "axios";
import { toast } from 'bulma-toast'

export const useDatasStoreArr = defineStore({
    id: 'storeDatasArr',
    state: () => ({
        arr: [
        {
            "id": 1,
            "projects": [
                {
                    "id": 1,
                    "name": "Développez une application Web en utilisant Django.",
                    "slug": "developpez-une-application-web-en-utilisant-django",
                    "items_list": "item 1, item 2, item 3",
                    "description": "Projet d'étude Openclassrooms\r\nApplication permettant à une communauté d'utilisateurs de consulter, de publier ou de solliciter une critique de livres ou d'articles à la demande.\r\n\r\nInscription et connexion des utilisateurs.\r\nGestion des followers.\r\nGestion des commentaires des utilisateurs.\r\nUtilisation des gabarits de django.\r\nRespects des Wireframes fournis.\r\nInsertion d'images.\r\nFichiers static.",
                    "short_description": "",
                    "keywords_list": "Python - POO - TinyDB - Json - MVC - PEP 8",
                    "url_github_oc": "https://github.com/PhilippeOC/p13",
                    "url_github_portfolio": null,
                    "thumbnail": null,
                    "category": 1
                },
                {
                    "id": 2,
                    "name": "Mettez à l'échelle une application Django en utilisant une architecture modulaire.",
                    "slug": "mettez-a-lechelle-une-application-django-en-utilisant-une-architecture-modulaire",
                    "items_list": null,
                    "description": "Projet d'étude Openclassrooms\r\nRefactorisation, tests et déploiement d'une application pour la gestion de biens immobiliers\r\n\r\nRefactorisation de l'application django\r\nMise en place d'un pipeline CI/CD (Github, CircleCI, Heroku)\r\nCréation d'une image docker de l'application. Stockage sur DockerHub\r\nSurveillance par Sentry",
                    "short_description": "",
                    "keywords_list": "",
                    "url_github_oc": null,
                    "url_github_portfolio": null,
                    "thumbnail": null,
                    "category": 1
                }
            ],
            "name": "Django",
            "slug": "django",
            "web_project": true
        },
        {
            "id": 3,
            "projects": [
                {
                    "id": 3,
                    "name": "Améliorez une application Web Python par des tests et du débogage.",
                    "slug": "ameliorez-une-application-web-python-par-des-tests-et-du-debogage",
                    "items_list": null,
                    "description": "Projet d'étude Openclassrooms\r\nIl s'agit d'améliorer et tester une application qui permet à des secrétaires de clubs de réserver des places pour participer à des compétitions.\r\n\r\nRefactorisation et PEP 8.\r\nApproche TDD.\r\nCréation d'un dossier static et d'un fichier CSS.\r\nHéritage des templates.\r\nAffichage des messages Flask (Bootstrap)\r\nAjout des modifications demandées.\r\nAnalyse de la performance de l'application avec Locust.\r\nCe projet n'utilise pas de base de données. Un projet Flask gérant une base de données à été réalisé. ici",
                    "short_description": "",
                    "keywords_list": "",
                    "url_github_oc": null,
                    "url_github_portfolio": null,
                    "thumbnail": null,
                    "category": 3
                }
            ],
            "name": "Flask",
            "slug": "flask",
            "web_project": true
        },
        {
            "id": 2,
            "projects": [
                {
                    "id": 4,
                    "name": "Développez un programme logiciel en Python.",
                    "slug": "developpez-un-programme-logiciel-en-python",
                    "items_list": null,
                    "description": "Projet d'étude Openclassrooms\r\nProgramme de gestion de tournois d'échecs qui sert de support à la mise en œuvre de la POO (notamment les classes) et l'utilisation du pattern MVC.\r\n\r\nProgramme exécuté en lignes de commande depuis un terminal.",
                    "short_description": "",
                    "keywords_list": "Python - POO - TinyDB - Json - MVC - PEP 8",
                    "url_github_oc": null,
                    "url_github_portfolio": null,
                    "thumbnail": null,
                    "category": 2
                }
            ],
            "name": "Python",
            "slug": "python",
            "web_project": false
        }
        ],
    }),


    actions: {
        // async fetchHTTP(url) {
        //     try {
        //         // this.datasList.loading = true
        //         let datas = await axios.get(url)
        //         // this.datasList.loading = false
        //         console.log(datas)
        //         this.arr = datas.data
        //         console.log('action load', this.arr)
        //         // let msg = datas.data.length > 0 ? 'Liste des projets' : `Détail du projet : ${datas.data.name}`
        //         // this.successToats(msg)
        //     } catch (error) {
        //         // this.datasList.loading = true
        //         // this.datasList.errorMessage = error
        //         this.errorToats()
        //     }

        // },
        async fetchDatas() {
            try {
                const datas = await axios.get("http://127.0.0.1:8000/categories/")
                this.arr = datas.data
                console.log('arr', this.arr)
            } catch (error) {
                // this.fetchHTTP("https://jsonplaceholder.typicode.com/users")

                // this.fetchHTTP("http://127.0.0.1:8000/categories/")
                alert(error)
            }



        },
    },


        getters: {
            getAllCategories(state) {
                console.log('-----------------------------------')
                console.log('all cat', state.arr)
                return state.arr
            },
            getProject() {
                let projectsList = []
                this.getAllCategories.forEach(el => {
                    el.projects.forEach(p => projectsList.push(p))
                })
                // console.log('plist', projectsList.find(project => project.id === 1))
                return (projectId) => { return projectsList.find(project => project.id === projectId) }
            },
        }

    })
