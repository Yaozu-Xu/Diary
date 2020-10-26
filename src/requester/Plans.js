import firestore from '@react-native-firebase/firestore';

class PlansCollection {
  constructor() {
    this.plansCollection = firestore().collection('Plans');
  }

  // Get all plans
  plansDocumentSnapshot(uid, func) {
    return this.plansCollection.doc(uid)
      .onSnapshot((documentSnapshot) => {
        func(documentSnapshot);
      });
  }

  plansDocumentSetter(uid, { pid, date }) {
    this.plansCollection.doc(uid).update(
      {
        details: firestore.FieldValue.arrayUnion(
          { pid, date: firestore.Timestamp.fromDate(new Date(date)) },
        ),
      },
    );
  }

  tasksDocumentSnapshot(uid, pid, func) {
    return this.plansCollection.doc(uid)
      .collection('Tasks').doc(pid).onSnapshot((documentSnapshot) => {
        func(documentSnapshot);
      });
  }

  tasksDocumentCreator(uid, pid, data, callback) {
    this.plansCollection.doc(uid)
      .collection('Tasks').doc(pid).set(
        {
          details: firestore.FieldValue.arrayUnion(
            { ...data, date: firestore.Timestamp.fromDate(new Date(data.date)) },
          ),
        },
      )
      .then(() => {
        callback();
      });
  }

  tasksDocumentSetter(uid, pid, data, callback) {
    this.plansCollection.doc(uid)
      .collection('Tasks').doc(pid).update(
        {
          details: firestore.FieldValue.arrayUnion(
            { ...data, date: firestore.Timestamp.fromDate(new Date(data.date)) },
          ),
        },
      )
      .then(() => {
        callback();
      });
  }

  taskFinished(uid, pid, data, callback) {
    this.plansCollection.doc(uid)
      .collection('Tasks').doc(pid).set(
        {
          details: data,
        },
      )
      .then(() => {
        callback();
      });
  }
}

export default new PlansCollection();
