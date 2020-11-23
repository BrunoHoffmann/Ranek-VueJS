<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length > 0" class="produtos">
      <div class="produto" v-for="(produto, index) in produtos" :key="index">
        <router-link :to="{ name: 'produto', params: {id: produto.id}}">
          <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
          <p class="preco">{{ produto.preco | numeroPreco}}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p>{{ produto.descricao }}</p>
        </router-link>
      </div>
      <ProdutosPaginar 
        :produtosTotal="produtosTotal" 
        :produtosPorPagina="produtosPorPagina"
      />
    </div>
    <div class="sem-resultados" v-else-if="produtos && produtos.length === 0">
      <p>Busca sem resultados. Tente busucar outro termo.</p>
    </div>
  </section>
</template>

<script>
import ProdutosPaginar from '@/components/ProdutosPaginar.vue';
import { api } from '@/services.js';
import { serialize } from '@/helpers.js';

export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
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
        this.produtosTotal = Number(r.headers["x-total-count"]);
        this.produtos = r.data;
      });
    }
  },
  components: {
    ProdutosPaginar,
  },
  created() {
    this.getProdutos();
  }
}
</script>

<style scoped>
  .produtos-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }

  .produto {
    box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .produto:hover {
    box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }

  .produto img {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .titulo {
    margin-bottom: 10px;
  }

  .preco {
    color: #e80;
    font-weight: bold;
  }

  .sem-resultados {
    text-align: center;
  }
</style>