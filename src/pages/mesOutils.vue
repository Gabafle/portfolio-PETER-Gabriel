<template>
  <DefaultLayout>
    <v-app class="contentPage">
      <div class="title">
        <h1>Mes Outils et Langages</h1>
      </div>
      <v-divider />
      <v-container
        max-width="100%"
        max-height="50%"
      >
        <h2 class="styleSection">
          Mes Langages
        </h2>
        <v-sheet class="styleSheet">
          <v-slide-group
            v-model="model"
            class="pa-4"
          >
            <v-slide-group-item>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/javaLogo.jpg"
                />
                <v-card-title> Java</v-card-title>
                <v-card-text>
                  Le Java est un langage de programmation orienté objet, à la fois compilé et interprété. J’ai eu la chance de travailler sur ce langage lors d’une expérience chez Olea Médical.
                  Aujourd’hui mon langage favori, je continue d’accroître mes compétences en Java en travaillant sur de nombreux projets.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/JsLogo.jpg"
                />
                <v-card-title> JavaScript</v-card-title>
                <v-card-text>
                  Le Javascript est un langage dit "Just In Time compiler". Durant ma formation, j'ai eu la chance d'effectuer des projets et d'apprendre ce langage.
                  Il m'a permis d'accroître mes compétences en programmation orientée objet et la programmation coté web.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/TsLogo.png"
                />
                <v-card-title> TypeScript</v-card-title>
                <v-card-text>
                  Typescript est un langage basé sur le Javascript. Typé de manière forte, il permet un meilleur contrôle sur les variables. Avec une préférence pour les langages aux typages fort, j'ai appris par moi-même ce langage ainsi que quelque framework qui lui sont liés.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/PythonLogo.jpg"
                />
                <v-card-title> Python</v-card-title>
                <v-card-text>
                  Le python a été le langage qui m'a fait découvrir le monde de la programmation.
                  Durant mes années de collège et de lycée, j'ai découvert le python en effectuant des petits programmes sur la calculatrice.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/CLogo.jpg"
                />
                <v-card-title> C</v-card-title>
                <v-card-text>
                  Le C a été le langage qui m'a permis d'apprendre les bases de la programmation avec la gestion de la mémoire et les pointeurs.
                  Ces compétences m'ont permis de mieux maîtriser les bases et m'a permis de comprendre la logique de la programmation.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/LogoC.png"
                />
                <v-card-title> C#</v-card-title>
                <v-card-text>
                  Dans le cadre d'un projet de jeux vidéo de plateforme comme Hollow Night. Je me forme au C# est à l'environnement Godot pour réaliser celui-ci.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/SQLLogo.png"
                />
                <v-card-title> SQL</v-card-title>
                <v-card-text>
                  Durant ma formation, j'ai eu la chance d'apprendre le SQL.
                  Le SQL m'a permis d'apprendre à gérer les grands volumes de données ainsi que la compétence de décomposer des problèmes complexes en petit problème simples.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/NoSql.png"
                />
                <v-card-title> NOSQL</v-card-title>
                <v-card-text>
                  Durant ma formation, j'ai eu l'opportunité d'apprendre l'utilisation du NOSQL avec Mango DB.
                  L'apprentissage de ce langage m'a permis d'améliorer mes compétences que j'avais acquises avec le SQL ainsi de me rendre plus adaptable aux différents types d'organisation et de gestion de bases de données.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/php.png"
                />
                <v-card-title> PHP</v-card-title>
                <v-card-text>
                  Durant mes études, j'ai eu la chance de découvrir le PHP en effectuant des projets de sites sécurisés avec une gestion des accès utilisateur et administrateur.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/HtmlCssLogo.jpg"
                />
                <v-card-title> HTML CSS</v-card-title>
                <v-card-text>
                  Durant mes études, j'ai eu la chance de découvrir le HTML et le CSS en effectuant des pages web responsive.
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
      <v-divider />
      <v-container
        max-width="100%"
        max-height="50%"
      >
        <h2 class="styleSection">
          Mes Outils
        </h2>
        <v-sheet class="styleSheet">
          <v-slide-group
            v-model="model"
            class="pa-4"
          >
            <v-slide-group-item>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/VsCosde.png"
                />
                <v-card-title> VsCode</v-card-title>
                <v-card-text class="textStyle">
                  Ai-je besoin de le présenter ?
                  VsCode est un IDE gratuit qui permet de développer dans énormément de langages. VsCode a été mon tout premier IDE de développement.
                  Je continue de développer sur cet IDE de temps en temps même si je développe plus avec les IDE de Jets Brains.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/ddvp.ico"
                />
                <v-card-title> Docker</v-card-title>
                <v-card-text>
                  Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels. Le principe de containerisation est un principe important dans le métier de développeurs.
                  Par ailleurs, j'ai eu la chance de pouvoir suivre une formation Docker durant mon stage chez Olea Medical ainsi qu'une initiation durant ma formation qui m'a permis d'agrandir mes compétences sur Docker.
                </v-card-text>
                <br>
                <br>
                <br>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/toolbox.ico"
                />
                <v-card-title> JetBrains ToolBox</v-card-title>
                <v-card-text>
                  L'entreprise Jet Brains propose des logiciels et des IDE pour les développeurs. Conseiller par un développeur professionnelles, j'ai testé leurs IDE. Tombé sous leurs charmes, je développe maintenant essentiellement sur les IDE Jet Brains grâce à l'accès gratuit pour les étudiants.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/anaconda.png"
                />
                <v-card-title> Anaconda</v-card-title>
                <v-card-text>
                  Anaconda est une distribution libre et open source des langages de programmation Python et R
                  Appliqué au développement d'applications dédiées à la science des données et à l'apprentissage automatique
                  qui vise à simplifier la gestion des paquets et de déploiement.
                  Durant mes années de lycée, nous avons eu quelques cours de python sur anaconda.
                </v-card-text>
                <br>
                <br>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  width="50%"
                  src="@/assets/imageTools/github.png"
                />
                <v-card-title> GitHub</v-card-title>
                <v-card-text>
                  Git Hub est un site qui permet de partager du code et de collaborer.
                  Durant ma formation, je me suis formé à l'utilisation de GitHub pour collaborer.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/gitLab.png"
                />
                <v-card-title> GitLab</v-card-title>
                <v-card-text>
                  Git Lab est un site qui permet de partager du code et de collaborer comme GitHub.
                  Étant qu'apprentie développeurs, je me suis formé à l'utilisation de git durant mon stage chez Olea Médical.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/cisco.webp"
                />
                <v-card-title> Cisco Packet Tracer</v-card-title>
                <v-card-text>
                  Packet Tracer est un simulateur de matériel réseau Cisco (routeurs, commutateurs). Cet outil
                  Durant mes années de formation, j'ai eu l'opportunité d'apprendre les architectures réseaux avec Cisco Packet Tracer.
                </v-card-text>
                <br>
                <br>
                <br>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/gns3.ico"
                />
                <v-card-title> GNS3</v-card-title>
                <v-card-text>
                  GNS3 (Graphical Network Simulator) est un logiciel libre permettant l'émulation ou la simulation de réseaux informatiques. Utilisé durant mon échange universitaire, j'ai pu approfondir mes connaissances en gestion de réseaux et sécurité des réseaux tout en apprenant à utiliser ce logiciel.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/vmware.png"
                />
                <v-card-title> VM WareWorkStation</v-card-title>
                <v-card-text>
                  VMware Workstation est un outil de virtualisation de poste de travail créé par la société.
                  VMware, il peut être utilisé pour mettre en place un environnement de test pour développer de nouveaux logiciels.
                  Durant mon échange dans les cours Network Sécurité, j'ai eu la chance avec GNS3 d'apprendre à gérer et protégé un réseau et de voir comment exploiter les faits tout en essayant de les combler.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/virtualBox.png"
                />
                <v-card-title> Virtual Box</v-card-title>
                <v-card-text>
                  Oracle VM VirtualBox est un logiciel libre de virtualisation créé par la société Innotek rachetée par Sun Microsystems et aujourd'hui publié par Oracle. Utilisé durant mes cours de système d'exploitation, j'ai eu l'opportunité d'apprendre à utiliser et gérée des machines virtuelles Linux Debian,Ubuntu ,Kali Linux , ...
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/Office.webp"
                />
                <v-card-title> Pack Microsoft Office</v-card-title>
                <v-card-text>
                  Dans mes établissements d'étude supérieure, j'ai eu la chance d'obtenir des licences Offices.
                  Je suis donc habitué et opérationnelle à utiliser les différents logiciels d'Office 365
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  width="50%"
                  src="@/assets/imageTools/todoist.png"
                />
                <v-card-title> Todo Ist</v-card-title>
                <v-card-text>
                  TODOIst est un logiciel de planification de Taches. Ce logiciel est mon fidèle compagnon que j'utilise tous les jours pour organiser mes journées et mes projets.
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
      <v-divider />
      <v-container
        max-width="100%"
        max-height="50%"
      >
        <h2 class="styleSection">
          Mes librairie et framwork
        </h2>
        <v-sheet class="styleSheet">
          <v-slide-group>
            <v-slide-group-item>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/langchain4j.jpg"
                />
                <v-card-title> LangChain4j</v-card-title>
                <v-card-text>
                  LangChain4j est une librairie Java accès dans la création de Modèle d'IA.
                  Inspirée de la librairie LangChain en python cette librairie permet d'effectuer de l'intelligence Artificielle en Java.
                  J'ai découvert cette librairie grâce à une chaîne de podcast intitulé Les Cast Coders.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/junit.png"
                />
                <v-card-title> Junit5</v-card-title>
                <v-card-text>
                  La plateforme JUnit sert de base au lancement de frameworks de test sur la JVM .
                  Elle définit également l'API TestEngine pour le développement d'un framework de test fonctionnant sur la plateforme.
                  J'ai appris à utiliser cette librairie durant mon stage chez Olea médical. en codant avec le principe TDD (Test Driven Developpement)
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/numpy.png"
                />
                <v-card-title> Numpy</v-card-title>
                <v-card-text>
                  NumPy est une bibliothèque pour le langage de programmation Python, destinée à manipuler des matrices ou tableaux multidimensionnels ainsi que des fonctions mathématiques opérant sur ces tableaux.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/panda.png"
                />
                <v-card-title> Pandas</v-card-title>
                <v-card-text>
                  Pandas est une bibliothèque écrite pour le langage de programmation Python permettant la manipulation et l'analyse de données.
                  Elle propose en particulier des structures de données et des opérations de manipulation de tableaux numériques et de séries temporelles.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/node.png"
                />
                <v-card-title> Node</v-card-title>
                <v-card-text>
                  Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau événementiel hautement concurrentes qui doivent pouvoir monter en charge.
                </v-card-text>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/logo.png"
                />
                <v-card-title> Vuetify</v-card-title>
                <v-card-text>
                  Vuetify est une bibliothèque d'interface utilisateur Open Source avec des composants Vue magnifiquement fabriqués à la main, basés sur le système de conception matérielle populaire de Google.
                </v-card-text>
              </v-card>

              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  src="@/assets/imageTools/logo.svg"
                />
                <v-card-title> Vue</v-card-title>
                <v-card-text>
                  Vue.js (aussi appelé plus simplement Vue), est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web mono pages.
                  Vue a été créé par Evan You et est maintenu par lui et le reste des membres actifs de l'équipe principale travaillant sur le projet et son écosystème.
                </v-card-text>
                <br>
              </v-card>
              <v-card class="styleCard">
                <v-img
                  class="imageFit"
                  width="50%"
                  src="@/assets/imageTools/spring.png"
                />
                <v-card-title> Spring boot</v-card-title>
                <v-card-text>
                  Java Spring Framework (Spring Framework) est une infrastructure open source d'entreprise couramment utilisée qui permet de créer des applications autonomes de production qui fonctionnent sur la machine virtuelle Java (JVM).
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
    </v-app>
  </DefaultLayout>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";
