<template>
  <DefaultLayout>
    <v-app class="contentPage">

      <section class="hero-parallax">
        <div class="parallax-bg"></div>
        <div class="hero-content">
          <div class="welcome-text" ref="welcomeText">
            <h1 class="main-title">Bienvenue</h1>
            <h2 class="sub-title">Gabriel PETER</h2>
            <p class="hero-description">Apprentie Développeur Passionné • Étudiant Ingénieur ESILV</p>
            <div class="scroll-indicator">
              <v-icon class="scroll-arrow">mdi-chevron-down</v-icon>
              <span>Découvrir</span>
            </div>
          </div>
        </div>
      </section>


      <v-container class="descrtionAll" fluid>
        <v-row class="mainRow" no-gutters>
          <v-col cols="12" md="5" class="leftPart">
            <h1>Gabriel PETER</h1>
            <v-img
              src="@/assets/ghibly.png"
              class="profileImage"
              width="40%"
            ></v-img>
          </v-col>

          <!-- Partie droite -->
          <v-col cols="12" md="7" class="rightPart">
            <!-- Carte Description -->
            <v-card class="mb-4">
              <v-card-title class="titleDescritpion">Description</v-card-title>
              <v-card-subtitle>About Me</v-card-subtitle>
              <v-card-text class="texteDescritpion">
                <em>"Ce qui se conçoit bien s'énonce clairement et les mots pour le dire arrivent aisément - <b>Nicolas
                  Boileau</b>"</em>
                <br>
                Aiment apprendre et maîtriser de nouvelles connaissances, cette citation est comme un mantra pour moi.
                <br>
                Je suis étudiant en 2ᵉ année de Bachelor Ingénierie et Cybersécurité à l'ESILV, j'ai 21 ans et une
                passion débordante pour le développement logiciel, les systèmes complexes et l'apprentissage autonome.
                <br><br>

                Derrière l'écran, il y a aussi un esprit curieux et touche-à-tout : si je ne suis pas en train de
                coder ou démonter une techno, je suis sûrement sur un tatami, un carnet de croquis à la main, sur une
                batterie ou plongé dans un livre de productivité ou de codes.
                <br><br>

                🧠 INTJ-T, ennéagramme 5 : j'aime creuser, comprendre, et bâtir des choses qui ont du sens.
                <br><br>

              </v-card-text>
            </v-card>

            <!-- Petites cartes -->
            <v-row dense class="smallCardPresentationList">
              <v-col cols="12" sm="6" md="4" v-for="(card, index) in smallCards" :key="index">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card class="smallDescritpionItems" :elevation="isHovering ? 12 : 5" v-bind="props"
                          :color="isHovering ? '#cc9400' : undefined"
                  >
                    <v-card-title class="titleDescritpion">{{ card.title }}</v-card-title>
                    <v-card-text>
                      <div v-for="(item, i) in card.items" :key="i">{{ item }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <h2 class="styleSection">
          My Production
        </h2>

        <!-- Container avec grille responsive pour les cartes -->
        <div class="projectsGrid">
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
            <div class="chipContainer">
              <v-chip class="chipItem">Vue</v-chip>
              <v-chip class="chipItem">Vuetify</v-chip>
              <v-chip class="chipItem">TypeScript</v-chip>
              <v-chip class="chipItem">JavaScript</v-chip>
              <v-chip class="chipItem">HTML</v-chip>
              <v-chip class="chipItem">CSS</v-chip>
            </div>
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
            <div class="chipContainer">
              <v-chip class="chipItem">Java</v-chip>
              <v-chip class="chipItem">Spring boot</v-chip>
              <v-chip class="chipItem">DCM4CHE</v-chip>
              <v-chip class="chipItem">Vue</v-chip>
              <v-chip class="chipItem">Vuetify</v-chip>
              <v-chip class="chipItem">JavaScript</v-chip>
              <v-chip class="chipItem">Maven</v-chip>
              <v-chip class="chipItem">Sonar</v-chip>
              <v-chip class="chipItem">git</v-chip>
            </div>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                Création d'un Scanner LIDAR 3D
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    class="statutProjectScholar"
                  >
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
            <div class="chipContainer">
              <v-chip class="chipItem">Electronique</v-chip>
              <v-chip class="chipItem">LIDAR</v-chip>
              <v-chip class="chipItem">Python</v-chip>
              <v-chip class="chipItem">Soudure</v-chip>
              <v-chip class="chipItem">Moteur pas à pas</v-chip>
              <v-chip class="chipItem">Arduino</v-chip>
            </div>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Création d'un Questionnaire PHP</h4>
              </div>
              <v-tooltip text="Scholar issues">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    class="statutProjectScholar"
                  >
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
            <div class="chipContainer">
              <v-chip class="chipItem">PHP</v-chip>
              <v-chip class="chipItem">SQL</v-chip>
              <v-chip class="chipItem">PhpAdmin</v-chip>
              <v-chip class="chipItem">HTML</v-chip>
              <v-chip class="chipItem">CSS</v-chip>
            </div>
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
                  <v-icon
                    v-bind="props"
                    class="statutProjectScholar"
                  >
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet avait pour objectif de réaliser une API Rest-Full qui gère des articles, et des utilisateurs.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">Javascript</v-chip>
            </div>
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
                  <v-icon
                    v-bind="props"
                    class="statutProjectScholar"
                  >
                    mdi-account-school
                  </v-icon>
                </template>
              </v-tooltip>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet avait pour objectif de réaliser un Pipe Line Kafka qui récupérait des données de qualité de
              l'air de plusieurs grandes villes via l'API OpenWeather.
              L'utilisation de ces données permettait la création de graphique sur ElasticSearch.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">Docker</v-chip>
              <v-chip class="chipItem">Python</v-chip>
              <v-chip class="chipItem">OpenWeather API</v-chip>
              <v-chip class="chipItem">ElasticSearch</v-chip>
              <v-chip class="chipItem">Kibana</v-chip>
              <v-chip class="chipItem">Kafka</v-chip>
            </div>
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
                  <v-icon
                    v-bind="props"
                    class="statutProjectScholar"
                  >
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
            <div class="chipContainer">
              <v-chip class="chipItem">HTML</v-chip>
              <v-chip class="chipItem">CSS</v-chip>
            </div>
          </v-card>
        </div>

        <h2 class="interSectionProject">Projects In Progress</h2>
        <v-divider/>

        <div class="projectsGrid">
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
              Cauchemars est un projet de jeux vidéo indépendant en collaborations avec une équipe d'une dizaine de
              personne.
              Présider par "Palatops" ce projet de jeux indépendant a pour vocation d'être un jeu plateforme 2D.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">C#</v-chip>
              <v-chip class="chipItem">Godot</v-chip>
            </div>
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
                <h4>Implementation ToDo ist Notion</h4>
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
              L'objectif est de permettre la visualisation et l'actualisation des taches TodoIst sur Notion et de
              permettre des visualisations Notion des Taches.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">C#</v-chip>
              <v-chip class="chipItem">API Notion</v-chip>
              <v-chip class="chipItem">Api TodoIst</v-chip>
            </div>
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
        </div>

        <h2 class="interSectionProject">Next Projects</h2>
        <v-divider/>

        <div class="projectsGrid">
          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>DataCleaner</h4>
              </div>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet a pour vocation de normaliser selon des formats de données par l'utilisateur, des grandes bases
              de données.
              Les bases de données pourront être de plusieurs formats différents, SQL, json ,txt, xml ,...
              Les formats de données pourront idéalement être les formats de données établies à l'international ou dans
              une entreprise pour l'échange de données.
              Il serait donc possible de créer des formats de données pour après faire le nettoyage grâce à la
              puissance.
              de l'IA.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">Java</v-chip>
              <v-chip class="chipItem">Python</v-chip>
              <v-chip class="chipItem">SQL</v-chip>
              <v-chip class="chipItem">IA</v-chip>
              <v-chip class="chipItem">...</v-chip>
            </div>
          </v-card>

          <v-card class="productionCard">
            <div class="titleArea">
              <div class="titleProject">
                <h4>Algorithme de Résolution du Jeux Vidéo Marciac's Pocket Festival</h4>
              </div>
            </div>

            <v-card-text class="descriptionProject">
              Ce projet a pour but de résoudre un jeu vidéo indépendant nommé Marciac's Pocket Festival et de donner le
              meilleur score possible.
            </v-card-text>

            <v-divider/>
            <div class="chipContainer">
              <v-chip class="chipItem">Python</v-chip>
              <v-chip class="chipItem">Pytest</v-chip>
              <v-chip class="chipItem">Reinforcement Learning</v-chip>
              <v-chip class="chipItem">IA</v-chip>
              <v-chip class="chipItem">...</v-chip>
            </div>
          </v-card>
        </div>
      </v-container>
    </v-app>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import DefaultLayout from "@/components/defaultLayout.vue";
//Parallax
const itemsParallax = ref([
  {
    content:"gthvjfkvf"
  },
  {
    content:"gthvjfkvf"
  },
  {
    content:"gthvjfkvf"
  },
  {
    content:"gthvjfkvf"
  },
]);

const smallCards = [
  {
    title: "Mon style",
    items: ["🤖 Apprendre, Créer, Optimiser.", "🖋️ Persévérant", "💼 Travailleur autonome, mais partant pour un challenge d'équipe."]
  },
  {
    title: "Mes Hobbies",
    items: ["⌨️ Développement logiciel", "🪘 Cajon", "🥁 Batterie", "🥋 Akïdo", "✏️ Dessin", "📊 Intelligence Artificielle", "🎲 Jeux de société", "♟️ Echec"]
  },
  {
    title: "Mes Association",
    items: ["💻 Digiteam", "🕹️ Game Of Devinci"]
  }
];
</script>

<style scoped>
.contentPage {
  margin-bottom: 10%;
}
/* ======== PARALLAX HERO SECTION ======== */
.hero-parallax {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-bg {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  background-attachment: fixed;
  z-index: -1;
}

.parallax-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(245, 203, 92, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(245, 203, 92, 0.05) 0%, transparent 50%),
    linear-gradient(45deg, transparent 0%, rgba(245, 203, 92, 0.02) 50%, transparent 100%);
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}

.welcome-text {
  animation: fadeInUp 2s ease-out;
}

.main-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: #F5CB5C;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  animation: textGlow 3s ease-in-out infinite alternate;
}

