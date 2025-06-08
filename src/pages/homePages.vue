<template>
  <DefaultLayout>
    <v-app class="contentPage">
      <v-container
        class="pa-0"
        fluid
      >
        <v-carousel
          show-arrows
          height="auto"
          class="responsive-carousel"
        >
          <v-carousel-item
            v-for="(itemParalax, index) in itemsParallax"
            :key="index"
          >
            <v-parallax
              :src="itemParalax"
              class="parallax-image"
              height="auto"
            />
          </v-carousel-item>
        </v-carousel>
      </v-container>

      <v-container
        class="cardPresentation"
        max-width="88%"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          class="flex-column flex-md-row"
        >
          <v-col
            cols="12"
            md="4"
            class="d-flex justify-center mb-4 mb-md-0"
          >
            <v-img
              width="100%"
              max-width="300"
              src="@/assets/ghibly.png"
            />
          </v-col>


          <v-col
            cols="12"
            md="8"
          >
            <v-card
              elevation="2"
              class="pa-4"
            >
              <div class="d-flex flex-column">
                <v-card-title class="cardTitle">
                  Gabriel PETER
                </v-card-title>
                <v-card-subtitle>About Me</v-card-subtitle>
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

                  <h3>🏷️ Mon style :</h3>
                  <ul>
                    <li>Apprendre, Créer, Optimiser.</li>
                    <li>Persévérant</li>
                    <li>Travailleur autonome, mais partant pour un challenge d'équipe.</li>
                  </ul>
                  <br>
                  <h3>🕹️ Mes Hobbies</h3>
                  <ul>
                    <li>Développement logiciel</li>
                    <li>Cajon</li>
                    <li>Batterie</li>
                    <li>Akïdo</li>
                    <li>Dessin</li>
                    <li>Intelligence Artificielle</li>
                    <li> Jeux de société</li>
                    <li> Echec</li>
                  </ul>
                  <br>
                  <h3>🔖 Mes Association </h3>
                  <ul >
                    <li>Digiteam : Digiteam est une association de réparation des ordinateurs pour les étudiants du pôle Léonard de Vinci.
                      Dans cette association, j'ai eu l'opportunité d'apprendre comment réparer et monter un ordinateur ou réglé quelques problèmes Software.
                    </li>
                    <li>Game Of Devinci : Game Of Devinci est une association de jeux de société et jeux de rôles du pôle Léonard de Vinci. Durant ma première année, j'ai rejoint cette association pour conquérir les terres sombres du MorDor.</li>
                  </ul>
                  <br>
                  <em>Si vous voulez en savoir plus ou accéder à mon CV c'est par <router-link :to="{ path: '/monProfil', hash: '#downloadCV' }">
                    ici !
                  </router-link> </em>
                </v-card-text>

                <div class="d-flex justify-center mt-2">
                  <v-btn
                    to="/monProfil"
                    class="buttonProfil"
                  >
                    See More
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2 class="styleSection">
          My Production
        </h2>
        <v-sheet class="sheetProduction">
          <v-card class="productionCard">
            <div class="titleProject">
              <h4>PortFolio</h4>
            </div>
            <v-card-text class="descriptionProject">
              Ce projet fut une première expérience que j'ai réalisée seul sans directive.
              Je trouvais pertinent et intéressant de travailler le développement web et l'utilisation des framework
              comme Vue et Vuetify.
              Ce projet m'a également permis d'améliorer ma maîtrise des langages comme le Javascript, le Typescript,
              HTML et le CSS.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Vue
              </v-chip>
              <v-chip class="chipItem">
                Vuetify
              </v-chip>
              <v-chip class="chipItem">
                TypeScript
              </v-chip>
              <v-chip class="chipItem">
                JavaScript
              </v-chip>
              <v-chip class="chipItem">
                HTML
              </v-chip>
              <v-chip class="chipItem">
                CSS
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="https://github.com/Gabafle/PortFolio-PETER-Gabriel.git"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>
          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Générateur de fantome d'image d'IRM, DICOM</h4>
              </div>
              <v-tooltip text="Confidential">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    class="statutProjectPrivate"
                  >
                    mdi-badge-account
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              L'objectif de ce projet était de réaliser une librairie interne à l'entreprise en java avec en plus une
              interface CLI et web.
              Cette librairie devait générer des images d'IRM sous le modèle DICOM pour les tests par rapport à
              des caractéristiques donner par l'utilisateur.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Java
              </v-chip>
              <v-chip class="chipItem">
                Spring boot
              </v-chip>
              <v-chip class="chipItem">
                DCM4CHE
              </v-chip>
              <v-chip class="chipItem">
                Vue
              </v-chip>
              <v-chip class="chipItem">
                Vuetify
              </v-chip>
              <v-chip class="chipItem">
                JavaScript
              </v-chip>
              <v-chip class="chipItem">
                Maven
              </v-chip>
              <v-chip class="chipItem">
                Sonar
              </v-chip>
              <v-chip class="chipItem">
                git
              </v-chip>
            </v-chip-group>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                Création d'un Scanner LIDAR 3D
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon v-bind="props">
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>
            <v-card-text class="descriptionProject">
              Ce projet d'étude avait pour objectifs d'être capable de scanner une
              pièce et de la modéliser en 3D sur python.
              Récupération des données via un capteur Lidar point par point, Stockage des données dans une carte SD,
              Modélisation et traitement sur ordinateur des données avec python.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Electronique
              </v-chip>
              <v-chip class="chipItem">
                LIDAR
              </v-chip>
              <v-chip class="chipItem">
                Python
              </v-chip>
              <v-chip class="chipItem">
                Soudure
              </v-chip>
              <v-chip class="chipItem">
                Moteur pas à pas
              </v-chip>
              <v-chip class="chipItem">
                Arduino
              </v-chip>
            </v-chip-group>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Création d'un Questionnaire PHP</h4>
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon v-bind="props">
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>
            <v-card-text class="descriptionProject">
              L'objectif de ce projet d'étude était de faire un site en php avec gestion des accès, login et création de
              compte.
              Ce projet utilisait phpMyAdmin pour géré la base de données.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                PHP
              </v-chip>
              <v-chip class="chipItem">
                SQL
              </v-chip>
              <v-chip class="chipItem">
                PhpAdmin
              </v-chip>
              <v-chip class="chipItem">
                HTML
              </v-chip>
              <v-chip class="chipItem">
                CSS
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="https://github.com/mickTa/PHP-Project.git"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>API RestFull</h4>
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon v-bind="props">
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet avait pour objectif de réaliser une API Rest-Full qui gère des articles, et des utilisateurs.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Javascript
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="https://github.com/Gabafle/ESILV-Projet-DevWeb-Backend.git"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Pipline Kafka ElasticSearch Kibana</h4>
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon v-bind="props">
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet avait pour objectif de réaliser un Pipe Line Kafka qui récupérait des données de qualité de l'air de plusieurs grandes villes via l'API OpenWeather.
              L'utilisation de ces données permettait la création de graphique sur ElasticSearch.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Docker
              </v-chip>
              <v-chip class="chipItem">
                Python
              </v-chip>
              <v-chip class="chipItem">
                OpenWeather API
              </v-chip>
              <v-chip class="chipItem">
                ElasticSearch
              </v-chip>
              <v-chip class="chipItem">
                Kibana
              </v-chip>
              <v-chip class="chipItem">
                Kafka
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="https://github.com/Gabafle/-UIR-Big-Data-Project-PipeLine-Kafka.git"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                Site Web Responsive
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon v-bind="props">
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet avait pour objectifs de réaliser un site web sur plusieurs pages de manières Responsives.
              Ce projet fut ma première fois dans le développement Web
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                HTML
              </v-chip>
              <v-chip class="chipItem">
                CSS
              </v-chip>
            </v-chip-group>
          </v-card>

          <h2> Project In Progress</h2>
          <v-divider/>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Cauchemars</h4>
              </div>
              <v-tooltip text="In progress">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    class="statutProjectInProgress"
                  >
                    mdi-tools
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Cauchemars est un projet de jeux vidéo indépendant en collaborations avec une équipe d'une dizaine de personne.
              Présider par "Palatops" ce projet de jeux indépendant a pour vocation d'être un jeu plateforme 2D.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                C#
              </v-chip>
              <v-chip class="chipItem">
                Godot
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="#"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>
          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
               <h4> Implementation ToDo ist Notion</h4>
              </div>

              <v-tooltip text="In progress">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    class="statutProjectInProgress"
                  >
                    mdi-tools
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet a pour but de permettre une connections de deux logiciels de productivité, Notion et TodoIst.
              L'objectif est de permettre la visualisation et l'actualisation des taches TodoIst sur Notion et de permettre des visualisations Notion des Taches.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                C#
              </v-chip>
              <v-chip class="chipItem">
                API Notion
              </v-chip>
              <v-chip class="chipItem">
                Api TodoIst
              </v-chip>
            </v-chip-group>
            <v-btn
              variant="elevated"
              prepend-icon="mdi-github"
              href="https://github.com/Gabafle/ImplementationToDoIstNotion.git"
              target="_blank"
              class="btnCodeSource"
            >
              Code source
            </v-btn>
          </v-card>

          <h2> Next Project</h2>
          <v-divider/>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
               <h4> DataCleaner</h4>
              </div>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet a pour vocation de normaliser selon des formats de données par l'utilisateur, des grandes bases de données.
              Les bases de données pourront être de plusieurs formats différents, SQL, json ,txt, xml ,...
              Les formats de données pourront idéalement être les formats de données établies à l'international ou dans une entreprise pour l'échange de données.
              Il serait donc possible de créer des formats de données pour après faire le nettoyage grâce à la puissance.
              de l'IA.
            </v-card-text>

            <v-divider/>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Java
              </v-chip>
              <v-chip class="chipItem">
                Python
              </v-chip>
              <v-chip class="chipItem">
                SQL
              </v-chip>
              <v-chip class="chipItem">
                IA
              </v-chip>
              <v-chip class="chipItem">
                ...
              </v-chip>
            </v-chip-group>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Algorithme de Résolution du Jeux Vidéo Marciac's Pocket Festival </h4>
              </div>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet a pour but de résoudre un jeu vidéo indépendant nommé Marciac's Pocket Festival et de donner le meilleur score possible.
            </v-card-text>

            <v-divider></v-divider>
            <v-chip-group class="groupChip">
              <v-chip class="chipItem">
                Python
              </v-chip>
              <v-chip class="chipItem">
                Pytest
              </v-chip>
              <v-chip class="chipItem">
                Reinforcement Learning
              </v-chip>
              <v-chip class="chipItem">
                IA
              </v-chip>
              <v-chip class="chipItem">
                ...
              </v-chip>
            </v-chip-group>
          </v-card>
        </v-sheet>
      </v-container>
    </v-app>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import DefaultLayout from "@/components/defaultLayout.vue";
