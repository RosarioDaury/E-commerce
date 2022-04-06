import { useEffect, useState } from "react";
import { DB } from "../../Services/Firebase";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";


export const useData = (collection) => {
    const [items, setItems] = useState([])
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let controller = true;

        const getData = async () => {
            await DB.collection(collection)
                .get()
                .then((elements) => {
                    const data = []
                    elements.forEach(doc => {
                        data.push(doc.data());
                    })
                    setItems(data)
                })
        }

        if (controller) {
            getData()
        }

        return () => {
            controller = false;
        }
    }, [update])


    const Add = async (item) => {
        let list = [];
        await DB.collection(collection).where('name', '==', item.name).get()
            .then(elements => {
                elements.forEach(el => {
                    list.push(el.data());
                });
            })

        if (list.length > 0) {

            try {
                await DB.collection(collection).where('name', '==', item.name).get()
                    .then(element => {
                        element.forEach(doc => {
                            doc.ref.update({
                                id: doc.data().id,
                                image: doc.data().image,
                                name: doc.data().name,
                                price: doc.data().price,
                                tag: doc.data().tag,
                                many: doc.data().many + 1
                            })
                        })
                    })

                setUpdate(!update);


                Swal.fire({
                    title: `Added to ${collection}`,
                    text: `your product has been added to ${collection} Again, check ${collection} tap`,
                    icon: "success"
                })

            } catch (error) {
                Swal.fire({
                    title: `Error Adding to ${collection}`,
                    text: `Opps something went Wrong`,
                    icon: "error"
                })
            }


        } else {

            try {
                await DB.collection(collection).add({
                    id: uuidv4(),
                    image: item.image,
                    name: item.name,
                    price: item.price || item.precio || 40,
                    tag: item.tag,
                    many: 1
                })

                setUpdate(!update);


                Swal.fire({
                    title: `Added to ${collection}`,
                    text: `your product has been added to ${collection}, check ${collection} tap`,
                    icon: "success"
                })


            } catch (error) {
                Swal.fire({
                    title: `Error Adding to ${collection}`,
                    text: `Opps something went Wrong`,
                    icon: "error"
                })
            }
        }
    }


    const Remove = async (item) => {
        if (item.many > 1) {
            try {
                await DB.collection(collection).where('name', '==', item.name).get()
                    .then(element => {
                        element.forEach(doc => {
                            doc.ref.update({
                                id: doc.data().id,
                                image: doc.data().image,
                                name: doc.data().name,
                                price: doc.data().price,
                                tag: doc.data().tag,
                                many: doc.data().many - 1
                            })
                        })
                    })

                setUpdate(!update);


                Swal.fire({
                    title: `Removed From ${collection}`,
                    text: `your product has been Removed to ${collection} tap`,
                    icon: "success"
                })

            } catch (error) {
                Swal.fire({
                    title: `Error Removing to ${collection}`,
                    text: `Opps something went Wrong`,
                    icon: "error"
                })
            }

        } else {

            try {
                await DB.collection(collection).where('id', '==', item.id)
                    .get()
                    .then(element => {
                        element.forEach(doc => {
                            doc.ref.delete();
                        })
                    })


                setUpdate(!update);

                Swal.fire({
                    title: `Removed from ${collection}`,
                    text: `your product has been removed from ${collection} tap`,
                    icon: "success"
                })



            } catch (error) {
                Swal.fire({
                    title: `Error removing from ${collection}`,
                    text: "Opps something went Wrong",
                    icon: "error"
                })
            }
        }

    }




    return { items, Add, Remove };
}