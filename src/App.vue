<template>
<!-- comment form -->
<div class="flex mx-auto items-center justify-center shadow-lg mt-6 mb-4 max-w-lg">
  <form @submit.prevent="getusers" class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
    <div class="flex flex-wrap -mx-3 mb-6">
      <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
      <div class="w-full md:w-full px-3 mb-2 mt-2">
        <textarea
          v-model="comentText"
          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          name="body" placeholder='Type Your Comment' required></textarea>
      </div>
      <div class="w-full md:w-full flex items-start px-3">
        <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
          <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-for="rating in ratings" @click="selectRating(rating)"  :key="rating" :class="[rating <= selectedRating ? 'text-yellow-400':  'text-gray-300']" class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div class="-mr-1">
          <input type='submit'
            class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
            value='Post Comment'>
        </div>
      </div>
    </div>
  </form>
</div>
<CommentList />
</template>

<script>
import { useCommentStore } from './stores/CommentStore';
import CommentList from './components/CommentList.vue';
import moment from 'moment';
export default {
  name: "Commnet app",
  data() {
    return {
      ratings: [1, 2, 3, 4, 5],
      selectedRating: 0,
      comentText:'',
    }
  },
  mounted() {
    useCommentStore().getComments();
  },
  methods: {
    selectRating(rating) {
      this.selectedRating = rating;
    },
    getusers() {
      if (this.selectedRating > 0) {
        return useCommentStore().getUser().then((response) => {
          const currentDate = new Date().toISOString();
          useCommentStore().addForm({
            author: {
              name: `${response[0].name.first} ${response[0].name.last}`,
              thumbnail: response[0].picture.medium
            },
            commentText: this.comentText,
            craeateTime: moment(String(currentDate)).format('LLL'),
            commentStar: this.selectedRating,
          });
          this.comentText = '';
          this.selectedRating = 0;
        });
      } else {
        return alert('please select ratting');
      }
      
    }
  },
  components: {
    CommentList
  },
}
</script>
