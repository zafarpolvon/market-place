<template>
    <modal :top="0" :width="'100%'" :height="'100%'" name="Modal-Search" class="search__box">
        <div class="container mx-auto">
            <div class="search__header">
                <div class="search__side">
                    <i class="fas fa-search"></i>
                    <input type="text" ref="search" v-model="searchInput" placeholder="Поиск" class="search__input"  />
                    <button v-if="searchInput.length > 1" class="cursor-pointer" @click="reset"><i class="far fa-times-circle"></i></button>
                </div>
                <a @click="closeSearch" class="search__cancel"><i class="fas fa-times"></i></a>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
  props: 'search',
  name: 'searchBar',
  data: () => ({
    searchInput: '',
    childMessage: false
  }),
  methods: {
    reset () {
      this.searchInput = ''
    },
    closeSearch () {
      this.$modal.hide('Modal-Search')
    }
  }
}
</script>

<style>
    .search__box {
        margin-top: -5px;
    }
    .search__header {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-top: 20px;
    }
    .search__side {
        width: 85%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid #f5f5f5;
        background: #f5f5f5;
        transition: background .15s,color .35s .5s;
        border-radius: 100px;
        padding: 8px 20px 8px 20px;
    }
    .search__cancel {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 100px;
        width: 42px;
        height: 42px;
        justify-content: center;
    }
    .search__header input {
        width: 100%;
        outline: none;
        padding-left: 10px;
        background: transparent;
    }
    .search__input {
        border: none;
        margin: 0 auto;
    }
</style>
