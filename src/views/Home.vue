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
            <!-- Sliding item with expandable options on both sides -->
    <ion-item-sliding v-for="task in openTasks" :key="task.title" @ionDrag="handleDrag" :data-id="task.id">
      <ion-item-options side="start">
        <ion-item-option color="success" expandable @click="handleDone(task.id)">
          Done
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>{{task.title}}</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" expandable>
          Delete
        </ion-item-option>
        <ion-item-option color="tertiary" expandable>
          Edit
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>


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
import { mapGetters, mapMutations } from "vuex";
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
    ...mapGetters(["openTasks"]),
  },
  methods: {
    ...mapMutations(["setDone"]),
    async openTaskModal() {
      const modal = await modalController.create({
        component: TaskModal,
        cssClass: "slide-in-up"
      });
      return modal.present();
    },
    handleDone(id) {
      this.setDone(id);
    },
    handleDrag(e) {
      const doneSlided = e.detail.ratio < -3.6;
      if (doneSlided) {
        const id = parseInt(e.target.dataset.id);
        this.setDone(id);
      }
    }
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