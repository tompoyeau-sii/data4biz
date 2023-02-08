<template>
    <div>
        <h1>Mon super compteur</h1>
        <p>Vous avez cliqué {{ total }} fois.</p>
        <button class="btn btn-primary" @click="increment">Compteur</button>
    </div>
</template>

<script>


export default {
    name: 'Compteur',
    data(){
        return {
            total: 0
        }
    },
    methods: {
        increment() {
            this.total += 1;
        }
    }
}
</script>

<style scoped>
* {
    z-index: 10;
}
</style>