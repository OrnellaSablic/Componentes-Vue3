const { createApp } = Vue

const Nav = {
  props: {
    item1: String,
    item2: String,
    item3: String
  },

  template: `<nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="./index.html">AppVue</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html">{{item1}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./sobre-nosotros.html">{{ item2 }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contacto.html">{{ item3 }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
}

const Titulo = {
  template: `<h1>Proyecto Vue Web Components</h1>`
}

createApp({
  components: {
    'navbar': Nav,
    'titulo': Titulo
  },

  data() {
    return {
      item1: "Inicio",
      item2: "Sobre nosotros",
      item3: "Contacto",

      makeup: [
        {
          id: 1,
          nombre: "Base de maquillaje",
          marca: "Channel",
          imagen: "https://juleriaque.vtexassets.com/arquivos/ids/217206-300-auto?v=638211349574970000&width=800&height=auto&aspect=true",
          precio: 230
        },
        {
          id: 2,
          nombre: "Mascara",
          marca: "Yves Saint Laurent",
          imagen: "https://juleriaque.vtexassets.com/arquivos/ids/206672-300-auto?v=638085776650130000&width=800&height=auto&aspect=true",
          precio: 180
        },
        {
          id: 3,
          nombre: "Labial",
          marca: "Dior",
          imagen: "https://juleriaque.vtexassets.com/arquivos/ids/203811-300-auto?v=638085756043600000&width=200&height=auto&aspect=true",
          precio: 160
        },
        {
          id: 4,
          nombre: "Polvo compacto",
          marca: "Mac",
          imagen: "https://juleriaque.vtexassets.com/arquivos/ids/205512-300-auto?v=638085768411530000&width=800&height=auto&aspect=true",
          precio: 200
        }
      ],

      mainStyle: {
        "main-text": true,
        "color-text": true
      },

      tableStyle: {
        "width-table": true,
        "margin-table": true,
      },

      theadStyle: {
        "bg-thead": true,
        "color-thead": true,
      },

      bgNav: '#6cc29b',

    }

  }
}).mount('#app')
