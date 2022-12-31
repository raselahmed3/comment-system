import axios from "axios";
import { defineStore } from "pinia";

export const useCommentStore = defineStore('commentStore', {
    state: () => ({
        comments: []
    }),
    actions: {
        async getUser(){
            let user = await fetch('https://randomuser.me/api');

            let { results } = await user.json();
            return results;
        },
        addForm(rs) {
            console.log(rs);
            axios.post('http://localhost:5000/comments', rs).then((response) => {
                console.log(response);
                return this.comments= [response.data,...this.comments]
            });
        },
        getComments() {
            axios.get('http://localhost:5000/comments?_sort=id&_order=desc').then((rs) => {
                this.comments = rs.data;
            })
        }

    }

})