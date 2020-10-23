<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <p class="preco">{{ produto.preco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null
    };
  },
  methods: {
    getProdutos() {
      api.get('/produtos')
      .then(r => {
        this.produtos = r.data;
      });

      axios.get('http://localhost:3000/produto').then(response => {
        this.produto = response.data;
      });
      
    }
  },
  created() {
    this.getProdutos();
  }
}
</script>

<style scoped>
  
</style>