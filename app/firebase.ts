import { getApps, initializeApp } from "firebase/app";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcFX8N3rKg4t22NVQDcFsEmIsjqJgXb8s",
  authDomain: "bogota-car-life-app-2026.firebaseapp.com",
  projectId: "bogota-car-life-app-2026",
  storageBucket: "bogota-car-life-app-2026.firebasestorage.app",
  messagingSenderId: "957811124206",
  appId: "1:957811124206:web:d9c0d9cccf6d37a5bf10ff",
};

const firebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

async function hashEmail(email: string) {
  const bytes = new TextEncoder().encode(email);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function saveWaitlistSignup(email: string, source: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const emailHash = await hashEmail(normalizedEmail);

  await setDoc(doc(firestore, "waitlist", emailHash), {
    email: normalizedEmail,
    createdAt: serverTimestamp(),
    source: source.slice(0, 500),
    privacyVersion: "1.0",
  });
}
