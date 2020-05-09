import AccessControllers from "orbit-db-access-controllers";
const FirebaseAccessController = require("../AccessController/FirebaseAccessController");
export const firebase = require("firebase/app");
require("firebase/auth");
var collection;
var firebaseConfig = {
  apiKey: "AIzaSyDj__oB7gGk4D2plH5AmY-5wa1VfJvHcJc",
  authDomain: "avion-firebase.firebaseapp.com",
  databaseURL: "https://avion-firebase.firebaseio.com",
  projectId: "avion-firebase",
  storageBucket: "avion-firebase.appspot.com",
  messagingSenderId: "13115262418",
  appId: "1:13115262418:web:60c91ecb8f1bdd2920f40b",
  measurementId: "G-HVHX7XQJ1X",
};

firebase.initializeApp(firebaseConfig);

AccessControllers.addAccessController({
  AccessController: FirebaseAccessController,
});

export const getAvionDBCollection = async () => {
  if (!collection) {
    const ipfs = await window.Ipfs.create();
    const aviondb = await window.AvionDB.init(
      "database-test-100",
      ipfs,
      {
        accessController: {
          type: "firebase-access-controller",
          firebaseConfig: firebaseConfig,
          firebase: firebase,
        },
      },
      { AccessControllers: AccessControllers }
    );
    collection = await aviondb.initCollection(
      "collection-test-100" /* ,
      {},
      {
        accessController: {
          type: "firebase-access-controller",
          firebaseConfig: firebaseConfig,
          firebase: firebase,
        },
        AccessControllers: AccessControllers,
      } */
    );
    return collection;
  } else {
    return collection;
  }
};
