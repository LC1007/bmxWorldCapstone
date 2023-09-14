<template>
    <div>
        <input type="text" v-model="searchQuery" placeholder="Search...">

        <select v-model="sortBy">
            <option value="">Sort by...</option>
            <option value="name">Product Name</option>
            <option value="price">Product Amount</option>
        </select>

        <select v-model="filterBy">
            <option value="">Filter by...</option>
            <option value="street bmx">Street BMX</option>
            <option value="vert bmx">Ver BMX</option>
        </select>

        <ul>
            <li v-for="item in filteredAndSortedData" :key="item.bmxID">
                {{ item.prodName }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState('products', {
            bikes: state => state.bikes,
            searchQuery: state => state.searchQuery,
            sortBy: state => state.sortBy,
            filterBy: state => state.filterBy,
        }),
        ...mapMutations('products', {
            setSearchQuery: 'setSearchQuery',
            setSortBy: 'setSortBy',
            setFilterBy: 'setFilterBy',
        }),
        filteredAndSortedData() {
            let filteredData = this.bikes;

            if (this.searchQuery) {
                filteredData = filteredData.filter(item =>
                    item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }

            if (this.sortBy) {
                filteredData = filteredData.sort((a, b) =>
                    a[this.sortBy] > b[this.sortBy] ? 1 : -1
                );
            }

            if (this.filterBy) {
                filteredData = filteredData.filter(item =>
                    item.category === this.filterBy
                );
            }

            return filteredData;
        }

    }


}
</script>

<style scoped></style>