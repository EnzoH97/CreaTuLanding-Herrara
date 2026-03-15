import { doc, getDoc, getFirestore, collection, getDocs, query, where, addDoc  } from "firebase/firestore"
import { app } from "./configuration";

const db = getFirestore(app);


export const getProducts = async() => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []


    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
});
return products
}

export const getCategories = async() => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = []


    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name)
});
return categories
}


export const getProductsByCategory = async(category) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = []


    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
});
return products
}


export const getProduct = async(id) => {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return{...docSnap.data(), id: docSnap.id}
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export const createOrder = async(order) => {
    
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
} 


