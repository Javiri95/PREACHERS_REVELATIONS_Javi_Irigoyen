const data = {
    weapons : [
      {
        name: 'Sword of Destiny',
        type: 'sword',
        alignment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral"],
        damage: 50,
        weight: 10,
        durability: 80,
        level: 20,
        price: 2032,
      },
      {
        name: 'Mace of Chaos',
        type: 'mace',
        alignment: ["Neutral Evil", "Chaotic Evil"],
        damage: 70,
        weight: 15,
        durability: 50,
        level: 25,
        price: 3020,
      },
      {
        name: 'Axe of Fury',
        type: 'axe',
        alignment: ["Lawful Good"],
        damage: 60,
        weight: 12,
        durability: 70,
        level: 22,
        price: 2500,
      },
      {
        name: 'Hammer of the Gods',
        type: 'hammer',
        alignment: ["Neutral Evil", "Lawful Good"],
        damage: 75,
        weight: 18,
        durability: 60,
        level: 30,
        price: 3500,
      },
      {
        name: 'Dagger of Shadows',
        type: 'dagger',
        alignment: ["Chaotic Neutral"],
        damage: 40,
        weight: 5,
        durability: 90,
        level: 18,
        price: 1500,
      },
      {
        name: 'Longbow of Accuracy',
        type: 'bow',
        alignment: ["Neutral Evil", "Chaotic Neutral", "Lawful Good"],
        damage: 55,
        weight: 8,
        durability: 75,
        level: 23,
        price: 2800,
      },
      {
        name: 'Staff of Arcane',
        type: 'staff',
        alignment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
        damage: 65,
        weight: 11,
        durability: 80,
        level: 28,
        price: 9202,
      },
      {
        name: 'Morningstar of Havoc',
        type: 'mace',
        alignment: ["Chaotic Evil"],
        damage: 80,
        weight: 20,
        durability: 40,
        level: 36,
        price: 4190,
      },
      {
        name: 'Greatsword of Glory',
        type: 'sword',
        alignment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
        damage: 65,
        weight: 14,
        durability: 70,
        level: 27,
        price: 3000,
      },
      {
        name: 'Battleaxe of Vengeance',
        type: 'axe',
        alignment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral"],
        damage: 70,
        weight: 16,
        durability: 65,
        level: 30,
        price: 3500,
      },
      {
        name: 'Javelin of Thunder',
        type: 'spear',
        alignment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
        damage: 45,
        weight: 7,
        durability: 85,
        level: 20,
        price: 2000,
      },
      {
        name: 'Flail of Devastation',
        type: 'mace',
        alignment: ["Chaotic Evil"],
        damage: 85,
        weight: 22,
        durability: 35,
        level: 40,
        price: 4500,
      },
    ],
    epicHeroes : [
      {
        name: "Arthur Pendragon",
        alias: "King Arthur",
        gold: 5000,
        weight: 80,
        tall: 185,
        level: 20,
        alignment: "Lawful Good",
        armor: [
          { name: "Helm of Pendragon", defense: 10 },
          { name: "Gauntlets of Might", defense: 8 },
          { name: "Breastplate of the Round Table", defense: 15 },
          { name: "Legplates of Camelot", defense: 12 },
          { name: "Boots of Excalibur", defense: 5 }
        ]
      },
      {
        name: "Lancelot du Lac",
        alias: "Sir Lancelot",
        gold: 4000,
        weight: 85,
        tall: 180,
        level: 15,
        alignment: "Lawful Good",
        armor: [
          { name: "Helm of the Holy Grail", defense: 12 },
          { name: "Gauntlets of Valour", defense: 9 },
          { name: "Breastplate of the White Knight", defense: 17 },
          { name: "Legplates of the Questing Beast", defense: 14 },
          { name: "Boots of the Lady of the Lake", defense: 6 }
        ]
      },
      {
        name: "Morgana le Fay",
        alias: "Morgana",
        gold: 17300,
        weight: 60,
        tall: 170,
        level: 25,
        alignment: "Neutral Evil",
        armor: [
          { name: "Helm of Shadows", defense: 8 },
          { name: "Gloves of Venom", defense: 5 },
          { name: "Corset of Nightmares", defense: 12 },
          { name: "Leggings of Deceit", defense: 10 },
          { name: "Boots of Illusion", defense: 4 }
        ]
      },
      {
        name: "Gawain",
        alias: "Sir Gawain",
        gold: 8452,
        weight: 75,
        tall: 183,
        level: 30,
        alignment: "Chaotic Evil",
        armor: [
          { name: "Helm of the Green Knight", defense: 11 },
          { name: "Gauntlets of Courage", defense: 7 },
          { name: "Breastplate of the Lionheart", defense: 14 },
          { name: "Legplates of the Giant of St. Michael's Mount", defense: 12 },
          { name: "Boots of the Four Winds", defense: 5 }
        ]
      },
      {
        name: "Gareth",
        alias: "Sir Gareth",
        gold: 3500,
        weight: 70,
        tall: 180,
        level: 15,
        alignment: "Chaotic Neutral",
        armor: [
          { name: "Helm of the Red Knight", defense: 10 },
          { name: "Gauntlets of Prowess", defense: 6 },
          { name: "Breastplate of the Lady of the Red Castle", defense: 13 },
          { name: "Legplates of the Ogre of the South", defense: 11 },
          { name: "Boots of the Mountain of Fire", defense: 4 }
        ]
      },
      {
        name: "Erudite Pendragon",
        alias: "King Erudite",
        gold: 6270,
        weight: 80,
        tall: 185,
        level: 22,
        alignment: "Chaotic Evil",
        armor: [
          { name: "Helm of Erudite", defense: 10 },
          { name: "Gauntlets of Erudite", defense: 8 },
          { name: "Breastplate of the Round Erudite", defense: 15 },
          { name: "Legplates of Erudite", defense: 12 },
          { name: "Boots of Erudite", defense: 5 }
        ]
      },
      {
        name: "Lucretia du Lac",
        alias: "Miss Lucretia",
        gold: 7400,
        weight: 85,
        tall: 180,
        level: 25,
        alignment: "Chaotic Neutral",
        armor: [
          { name: "Helm of the Holy Lucretia", defense: 12 },
          { name: "Gauntlets of Valour", defense: 9 },
          { name: "Breastplate of the White Lucretia", defense: 17 },
          { name: "Legplates of the Questing Beast", defense: 14 },
          { name: "Boots of the Lady of the Lake", defense: 6 }
        ]
      },
      {
        name: "Chonifer le Fay",
        alias: "Chonifer",
        gold: 8310,
        weight: 60,
        tall: 170,
        level: 35,
        alignment: "Chaotic Evil",
        armor: [
          { name: "Helm of ShaChoniferdows", defense: 8 },
          { name: "Gloves of Chonifer", defense: 5 },
          { name: "Corset of Chonifer", defense: 12 },
          { name: "Leggings of Deceit", defense: 10 },
          { name: "Boots of Illusion", defense: 4 }
        ]
      },
      {
        name: "Pariah",
        alias: "Sir Pariah",
        gold: 450,
        weight: 75,
        tall: 183,
        level: 10,
        alignment: "Chaotic Neutral",
        armor: [
          { name: "Helm of the Green Pariah", defense: 11 },
          { name: "Gauntlets of Pariah", defense: 7 },
          { name: "Breastplate of the Lionheart", defense: 14 },
          { name: "Legplates of the Giant of St. Michael's Mount", defense: 12 },
          { name: "Boots of the Four Winds", defense: 5 }
        ]
      },
      {
        name: "Believer",
        alias: "Sir Believer",
        gold: 4350,
        weight: 70,
        tall: 180,
        level: 23,
        alignment: "Chaotic Neutral",
        armor: [
          { name: "Helm of the Believer Knight", defense: 10 },
          { name: "Gauntlets of Believer", defense: 6 },
          { name: "Breastplate of the Lady of the Red Castle", defense: 13 },
          { name: "Legplates of the Ogre of the South", defense: 11 },
          { name: "Boots of the Mountain of Fire", defense: 4 }
        ]
      }
    ]
  }
  



  //1.- Mostrar listado de armas (nombre) y los alineamientos que pueden usarlas.
          console.log("1.");





          for (let i = 0; i < data.weapons.length; i++)
          {
              console.log("Armas : " + data.weapons[i].name + " / Sus alineamientos : " + data.weapons[i].alignment);
          }




          
        console.log("");






  //2.- mostrar el alias de los Héroes cuyo nivel es mayor que 20 y que su alineamiento contenga el término "Chaotic".
        console.log("2.");
            
        



        for (let i = 0; i < data.epicHeroes.length; i++)
          {
            if(data.epicHeroes[i].level > 20 && data.epicHeroes[i].alignment === "Chaotic");
             {
              console.log("Alias : " + data.epicHeroes[i].alias );
             }
          }
        





        console.log(""); 




  // 3.- Mostrar la lista de Héroes (nombre) y la suma total de defensa que proporciona la armadura.

     console.log("3.");
    console.log("Lista de Héroes"); 
    console.log("");
       for(let i = 0;i < data.epicHeroes.length; i++)
       { 
        console.log( "Héroe : " +  data.epicHeroes[i].name  );
       }

   console.log("");




 
