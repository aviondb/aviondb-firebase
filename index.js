const IPFS = require("ipfs");
const ipfs = new IPFS();
let AccessControllers = require("orbit-db-access-controllers");
const FirebaseAccessController = require("./FirebaseAccessController");
const OrbitDB = require("orbitdb");

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

AccessControllers.addAccessController({
  AccessController: FirebaseAccessController,
});

const test = async () => {
  await ipfs.ready;

  const orbitdb = await OrbitDB.createInstance(ipfs, {
    AccessControllers: AccessControllers,
  });

  /* const db = await orbitdb.keyvalue("first-database", {
      accessController: {
        type: "othertype",
        write: [identity.id],
      },
    }); */
};

test();
