<template>
  <section class="usuario">
    <nav class="sedenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Usuario',
  methods: {
    deslogar() {
      this.$store.dispatch('deslogarUsuario');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
  .usuario {
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    max-width: 900px;
    margin: 40px auto;
    grid-gap: 30px;
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    .usuario {
      grid-template-columns: 1fr;
      margin: 0px auto;
    }
  }
</style>