let sumaDefensa = 0;

       for ( let i = 0 ; i < data.epicHeroes.length ; i++)
       {
        for (let k = 0 ; k < data.epicHeroes[i].armor.length; k++)
        { 
         for(let j = 0; j < data.epicHeroes[i].armor[k].defense; j++)


           sumaDefensa ++;  
          
        }
       } 
     
  console.log( "La suma total de defensa que proporcionan lar armaduras es : " + sumaDefensa);



  console.log("");



       const heroes = data.epicHeroes;

       heroes.forEach(hero => {
         console.log(`El héroe es : ${hero.name}`);
         let defense = 0;
         hero.armor.forEach(armor => {
          defense += armor.defense;
         })
         console.log(`La defensa total del héroe es ${defense}`);
       })



    

  console.log("");



  //4.- Mostrar la lista de armas que puede utilizar el Héroe alias "Chonifer" siempre y cuando pueda pagarlas con el oro que dispone. 
    console.log("4.");
    


       
      for( i = 0 ; i < data.weapons.length;  i++)
      {
        if(data.weapons[i].price < data.epicHeroes[7].gold)
        {
          console.log( "Weapon availables for Chonifer : " + data.weapons[i].name);
        }
      }





    console.log("");
  //Los artículos se irán comprando en el orden en el que están expuestos. Mostrar el oro restante.
  console.log("4.1");

    
    let kont = data.epicHeroes[7].gold - data.weapons[0].price ;
    
   console.log(kont + " es el dinero restante por comprar : " + data.weapons[0].name );

    let kont2 = kont - data.weapons[1].price;

  console.log(kont2 + " es el dinero restante por comprar : " + data.weapons[1].name );

   let kont3 = kont2 - data.weapons[2].price;

   console.log(kont3 + " es el dinero restante por comprar : " + data.weapons[2].name );

   console.log(data.weapons[2].name + " es la última arma que se podrá comprar con el oro disponible")

   




  console.log("");







  //5.- Mostrar todas las piezas de armadura con su defensa, sin repeticiones.
  console.log("5.");


  

    for ( let i = 0 ; i < data.epicHeroes.length ; i++)
    {
     for (let k = 0 ; k < data.epicHeroes[i].armor.length; k++)
     {

      console.log( "Armor name : " + data.epicHeroes[i].armor[k].name + " ///  Armor defense : " + data.epicHeroes[i].armor[k].defense);
     }
       
    }


  console.log("");

  
 
 

 

