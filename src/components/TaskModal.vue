<template>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="stacked">Task</ion-label>
      <ion-input v-model="title"></ion-input>
    </ion-item>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="primary" @click="close">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  modalController,
} from "@ionic/vue";
import { addIcons } from "ionicons";
import { defineComponent } from "vue";
import { mapMutations } from 'vuex';
import { checkmark } from "ionicons/icons";

addIcons({
  checkmark: checkmark.md,
});

export default defineComponent({
  name: "Modal",
  data() {
    return {
      content: "Content",
      title: ''
    };
  },
  setup() {
    return {
      checkmark,
    };
  },
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
  },
  methods: {
    ...mapMutations([
      'addTask'
    ]),
    close: async function () {
      this.addTask({
        title: this.title
      })
      const modal = await modalController.getTop();
      modal.dismiss();
    },
  },
});
</script>