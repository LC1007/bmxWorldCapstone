<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" v-if="showModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="text" class="form-control" v-model="selectedProduct.prodName">
                            <button class="btn" @click="saveChanges"></button>
                            <button class="btn" @click="$emit('close')"></button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        bike: Object,
        showModal: Boolean
    },
    data(){
        return{
            selectedProduct: {}
        }
    },
    watch:{
        bike: {
            immediate: true,
            handler(newVal){
                this.selectedProduct = Object.assign({}, newVal)
            }
        }
    },
    methods:{
        saveChanges() {
            // Handle saving changes and emit an event
            this.$emit('save', this.selectedProduct);
        }
    }
}
</script>

<style scoped></style>