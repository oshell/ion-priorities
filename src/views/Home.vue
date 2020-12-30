<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="task in tasks" :key="task.title">
          <ion-label>{{task.title}}</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="primary" @click="openTaskModal">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonList,
  IonLabel,
  modalController,
} from "@ionic/vue";
import { addIcons } from "ionicons";
import { add } from "ionicons/icons";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import TaskModal from "../components/TaskModal";

addIcons({
  add: add.md,
});

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonItem,
    IonList,
    IonLabel,
  },
  setup() {
    return {
      add,
    };
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    async openTaskModal() {
      const modal = await modalController.create({
        component: TaskModal,
        cssClass: "slide-in-up"
      });
      return modal.present();
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>