import DefaultLayout from "@/components/defaultLayout.vue";

const model = ref(null)

const drawer = ref(false);


watch(drawer, (newVal) => {
  console.log("Drawer state changed:", newVal);
});


</script>

<style scoped>
.contentPage {
  margin-bottom: 10%;
}

.title {
  text-align: center;
  color: #F5CB5C;
  width: 100%;
  height: 80%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 130%;
}

.styleSection {
  max-width: 100%;
  max-height: 100%;
  background-image: url("../../section.png");
  color: #F5CB5C;
  text-align: center;
  font-size: 200%;
  padding-top: 5%;
  padding-bottom: 4%;
}

.styleSheet {
  max-width: 100%;
  background-color: #242423;
  margin-top: 1%;
  margin-bottom: 5%;
}

.styleCard {
  width: 300px;
  height: auto;
  background-color: #333533;
  margin: 1% 0.5%;
  padding-bottom: 10%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
  0 6px 20px rgba(0, 0, 0, 0.19);
  transition: transform 0.3s, box-shadow 0.3s;
}

.styleCard:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3),
  0 10px 25px rgba(0, 0, 0, 0.22);
}

.imageFit {
  display: flex;
  margin: auto;
  width: 35%;
  height: 35%;
}

.v-card-text {
  text-align: justify;
  text-indent: 20px;
  font-size: clamp(14px, 0.9vw, 50px);
  white-space: normal;
  word-break: break-word;
  color: #E8EDDF;
}

.v-card-title {
  color: #F5CB5C;
  margin-top: 0;
  text-align: center;
  font-size: clamp(24px, 1.8vw, 30px);
  white-space: normal;
  word-break: break-word;

}
</style>


