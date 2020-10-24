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
import { serialize } from '@/helpers.js';

export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null,
      produtosPorPagina: 10,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produtos?_limit=${this.produtosPorPagina}${query}`;
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  }, 
  methods: {
    getProdutos() {
      api.get(this.url).then(r => {
        this.produtos = r.data;
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