export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/shutterstock_2308570911.jpg",
          alt: "Choices",

          //html
          html: `
            <p class="body1 purple-text"><b>Grande Nuvem de Magalhães</b></p>
            <br />
            <p>
       O termo "Grande Nuvem de Magalhães" refere-se a uma galáxia anã satélite que orbita a Via Láctea. Seu número de estrelas é dez vezes menor e seu diâmetro é vinte vezes menor do que o da Via Láctea. A Grande Nuvem de Magalhães apresenta características de uma estrutura espiralada, apesar de uma parte de sua morfologia ser irregular . Ela contém compostos complexos orgânicos como metanol, éter dimetílico e metanoato de metila . Alguns especulam que a Grande Nuvem de Magalhães inicialmente era uma galáxia espiral barrada que se separou da Via Láctea antes de se transformar em uma galáxia irregular . O quarto maior membro do Grupo Local é a Grande Nuvem de Magalhães , seguida da Andrômeda, da Via Láctea e da galáxia do Triângulo.
​
            </p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/shutterstock_498368326.jpg",
          alt: "Choices",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Pequena nuvem de Magalhães</b></p>
            <br />
            <p>
            É uma galáxia anã que se encontra próxima à Via Láctea. A Pequena Nuvem de Magalhães tem um diâmetro de aproximadamente 7000 anos-luz, contém algumas centenas de milhões de estrelas e tem uma massa de aproximadamente 7 bilhões de massas solares . É classificada como uma galáxia irregular anã. A Pequena Nuvem de Magalhães é um objeto distinto no céu noturno do hemisfério sul; ele faz seu contorno entre as constelações de Dorado e Mensa .​
            </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/shutterstock_2125668614.jpg",
          alt: "Choices",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Galáxia de Andrômeda </b></p>
            <br />
            <p>
            É uma galáxia espiral que está na direção da constelação de Andrômeda , a cerca de 2,54 milhões de anos-luz da Terra. É a galáxia espiral mais próxima da Via Láctea e recebeu seu nome da constelação onde está localizada. A constelação também recebeu seu nome da princesa mitológica Andrômeda. É a maior galáxia do Grupo Local, que também inclui aproximadamente trinta galáxias menores, incluindo a Via Láctea, a galáxia do Triângulo e outras três. Aproximadamente um trilhão de estrelas estão presentes na Galáxia de Andrômeda. ​
            </p>
            
            `,
        },
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    };
  },
  methods: {
    /**
     * Advances the carousel to the next slide.
     * Displays the "previous" button to allow navigation back to the previous slide.
     */

    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    /**
     * Goes back to the previous slide.
     * Hides the "previous" button if on the first slide.
     */
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  /**
   * When the component is mounted, it initializes the carousel, gets the first slide,
   * and sets the display of the "previous" button to none.
   * The onCycleTo callback is set to update the current slide and the previous slide index.
   * If the current slide is the first one, the "previous" button is hidden.
   * @return {void} This function does not return a value.
   */
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      /**
       * Callback function triggered when the carousel cycles to a new slide.
       * Determines the current and previous slide indices and updates the display of the "previous" button.
       * If the current slide is the first one, the "previous" button is hidden.
       * @param {HTMLElement} slide - The current slide element.
       */

      onCycleTo: (slide) => {
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  //html
  template: `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m4">
          <img :src="item.img" :alt="item.alt" class="img-rounded carousel-img">
          </div>
          <div class="col s12 m8 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
