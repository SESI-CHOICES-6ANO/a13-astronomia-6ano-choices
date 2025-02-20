// Alterar as variáveis de data() e o numero da questao no HTML de acordo com a questão
export default {
  data() {
    return {
      gabaritoQuestoes: { qck1: ["a", "b", "d", "e", "f"] }, // ALTERE AQUI
      formData: {
        qck1: [], // ALTERE AQUI
      },
    };
  },

  methods: {
    verificaQuestao(questao) {
      let qtdGabarito = this.gabaritoQuestoes[questao].length;
      let qtdSelecionadas = this.formData[questao].length;

      // Verifica se as opções selecionadas são iguais do gabarito

      const acertou =
        qtdSelecionadas === qtdGabarito &&
        this.formData[questao].every((resposta) =>
          this.gabaritoQuestoes[questao].includes(resposta)
        );

      console.log("acertou", acertou);

      let correto = `
        <div class="mb-40 question-result question-result__correto">
        <img src="src/img/correct.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Sim, esses são elementos da narrativa.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="mb-40 question-result question-result__incorreto">
        <img src="src/img/error.webp" alt="correto">
          <p class="body1 flex--align-center">
             
            <b>Opa! Alguma coisa não está certa. Reveja a aula até aqui e tente de novo!</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `;
      if (acertou) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    },
  },

  //html
  template: `
<!-- Question 1 -->
<div class="question question--checkbox" id="qck1">
<form action="get"  @submit.prevent="verificaQuestao('qck1')">
  <p class="body1 mt-2">
    <b>
      Fazem parte das narrativas os seguinte elementos: </b
    >​
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="a" v-model="formData.qck1"  />
      <span>
        Enredo
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="b" v-model="formData.qck1"  />
      <span>
        Personagens
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="c" v-model="formData.qck1"  />
      <span>
        Mentiras
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="d" v-model="formData.qck1"  />
      <span>
        Conflito
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="e" v-model="formData.qck1"  />
      <span>
        Narrador
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="f" v-model="formData.qck1"  />
      <span>
        Cenário
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="g" v-model="formData.qck1"  />
      <span>
        Super heróis
      </span>
    </label>
  </p>
  <div class="feedback"></div>
  <input class="mt-24 purple-text btn-large filled waves-effect waves-light bubbly-button" type="submit" value="Responder 👀" />
</form>
</div>
`,
};
