const vinos = [
    {
        id: 1,
        nombre: 'Vino Tinto',
        precio: 30.30,
        categoria_id: 1
    },
    {
        id: 2,
        nombre: 'Vino Espumoso',
        precio: 20.30,
        categoria_id:1
    },
    {
        id: 3,
        nombre: 'Vino de Manzana',
        precio: 30.01,
        categoria_id:1
    },
    {
        id: 4,
        nombre: 'Vino Blanco',
        precio: 34.37,
        categoria_id:1
    },
    {
        id: 5,
        nombre: 'Vino Rosado',
        precio: 50,
        categoria_id:1
    },
    {
        id: 6,
        nombre: 'Vino Moscatel',
        precio: 60.03,
        categoria_id:1
    },
    {
        id: 7,
        nombre: 'Vino chileno',
        precio: 73.09,
        categoria_id:1
    },
    {
        id: 8,
        nombre: 'Vino italiano',
        precio: 80,
        categoria_id:1
    },
    {
        id: 9,
        nombre: 'Vino español',
        precio: 45.32,
        categoria_id:1
    },
]

const sanduches = [
    {
        id: 1,
        nombre: 'Pollo picado',
        precio: 10.23,
        categoria_id:2
    },
    {
        id: 2,
        nombre: 'RoastBeef',
        precio: 11.20,
        categoria_id:2
    },
    {
        id: 3,
        nombre: 'Pavo',
        precio: 13.23,
        categoria_id:2
    },
    {
        id: 4,
        nombre: 'Jamón de cerdo',
        precio: 12.45,
        categoria_id:2
    },
    {
        id: 5,
        nombre: 'Huevo',
        precio: 12.50,
        categoria_id:2
    },
    {
        id: 6,
        nombre: 'Vegano',
        precio: 13.54,
        categoria_id:2
    },
    {
        id: 7,
        nombre: 'Chicharrón',
        precio: 16.10,
        categoria_id:2
    },
    {
        id: 8,
        nombre: 'Jamón de pavo',
        precio: 18.80,
        categoria_id:2
    },
    {
        id: 9,
        nombre: 'Pollo apanado',
        precio: 17.90,
        categoria_id:2
    },
]

const cupcakes = [
    {
        id: 1,
        nombre: 'Cupcakes 1',
        precio: 10,
        categoria_id:3
    },
    {
        id: 2,
        nombre: 'Cupcakes 2',
        precio: 20,
        categoria_id:3
    },
    {
        id: 3,
        nombre: 'Cupcakes 3',
        precio: 30,
        categoria_id:3
    },
    {
        id: 4,
        nombre: 'Cupcakes 4',
        precio: 40,
        categoria_id:3
    },
    {
        id: 5,
        nombre: 'Cupcakes 5',
        precio: 50,
        categoria_id:3
    },
    {
        id: 6,
        nombre: 'Cupcakes 6',
        precio: 60,
        categoria_id:3
    },
    {
        id: 7,
        nombre: 'Cupcakes 7',
        precio: 70,
        categoria_id:3
    },
    {
        id: 8,
        nombre: 'Cupcakes 8',
        precio: 80,
        categoria_id:3
    },
    {
        id: 9,
        nombre: 'Cupcakes 9',
        precio: 90,
        categoria_id:3
    },
]
const bodas=[
    {
    id:1,
    nombre:'Sánduches y tostadas',
    precio: 600.80,
    categoria_id:4
    },
    {
        id:1,
        nombre:'Sánduches y tostadas',
        precio: 600.80,
        categoria_id:4
        },
        {
         id:2,
         nombre:'SCupcakes y magdalenas',
        precio: 780.80,
        categoria_id:4
     },
        {
        id:3,
        nombre:'Red Velvets',
        precio: 89.80,
        categoria_id:4
        },
    {
        id:4,
        nombre:'Sánduches y tostadas',
        precio: 600.80,
        categoria_id:4
    },
    {
        id:5,
        nombre:'Gourmet',
        precio: 800.80,
        categoria_id:4
    }

]
const categorias=[
    {
        categoria_id: 1,
        urlImg: "https://img.freepik.com/fotos-premium/vasos-vino-tinto-catering-eventos_367038-1789.jpg",
        nombre: 'Vinos'
    },
    {
        categoria_id: 2,
        urlImg: "https://www.schlotzskys.com/-/media/schlotzskys/catering/catering-lp-partytrays-menu_card_874x440.jpg?v=1&d=20190927T214633Z&la=en&h=440&w=874&hash=E6F93096A2B2C876B58A8C9C5936E12F",
        nombre: 'Sanduches'
    },
    {
        categoria_id: 3,
        urlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdotOWSqKScqcqOhdmBRUxMMVvPUlbijulsA&s",
        nombre: 'Cupcakes'
    },
    {
        categoria_id:4,
        urlImg:'',
        nombre:'bodas'
    }
]
module.exports = {
    vinos,
    sanduches,
    cupcakes,
    bodas,
    categorias
}