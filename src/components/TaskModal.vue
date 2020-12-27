<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ content }}

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
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  modalController
} from "@ionic/vue";
import { addIcons } from "ionicons";
import { defineComponent } from "vue";
import { checkmark } from "ionicons/icons";

addIcons({
  checkmark: checkmark.md,
});

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" }
  },
  data() {
    return {
      content: "Content",
    };
  },
  setup() {
    return {
      checkmark,
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon
  },
  methods: {
    close: async function() {
        const modal = await modalController.getTop();
        modal.dismiss();
    },
  },
});
</script>