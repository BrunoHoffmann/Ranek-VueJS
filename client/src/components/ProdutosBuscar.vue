<template>
  <form>
    <input 
      type="text" 
      id="busca" 
      name="busca" 
      v-model="busca" 
      placeholder="Buscar..."
    >
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos">
  </form>
</template>

<script>
export default {
  name: 'ProdutosBuscar',
  data() {
    return {
      busca: ''
    }
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });  
    }
  }
}
</script>

<style scoped>
  form {
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;
  }

  #busca {
    width: 100%;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 20px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;
  }

  #busca:focus,
  #busca:hover {
    transform: scale(1.1);
  }

  #lupa {
    width: 62px;
    height: 62px;
    background: url("../assets/search.svg") no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
  }
</style>