.sub-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  color: #CFDBD5;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: #CFDBD5;
  opacity: 0.9;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #F5CB5C;
  font-size: 0.9rem;
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-indicator:hover {
  transform: scale(1.1);
  color: #fff;
}

.scroll-arrow {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textGlow {
  from {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(245, 203, 92, 0.3);
  }
  to {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(245, 203, 92, 0.6), 0 0 40px rgba(245, 203, 92, 0.4);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive pour le hero */
@media (max-width: 768px) {
  .hero-parallax {
    height: 80vh;
  }

  .hero-content {
    padding: 1rem;
  }

  .main-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }

  .sub-title {
    font-size: clamp(1.2rem, 4vw, 2rem);
  }

  .hero-description {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-bottom: 2rem;
  }
}
/*======== Parallax ======*/


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
  border-radius:1%;
}

/* ======== Description ==========*/
.titleDescritpion {
  color: #F5CB5C;
  font-size: clamp(20px, 1.2vw, 30px);
}

.texteDescritpion {
  color: #CFDBD5;
  font-size: clamp(12px, 1vw, 25px);
}

.descrtionAll {
  margin-top: 5%;
}

.leftPart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.leftPart h1 {
  margin-bottom: 1px;
  color: #F5CB5C;
  font-weight: bold;
}

.profileImage {
  width: 100%;
  margin-bottom: 8%;
}

.rightPart {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

.smallCardPresentationList {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
}

.smallDescritpionItems {
  height: 100%;
  color: #CFDBD5;
  font-size: 1.2rem;
  border-radius: 2%;
}

/*========= Production Style =========*/
.projectsGrid {
  display: grid;
  gap: 10px;
  margin-top: 2%;
  margin-bottom: 4%;

  grid-template-columns: 1fr;

  /* Tablette - 2 colonnes */
  @media (min-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.productionCard {
  width: 100%;
  height: auto;
  text-align: justify;
  white-space: normal;
  word-break: break-word;
  border: #333533 solid 1px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
  0 6px 20px rgba(0, 0, 0, 0.19);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.productionCard:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3),
  0 10px 25px rgba(0, 0, 0, 0.22);
}

.titleProject {
  color: #F5CB5C;
  font-size: clamp(16px, 1.2vw, 24px);
  font-weight: bold;
  text-align: justify;
  white-space: normal;
  word-break: break-word;
  margin-top: 1%;
  margin-left: 16px;
  margin-right: 16px;
}

.descriptionProject {
  color: #CFDBD5;
  text-align: justify;
  font-size: clamp(12px, 1vw, 18px);
  white-space: normal;
  word-break: break-word;
  flex-grow: 1;
}

/* Container pour les chips - affichage en ligne avec retour à la ligne */
.chipContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  align-items: flex-start;
}

.chipItem {
  background-color: #f4db87;
  color: black;
  font-weight: bold;
  font-size: clamp(10px, 1vw, 14px);
  white-space: nowrap;
  flex-shrink: 0;
}

.btnCodeSource {
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  align-self: flex-start;
}

.titleArea {
  display: flex;
  align-items: center;
  white-space: normal;
  word-break: break-word;
  padding: 16px 16px 0 16px;
}

.statutProjectInProgress {
  color: #f4740c;
  margin-left: 8px;
  flex-shrink: 0;
}

.statutProjectPrivate {
  color: red;
  margin-left: 8px;
  flex-shrink: 0;
}

.statutProjectScholar {
  margin-left: 8px;
  flex-shrink: 0;
}

.interSectionProject {
  margin-top: 4%;
  font-size: clamp(24px, 2vw, 32px);
  margin-bottom: 2%;
  color: #F5CB5C;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .titleProject {
    font-size: 18px;
    margin-left: 12px;
    margin-right: 12px;
  }

  .descriptionProject {
    font-size: 14px;
  }

  .chipContainer {
    padding: 12px;
  }

  .btnCodeSource {
    margin-left: 12px;
    margin-right: 12px;
  }

  .titleArea {
    padding: 12px 12px 0 12px;
  }
}
</style>
