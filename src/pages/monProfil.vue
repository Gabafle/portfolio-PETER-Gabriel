<template>
  <DefaultLayout>
    <v-app class="contentPage">
      <div class="title">
        <h1 >
          À Propos
        </h1>
      </div>


      <h2 class="subtitle">
        Ma Description
      </h2>

      <v-container>
        <v-card>
          <v-card-text class="cardTextContent">
            <em>"Ce qui se conçoit bien s'énonce clairement et les mots pour le dire arrivent aisément - <b>Nicolas
              Boileau</b>"</em>
            <br>
            Aiment apprendre et maîtriser de nouvelles connaissances, cette citation est comme un mantra pour moi.
            <br>
            Je suis étudiant en 2ᵉ année de Bachelor Ingénierie et Cybersécurité à l’ESILV, j’ai 21 ans et une
            passion débordante pour le développement logiciel, les systèmes complexes et l’apprentissage autonome.
            <br><br>

            Derrière l’écran, il y a aussi un esprit curieux et touche-à-tout : si je ne suis pas en train de
            coder ou démonter une techno, je suis sûrement sur un tatami, un carnet de croquis à la main, sur une
            batterie ou plongé dans un livre de productivité ou de codes.
            <br><br>

            🧠 INTJ-T, ennéagramme 5 : j’aime creuser, comprendre, et bâtir des choses qui ont du sens.
            <br><br>
          </v-card-text>
        </v-card>
      </v-container>


      <h2 class="subtitle">
        Mon Parcours
      </h2>
      <v-container>
        <v-stepper
          class="stepperButton"
          :items="['2025-2024', '2024-2023','2023-2022']"
          editable
        >
          <template #item.1>
            <v-card>
              <v-card-title class="yearsStyleStepper">
                Years 2025 to 2024
              </v-card-title>
              <v-timeline
                dot-color="#F5CB5C"
                align="start"
              >
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Juillet 2025 - Septembre 2025 : Stage en développement Python
                      Nexialog
                    </h2>
                    <br>
                    <p class="timelineContent">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </v-timeline-item>

                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Janvier 2025 - Juin 2025 : Echange Universitaire UIR Rabat
                      Maroc
                    </h2>
                    <br>
                    <p class="timelineContent">
                      Durant cet échange, j'ai eu la chance d'approfondir mes connaissances en sécurité des Réseaux et
                      dans les technologies Big Data.
                      J'ai également pu approfondir mes connaissances en C, en mathématiques et dans l'étude des
                      signaux.
                    </p>
                  </div>
                </v-timeline-item>
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Décembre 2024 : Découverte de la librairie Java LangChain4j
                    </h2>
                    <br>
                    <p class="timelineContent">
                      La librairie langChaine4j est une librairie Java qui se base sur la librairie LangChain en python
                      pour la création de LLM ou de modèle de manière générale.
                      Durant ce laps de temps, j'ai cherché à comprendre comment la librairie fonctionnait en essayant
                      de recréer un LLM.
                    </p>
                  </div>
                </v-timeline-item>
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Septembre 2024 - Decembre 2024: 2ème Année Bachelor Ingénérie et
                      Cybersecurité ESILV
                    </h2>
                    <br>
                    <p class="timelineContent">
                      Durant ce premier semestre, j'ai pu terminer mon projet d'étude de scanner Lidar et découvrir de
                      nouvelles notions en Statistique, Node Js, Mécatronique ou encore en développement assembleur.
                    </p>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </template>

          <template #item.2>
            <v-card>
              <v-card-title class="yearsStyleStepper">
                Years 2024 to 2023
              </v-card-title>
              <v-timeline
                dot-color="#F5CB5C"
                align="start"
              >
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Juin 2024 - Juillet 2024 : Stage Olea Medical Développement
                      Logiciels
                    </h2>
                    <br>
                    <p class="timelineContent">
                      Développer une librairie en JAVA permettant de générer des données DICOM (format/standard
                      d'échange d'images en imagerie médicale) à partir de critères simples (géométrie, stratégie de
                      colorisation des pixels ...) afin de pouvoir utiliser ces données générées comme données de test
                      des applications à la place de données patient réel.
                    </p>
                  </div>
                </v-timeline-item>
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      Septembre 2023 - Juin 2024: 1ère Année Bachelor Ingénérie et
                      Cybersécurité
                    </h2>
                    <br>
                    <p class="timelineContent">
                      Durant ma première année d'école supérieure, j'ai pu apprendre les bases de l'ingénierie et de
                      l'informatique.

                      <br>
                      <br>
                      De plus, j'ai eu la chance d'effectuer de nombreux projets :
                      <v-list class="timelineContent">
                        <v-list-item> - Questionnaire en PHP</v-list-item>
                        <v-list-item> - Site Responsive sur plusieurs pages</v-list-item>
                        <v-list-item> - Création d'un appareil de modélisation 3D avec un capteur Lidar</v-list-item>
                      </v-list>
                    </p>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </template>
          <template #item.3>
            <v-card>
              <v-card-title class="yearsStyleStepper">
                Years 2023 to 2022
              </v-card-title>
              <v-timeline
                dot-color="#F5CB5C"
                align="start"
              >
                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      PASS TON HACK D'ABORD
                    </h2>
                    <p class="timelineContent">
                      Pass Ton Hack d'abord était un concours de l'Etat qui avait pour objectif de sensibilité les
                      jeunes sur la cybersécurité.
                    </p>
                  </div>
                </v-timeline-item>

                <v-timeline-item>
                  <div>
                    <h2 class="timelineTitleContent">
                      BAC Spécialité Maths, Physique, Maths Expert
                    </h2>
                    <p class="timelineContent">
                      J'ai eu mon BAC avec les spécialités Maths, Physique et Maths Expert avec mention assez bien. J'ai
                      fait mon BAC dans le lycée privée catholique Jean Paul II
                    </p>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </template>
        </v-stepper>
      </v-container>


      <h2 id="downloadCV" class="subtitle">
        Mon CV
      </h2>

      <v-container
        class="CVcontainer"
        fluid
      >
        <v-card class="cardCV">
          <v-card-title class="titleCV">
            Télécharger mon CV en un clic !
          </v-card-title>
          <v-card-subtitle class="subtitleCV">
            Cliquez ici pour accéder au CV
          </v-card-subtitle>

          <v-btn

            class="btnDownload"
            href="PETER_Gabriel.pdf"
            download
          >
            <v-icon left>
              mdi-download
            </v-icon>
            Télécharger le fichier
          </v-btn>

          <div class="vf-file-preview-pdf-container">
            <iframe
              class="vf-file-preview-pdf"
              src="PETER_Gabriel.pdf"
              type="application/pdf"
            />
          </div>
        </v-card>
      </v-container>
    </v-app>
  </DefaultLayout>
