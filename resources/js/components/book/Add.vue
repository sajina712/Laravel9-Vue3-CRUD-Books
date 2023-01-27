<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header" style="color:#fff; background-color: #BB2D3B;">
                    <h4>Add Books</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
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
                                    <input type="number"  class="form-control" v-model="book.price" required>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="book.description" required>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
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
    name:"add-book",
    data(){
        return {
            book:{
                books_title:"",
                author:"",
                price:"",
                description:"",
                status:""
            }
        }
    },
    methods:{
        async create(){
            
            await this.axios.post('/api/book',this.book).then(response=>{
                this.$router.push('/book')
            }).catch(error=>{
                console.log(error)
            })
        },
        cancel(){
            if(confirm("Are you sure you want to cancel?")){
                this.$router.push('/book')
            }
        }
    }
    
}
</script>