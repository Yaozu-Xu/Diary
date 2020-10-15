import firestore from '@react-native-firebase/firestore';

class PlansCollection {
  constructor() {
    this.plansCollection = firestore().collection('Plans');
  }

  // Getter functions
  plansDocumentSnapshot(uid, func) {
    this.plansCollection.doc(uid)
      .onSnapshot((documentSnapshot) => {
        func(documentSnapshot);
      });
  }

  tasksDocumentSnapshot(uid, pid, func) {
    this.plansCollection.doc(uid)
      .collection('Tasks').doc(pid).onSnapshot((documentSnapshot) => {
        func(documentSnapshot);
      });
  }
}

export default new PlansCollection();
