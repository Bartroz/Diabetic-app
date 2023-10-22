import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD-ZsdS4ZDrfDxN8JMCKbWTtvwP5VnK-io',
      authDomain: 'diabetic-app-77927.firebaseapp.com',
      projectId: 'diabetic-app-77927',
      storageBucket: 'diabetic-app-77927.appspot.com',
      messagingSenderId: '392914880602',
      appId: '1:392914880602:web:17b4b46642c87c7d94b063',
      measurementId: 'G-MGBNRWEJCY',
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
  }
}
