export default {
    name: "Divisor",
    props:{
      src: String,
      d_class: String,
    },
    template: //html
     `
     <div class="divisor" :class="[d_class]">
        <img
          :src="src"
          alt="Divisor de onda"
        />
      </div>
    `,
  };