</template>
<script lang="ts" setup>

import DefaultLayout from "@/components/defaultLayout.vue";


function scrollToCV() {
  const element = document.getElementById('downloadCV');
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}

</script>

<style scoped>


.CVcontainer {
  width: 80%;
}

.cardCV {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(16px, 2vw, 25px);
  height: 120%;
}

.titleCV {
  color: #F5CB5C;
  font-size: clamp(16px, 2vw, 25px);
  text-align: center;
  white-space: normal;
  word-break: break-word;
}

.subtitleCV {
  font-size: clamp(10px, 2vw, 15px);
  text-align: center;
  white-space: normal;
  word-break: break-word;
}

.btnDownload {
  margin-top: 1rem;
  background-color: #0a7c5e;
  color: white;
  white-space: normal;
  word-break: break-word;
  text-align: center;
}

.btnDownload:hover {
  transform: scale(1.02);
}

.vf-file-preview-pdf-container {
  width: 85%;
  height: auto;
  margin-top: 2%;
}

.vf-file-preview-pdf {
  width: 100%;
  height: 800px;
  border: none;
}

.contentPage {
  margin-bottom: 10%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #F5CB5C;
  font-size: clamp(25px, 3vw, 35px);
  white-space: normal;
  word-break: break-word;
  margin-top: 4%;
}

.subtitle {
  max-width: 100%;
  max-height: 100%;
  background-image: url("../../section.png");
  color: #F5CB5C;
  text-align: center;
  font-size: clamp(35px, 2vw, 45px);
  white-space: normal;
  word-break: break-word;
  padding-top: 5%;
  padding-bottom: 4%;

  margin-top: 3%;
  margin-bottom: 1.2%;
}

.cardTextContent {
  color: #CFDBD5;
  font-size: clamp(20px, 1vw, 25px);
  white-space: normal;
  word-break: break-word;
}

.yearsStyleStepper {
  color: #F5CB5C;
  font-size: clamp(16px, 2vw, 25px);
  white-space: normal;
  word-break: break-word;
}

.stepperButton {
  color: #F5CB5C;

}

.timelineTitleContent {
  font-size: clamp(16px, 2vw, 22px);
  white-space: normal;
  word-break: break-word;
}

.timelineContent {
  color: #CFDBD5;
  font-size: clamp(10px, 2vw, 17px);
  white-space: normal;
  word-break: break-word;
}

</style>
