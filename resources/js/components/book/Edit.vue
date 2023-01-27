<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header" style="color:#fff; background-color: #BB2D3B;">
                    <h4>Update Book</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Book Title</label>
                                    <input type="text" class="form-control" v-model="book.books_title" required>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Author</label>
                                    <input type="text" class="form-control" v-model="book.author" required>
                                </div>
                            </div>
                            
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" v-model="book.price" required>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="book.description" required>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                                &nbsp;<button type="button" @click="cancel()" class="btn btn-primary">Cancel</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-book",
    data(){
        return {
            book:{
                books_title:"",
                author:"",
                price:"",
                description:"",
                status:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showBook()
    },
    methods:{
        async showBook(){
            await this.axios.get(`/api/book/${this.$route.params.id}`).then(response=>{
                const { books_title, author, price, description, status} = response.data
                this.book.books_title = books_title
                this.book.author = author
                this.book.price = price
                this.book.description = description
                this.book.status = status
                
            }).catch(error=>{
                console.log(error)
            })
        },
        cancel(){
            if(confirm("Are you sure you want to cancel?")){
                this.$router.push('/book')
            }
        },
        async update(){
            await this.axios.post(`/api/book/${this.$route.params.id}`,this.book).then(response=>{
                this.$router.push('/book')

            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>