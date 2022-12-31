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
            axios.post('https://comment-server.onrender.com/comments', rs).then((response) => {
                console.log(response);
                return this.comments= [response.data,...this.comments]
            });
        },
        getComments() {
            axios.get('https://comment-server.onrender.com/comments?_sort=id&_order=desc').then((rs) => {
                this.comments = rs.data;
            })
        }

    }

})