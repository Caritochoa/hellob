import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {

};

firebase.initilizeApp(config);
firebase.firestore().settings({ });

export default firebase