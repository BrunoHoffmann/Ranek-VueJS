<template>
  <form>
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="nome">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email">
    <label for="senha">Senha</label>
    <input type="password" id="senha" name="senha" v-model="senha">
    <label for="cep">Cep</label>
    <input type="text" id="cep" name="cep" v-model="cep" @keyup="preencherCep">
    <label for="rua">Rua</label>
    <input type="rua" id="rua" name="rua" v-model="rua">
    <label for="nome">Número</label>
    <input type="number" id="numero" name="numero" v-model="numero">
    <label for="bairro">Bairro</label>
    <input type="text" id="bairro" name="bairro" v-model="bairro">
    <label for="cidade">Cidade</label>
    <input type="text" id="cidade" name="cidade" v-model="cidade">
    <label for="estado">Estado</label>
    <input type="text" id="estado" name="estado" v-model="estado">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from '@/helpers.js';
import { getCep } from '@/services.js';

export default {
  name: 'UsuarioForm',
  computed: {
    ...mapFields({
      fields: ['nome', 'email', 'senha', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado'],
      base: 'usuario',
      mutation: 'UPDATE_USUARIO'
    }),
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, '');
      if (cep.length == 8) {
        getCep(cep).then(response => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    },
  },
};
</script>

<style scoped>
  form {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
  }

  .button {
    grid-column: 2;
    margin-top: 10px;
  }

  .btn-form {
    max-width: 100%;
  }
</style>