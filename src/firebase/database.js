import { doc, getDoc, getFirestore, collection, getDocs, query, where, addDoc  } from "firebase/firestore"
import { app } from "./configuration";
import toast from "react-hot-toast";

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
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        return null; // Retornamos null para manejar el error en el componente que lo llama
    }
};

export const createOrder = async(order, clearCart, navigate) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);

        // Resumen para la pantalla de confirmación (sin el serverTimestamp, que es solo un marcador)
        const summary = {
            id: docRef.id,
            user: order.user,
            items: order.items,
            total: order.total,
            createdAt: new Date().toISOString()
        }

        clearCart()
        navigate(`/order/${docRef.id}`, { replace: true, state: { order: summary } })
    } catch (error) {
        console.error(error)
        toast.error("No pudimos registrar tu compra. Intentá de nuevo en unos minutos.")
    }
}

export const getOrder = async(id) => {
    const docSnap = await getDoc(doc(db, "orders", id));

    if (!docSnap.exists()) {
        return null;
    }

    const data = docSnap.data()
    return { ...data, id: docSnap.id, createdAt: data.time?.toDate().toISOString() ?? null }
}


