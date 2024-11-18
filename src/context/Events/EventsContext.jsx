import React, { createContext, useEffect, useState } from "react";
import artaCinematografiei from "../../assets/images/artaCinematografiei.jpg";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection, onSnapshot, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import smaranda from './assets/smaranda.jpeg'
import vali from './assets/prof2.jpg'
import cristi from './assets/prof3.jpg';
import alex from './assets/alex.jpeg';
import rebeca from './assets/rebeca.jpeg'


export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
  const [events, setEvents] = useState([
    // going to upcoming events, read from the database
  ]);

  useEffect(() => {
    onSnapshot(collection(firestore, "events"), (snapshot) => {
      setEvents(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id }}));
    });
  }, []);

  const getEvent = async (id) => {
    try {
        const docRef = doc(firestore, "events", id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() };
        } else {
          console.log("No such document!");
          return {name: 'crr'};
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        return null;
      }
  }
  
  const getParticipating = async (eventId, func) => {
    try {
      const collectionRef = collection(firestore, 'events', eventId, 'înscrieri');
      const snapshot = await getDocs(collectionRef);

      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      func(data)
    } catch (err) {
      console.log(err);
    }
  }

  const handleNewEvent = async (
    InputName,
    InputTeacher,
    InputCost,
    InputDescription,
    InputPlace,
    InputDate
  ) => {
    const collectionRef = collection(firestore, "events");
    const payload = {
      name: InputName,
      cost: InputCost,
      description: InputDescription,
      place: InputPlace,
      date: InputDate,
      teacher: InputTeacher,
    };
    await addDoc(collectionRef, payload);

    const docRef = await addDoc(collectionRef, payload);

    // Create a sub-collection named "înscrieri" inside the new document
    const ParticipatingRef = collection(docRef, "înscrieri");
    const FeedbackRef = collection(docRef, 'feedback')

    // Optionally, add an empty document or initialize with specific data if needed
    await addDoc(ParticipatingRef, { initialized: true });
    await addDoc(FeedbackRef, { initialize: true })
  };

  const handleLoggedInParticipate = async (user, eventId, text) => {
    const eventDocRef = doc(firestore, "events", eventId);
    const participateRef = collection(eventDocRef, "înscrieri");
    const payload = {
        name: user.name,
        school: user.school,
        grade: user.grade,
        phone: user.phone,
        anyElse: text
    };
    await addDoc(participateRef, payload);
};
    const handleLoggedOutParticipate = async (data, eventId) => {
        try {
            const participateRef = collection(firestore, 'events', eventId, 'înscrieri');
            const payload = {
                name: data.name,
                school: data.school,
                grade: data.grade,
                phone: data.phone,
                anyElse: data.anyElse,
                findOut: data.findOut,
            };
            await addDoc(participateRef, payload);
            console.log("Document successfully added!");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

  const [playgroundEvents, setPlaygroundEvents] = useState([
    {
      name: "Ce spun Learnitașii?",
      description: "",
      date: "",
      type: "Playground",
      from: "Evenimente",
      photos: "",
    },
    {
      name: "Karaoke Night",
      description: "",
      date: "",
      type: "Playground",
      from: "Evenimente",
      photos: "",
    },
    {
      name: "Catalyst",
      description: "",
      date: "crr pow",
      type: "Playground",
      from: "Evenimente",
      photos: "",
    },
    {
      name: "Limbajul Semnelor",
      description:
        "Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta",
      date: "bow",
      type: "Playground",
      from: "Cursuri",
      photos: "",
    },
    {
      name: "Tradiții Libaneze",
      description: "",
      date: "haz",
      type: "Playground",
      from: "Workshop-uri",
      photos: "",
    },
    {
      name: "Politică la minut",
      description:
        "Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta",
      date: "haz",
      type: "Playground",
      from: "Workshop-uri",
      photos: "",
    },
    {
      name: "Arta cinematografiei",
      description:
        "Un joc de societate. Alegem atacuri, negociem, iar la final castiga tot Societatea Secreta",
      date: "haz",
      type: "Playground",
      from: "Workshop-uri",
      photos: artaCinematografiei,
    },
    {
      name: "D&D",
      description:
        "Ne întâlnim săptămânal pentru a ne distra împreună, bucurându-ne de jocul de rol Dungeons & Dragons. Fiecare membru al grupului are libertate creativă, astfel că lumea construită ne poate reprezenta pe fiecare. Foc sau gheață, pace sau război, ne aventurăm împreună în această lume fantastică, având grijă unul de celălalt.",
      date: "haz",
      type: "Playground",
      from: "Grupuri Autonome",
      photos: [],
    },
    {
      name: "Grupul de Foto",
      description:
        "Grupul autonom de fotografie este un grup în care învățăm cum să facem poze cât mai calitative, ne ajutăm reciproc să cultivăm această pasiune comună pentru fotografie și petrecem timp de calitate împreună, apropiindu-ne unii de alții.",
      date: "haz",
      type: "Playground",
      from: "Grupuri Autonome",
      photos: [],
    },
  ]);

  const [presentCourses, setPresentCourses] = useState([
    {
      name: "Alex Necșulescu",
      subject:
        "Concepte din psihologie explicate si aplicate pe viața tinerilor.",
      longDescription:
        "Ești pasionat de psihologie și de firea umană? Vrei să înțelegi mai bine subiecte precum mecanismele de apărare, tulburările de personalitate și traumele de respingere și de abandon? Prin intermediul cursului de „Psihologie Aplicată”, susținut de psihoterapeutul și psihologul clinician Alexandru Necșulescu, vei primi răspunsuri la aceste întrebări (și nu numai) și vei putea explora aceste subiecte prin intermediul exercițiilor practice din fiecare sesiune.",
      course: "Psihologie Aplicată",
      type: "Guided",
      from: "Course",
      photos: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Cristi Chirnogeanu",
      subject:
        "Diferiți antreprenori din diferite domenii, ajutând tinerii să aducă valoare.",
      longDescription:
        "Te interesează domeniul antreprenoriatului și ți-ai dori să afli cum arată viața unui antreprenor? 💸 Vrei să știi care este importanța cifrelor într-o afacere, cum să îți prezinți proiectul, cum să îi determini pe oameni să cumpere de la tine sau cum să îți creezi echipa? 🤔 Cursul „Povești despre antreprenoriat”, susținut de Cristian Chirnogeanu își propune să vină cu răspunsuri la aceste întrebări prin poveștile și experiențele altor antreprenori invitați.",
      course: "Povești despre Antreprenoriat",
      type: "Guided",
      from: "Course",
      photos: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Diferiți profesori",
      subject: "",
      longDescription:
        "Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vrem să creăm un spațiu în cadrul căruia putem cu toții să ne regăsim și să comunicăm cine suntem cu ajutorul mijloacelor plastice. În cadrul acestui curs vom avea 6 ședințe în care vom explora diferite tipuri de artă - pictura, modelajul, fotografia, gravura, fiecare având profesori separați, specializați pe fiecare domeniu în parte.",
      course: "Pastila de Arta",
      type: "Guided",
      from: "Course",
      photos: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Smaranda Nay",
      subject: "Relațiile internaționale explicate pe gustul tinerilor",
      longDescription:
        "Te invităm la un curs captivant despre comunicare, unde vom descoperi împreună cele trei stări: Părinte, Adult și Copil și modul în care acestea ne modelează comportamentul în relații. Vom explora cum se manifestă fiecare stare în comunicarea noastră de zi cu zi și cum influențează felul în care suntem percepuți și în care suntem tratați de ceilalți. Prin exerciții interactive, vom experimenta atât laturile constructive, cât și pe cele mai puțin constructive ale acestor stări, iar împreună vom căuta soluții pentru a îmbunătăți comunicarea cu părinții, profesorii și colegii.",
      course: "Comunicare",
      type: "Guided",
      from: "Course",
      photos: "/placeholder.svg?height=200&width=200",
    },
  ]);

  const [exampleCourses, setExampleCourses] = useState([
    {
      name: "Alex Necșulescu",
      subject: "Relațiile internaționale explicate pe gustul tinerilor",
      course: "Psihologie Aplicată",
      type: "Guided",
      from: "Course",
      photo: alex,
    },
    {
      name: "Rebeca Bașuț",
      subject: "Relațiile internaționale explicate pe gustul tinerilor",
      course: "Relații internaționale",
      type: "Guided",
      from: "Course",
      photo: rebeca,
    },
    {
      name: "Smaranda Nay",
      subject: "Relațiile internaționale explicate pe gustul tinerilor",
      course: "Comunicare",
      type: "Guided",
      from: "Course",
      photo: smaranda,
    },
    {
      name: "Valentin Brabete",
      subject: "Relațiile internaționale explicate pe gustul tinerilor",
      course: "Economie",
      type: "Guided",
      from: "Course",
      photo: vali,
    },
    {
      name: 'Cristi Chirnogeanul',
      subject: '',
      course: 'Povești despre antreprenoriat',
      type: 'Guided',
      from: 'Course',
      photo: cristi,
    }
  ]);

  return (
    <EventsContext.Provider
      value={{
        exampleCourses,
        presentCourses,
        playgroundEvents,
        events,
        handleNewEvent,
        handleLoggedInParticipate,
        getEvent,
        handleLoggedOutParticipate,
        getParticipating
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};
