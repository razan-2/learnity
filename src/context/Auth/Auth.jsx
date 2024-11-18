import React, { useContext, useState, useEffect } from "react";
import { auth, firestore } from "../../firebase/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import bcrypt from "bcryptjs-react";
import { collection, doc, getDoc, getDocs, onSnapshot, addDoc, updateDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [userData, setUserData] = useState([]);

  const AdminToggle = () => {
    setAdmin(true);
  };

  const AdminDisable = () => {
    setAdmin(false);
  };

  const fetchUserDataWithEvents = async () => {
    const unsubscribe = onSnapshot(collection(firestore, "users"), async (snapshot) => {
      const usersWithEvents = await Promise.all(
        snapshot.docs.map(async (userDoc) => {
          const userData = userDoc.data();
          const userId = userDoc.id;
  
          console.log(`Fetching events for user ID: ${userId}`);
  
          // Access the "events" sub-collection
          const eventsRef = collection(firestore, "users", userId, "events");
          const eventsSnapshot = await getDocs(eventsRef);
  
          console.log(`Number of events found: ${eventsSnapshot.size}`);
  
          // Fetch the referenced documents
          const referencedDocs = await Promise.all(
            eventsSnapshot.docs.map(async (eventDoc) => {
              const ref = eventDoc.data()?.reference;
  
              if (!ref) {
                return null;
              }
              const referencedDoc = await getDoc(ref);
  
              if (referencedDoc.exists()) {
                return { id: referencedDoc.id, ...referencedDoc.data() };
              } else {
                return null;
              }
            })
          );
  
          // Filter out any null values in case of missing references
          const validReferencedDocs = referencedDocs.filter((doc) => doc !== null);
  
          return { id: userId, ...userData, events: validReferencedDocs };
        })
      );
  
      // Update the state with the users data and their referenced events
      setUserData(usersWithEvents);
    });
  
    return unsubscribe;
  };

  const getUsers = async (func) => {
    try {
      const collectionRef = collection(firestore, 'users');
      const snapshot = await getDocs(collectionRef)
      const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
      func(data)
    } catch (err) {
      console.log(err)
    }
  }

  const acceptUser = async (userId) => {
    try {
      const userRef = doc(firestore, 'users', userId);
      await updateDoc(userRef, {
        accepted: true,
      });
      console.log('User accepted status updated successfully');
    } catch (error) {
      console.error('Error updating user status: ', error);
    }
  };

  const declineUser = async (userId) => {
    return;
  }

  const handleAccount = async (data) => {
    const collectionRef = collection(firestore, 'users');
    const payload = {
      name: data.name,
      email: data.email,
      accepted: false,
      bio: '',
      function: 'Learnitaș',
      grade: 0,
      school: '',
      phone: '',
    }
    await addDoc(collectionRef, payload);
  }

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, initializeUser);
      fetchUserDataWithEvents();
    }
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });

      // check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const user = userLoggedIn ?  userData.filter((user) => user.email == currentUser.email)[0] : {};

  const finalUser = { ...currentUser, ...user }



  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    admin,
    setCurrentUser,
    AdminToggle,
    AdminDisable,
    finalUser,
    handleAccount,
    getUsers,
    acceptUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
