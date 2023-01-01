<template>
   <div class="mt-4  w-[512px] mx-auto">
    <h3 class="text-3xl text-gray-500">Commnent List</h3>
    <ul class="space-y-6 mt-4">
        <li v-for="comment in allComments" :key="comment.id" class="bg-white rounded-sm shadow">
            <div class="px-6 py-5">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex items-center">
                        <div class="flex items-center space-x-px">
                            <div class="flex items-center space-x-px">
                                <svg v-for="item in comment.commentStar" :key="item" class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                        clip-rule="evenodd"></path>
                                </svg>
                        
                                <svg v-for="item in 5 - comment.commentStar" :key="item" class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm mt-2.5 sm:mt-0 font-normal text-gray-400">{{ comment.craeateTime }}</p>
                </div>
                <blockquote class="mt-4 sm:mt-6">
                    <p class="text-base font-normal leading-7 text-gray-600">{{ comment.commentText }}</p>
                </blockquote>
                <div class="flex items-center mt-5 sm:mt-8">
                    <img class="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full mr-1" :src="comment.author.thumbnail"
                        alt="Ms. Anjali Hahn I">
                    <span class="ml-2.5 text-sm font-medium text-gray-900">{{ comment.author.name }}</span>
                </div>
            </div>
        </li>
    </ul>
   </div>
</template>


<script>
import { useCommentStore } from '../stores/CommentStore';
import { mapState } from 'pinia';
export default {
    name: 'commentList',
    computed: {
        ...mapState(useCommentStore, ['allComments'])
    }

}
</script>