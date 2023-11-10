import { Categoria } from "../categorias";

export const CATEGORIA: Categoria[]=[
    {
        nombre: "Hamburguesas", 
        id:0, 
        imgUrl:"https://s1.abcstatics.com/media/gurme/2023/08/31/s/smash-burger.jpg-kbOC--420x236@abc.jpg",
        precio: 200,
        productos: [
            {
            id: 1,
             nombre: "Hamburguesa" ,
             precio: 20 ,
             imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQRcwJTVtr20cDfGeBb8QuUfSwbWO3NlNFoL_PYU8P0XoXw1ZhN8y7vE-wMa6S1ERNH4&usqp=CAU",
             ingredients:  ["Carne", "Pan", "Queso"]

            },

            {
                id: 2,
                nombre: "Quesoeplosivo",
                precio: 30,
                imagen: "https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg" ,
                ingredients: ["Carne", "Pan", " Doble queso"]

            }
        ]
    
    },
    {
        nombre: "Pizzas", 
        id: 1, 
        imgUrl:"https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_600.jpg",
        precio: 2000,
        productos: [
            {
                id: 3,
                nombre: "Muzzarela",
                precio: 2100 ,
                imagen: "https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png",
                ingredients: ["Harina", "Queso", "Oregano"]

            },
            {
                id: 4,
                nombre: "Peperoni",
                precio: 2400 ,
                imagen: "https://2trendies.com/hero/2023/04/pizzapepperoni.jpg",
                ingredients: ["Harina", "Queso", "Peperoni"]

            },
            {
                id: 5,
                nombre: "Jamon",
                precio: 2500 ,
                imagen: "https://assets.unileversolutions.com/recipes-v2/244028.jpg",
                ingredients: ["Harina", "Queso", "Jamon"]

            }
        ]
    
    },
    
    {
        nombre: "Postres", 
        id:2, 
        imgUrl:"https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
        precio: 400,
        productos: [
            {
                id: 6,
                nombre: "Brownie",
                precio: 1400,
                imagen: "https://gastronomiaycia.republica.com/wp-content/photos/bizcocho_humedo_choco_anis4.jpg",
                ingredients: ["Chocolate" , "Manteca", "Harina"]
            },
            {
                id: 7,
                nombre: "Mouse de chocolate",
                precio: 1600,
                imagen: "https://lovefoodfeed.com/wp-content/uploads/2023/04/Tofu-dessert-recipes-px-1200-01.jpg",
                ingredients: ["Chocolate" , "Crema", "Mateca"]
            },
            {
                id: 8,
                nombre: "Flan",
                precio: 1100,
                imagen: "https://www.recetasnestle.com.co/sites/default/files/styles/webp/public/2022-05/postre.jpg.webp?itok=DUOmI_kV",
                ingredients: ["Vainilla" , "Huevos", "Caramelo"]
            }

        ]
    },
    
    
    {
        nombre:"Bebidas", 
        id:3, 
        imgUrl:"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b",
        precio: 1500, 
        productos: [
            {
                id: 9,
                nombre: "Daikiri",
                precio: 1200,
                imagen: "https://t1.uc.ltmcdn.com/es/posts/0/6/5/como_hacer_un_daiquiri_de_fresa_23560_orig.jpg",
                ingredients: ["Frutilla" , "Vodka", "Sprite"]
            },
            {
                id: 10,
                nombre: "Roncola",
                precio: 1500,
                imagen: "https://bebidasexquisitas.com/wp-content/uploads/2021/09/Receta-de-Ron-cola1.jpg",
                ingredients: ["CocaCola" , "Ron"]
            },
            {
                id: 11,
                nombre: "Margarita",
                precio: 1350,
                imagen: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_800_fallback/public/2023-03/margarita%C2%A9iStock.jpg?itok=Ir0T3tYT",
                ingredients: ["Jugo de limon" , "Vodka", "Limon"]
            }

        ]
    
    }

  ]