//Parallax
const itemsParallax = ref([
  new URL('@/assets/parallax/image1.jpg', import.meta.url).href,
  new URL('@/assets/parallax/image3.jpg', import.meta.url).href,
  new URL('@/assets/parallax/image4.jpg', import.meta.url).href,
  new URL('@/assets/parallax/image5.jpg', import.meta.url).href,
  new URL('@/assets/parallax/image6.jpg', import.meta.url).href
]);

</script>

<style scoped>
.contentPage {
  margin-bottom: 10%;
}

.parallax-image {
  background-size: contain;
  min-height: 200px;
  height: 50vh;
}

.responsive-carousel {
  max-height: 80vh;
}

.styleSection {
  max-width: 100%;
  background-image: url("../../section.png");
  color: #F5CB5C;
  text-align: center;
  font-size: clamp(30px, 2vw, 40px);
  white-space: normal;
  word-break: break-word;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-top: 5%;
}

.buttonProfil {
  color: #F5CB5C;
  display: flex;
  justify-content: space-around;
}

.cardTextContent {
  font-size: clamp(16px, 1vw, 25px);
  white-space: normal;
  word-break: break-word;
  color: #CFDBD5;
}

.cardTitle {
  color: #F5CB5C;
  font-size: clamp(25px, 2vw, 30px);
  white-space: normal;
  word-break: break-word;
}

.cardPresentation {
  margin-top: 5%;
}

.sheetProduction {
  margin-top: 5%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.productionCard {
  width: 100%;
  height: 60%;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: justify;
  white-space: normal;
  word-break: break-word;
  border: #333533 solid 1px;
  border-radius: 4px;

}

.titleProject {
  color: #F5CB5C;
  font-size: clamp(20px, 1.2vw, 30px);
  font-weight: bold;
  text-align: justify;
  white-space: normal;
  word-break: break-word;
  margin: 1%;

}

.descriptionProject {
  color: #CFDBD5;
  text-align: justify;
  font-size: clamp(12px, 0.9vw, 25px);
  white-space: normal;
  word-break: break-word;
}

.groupChip {
  margin-left: 1%;
}

.chipItem {
  background-color: #f4db87;
  color: black;
  font-weight: bold;
  font-size: clamp(8px, 1vw, 15px);
  white-space: normal;
  word-break: break-word;
}

.btnCodeSource {
  margin-bottom: 1%;
  margin-left: 1%;
}

.titleArea {
  display: flex;
  align-items: center;
  white-space: normal;
  word-break: break-word;
}

.statutProjectInProgress {
  color: #f4740c;
}

.statutProjectPrivate {
  color: red;
}
</style>

