import React, { useState, useEffect } from 'react';
import './Rezeptkarussell.css';

const Rezeptkarussell = ({ country }) => {
  const [currentRecipes, setCurrentRecipes] = useState([0, 1, 2]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const recipesByCountry = {
    "Arabische Gerichte": [
      {
        name: "Falafel",
        description: "Köstliche frittierte Bällchen aus Kichererbsen mit würzigen Aromen.",
        image: "https://beat.com.au/wp-content/uploads/2019/07/falafel.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "Hummus",
        description: "Cremige Kichererbsenpaste mit Knoblauch, Zitronensaft und Tahini.",
        image: "https://www.heilpraxisnet.de/wp-content/uploads/2016/11/Hummus-Mineralstoffe.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "dddd",
        description: "Köstliche frittierte Bällchen aus Kichererbsen mit würzigen Aromen.",
        image: "https://beat.com.au/wp-content/uploads/2019/07/falafel.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "ggg",
        description: "Cremige Kichererbsenpaste mit Knoblauch, Zitronensaft und Tahini.",
        image: "https://www.heilpraxisnet.de/wp-content/uploads/2016/11/Hummus-Mineralstoffe.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "324234324",
        description: "Köstliche frittierte Bällchen aus Kichererbsen mit würzigen Aromen.",
        image: "https://beat.com.au/wp-content/uploads/2019/07/falafel.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "324",
        description: "Cremige Kichererbsenpaste mit Knoblauch, Zitronensaft und Tahini.",
        image: "https://www.heilpraxisnet.de/wp-content/uploads/2016/11/Hummus-Mineralstoffe.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      }
    ],
    "Serbische Gerichte": [
      {
        name: "Sarma",
        description: "Gegrillte Hackfleischwürstchen, serviert mit Brot und Zwiebeln.",
        image: "https://mystischereisen.de/wp-content/uploads/2020/04/Sarma-.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "123123",
        description: "Paprika-Dip aus gerösteten roten Paprikaschoten und Auberginen.",
        image: "https://www.grillkameraden.de/wp-content/uploads/2022/03/AdobeStock_458483311-2048x1365.jpeg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "2324234",
        description: "Paprika-Dip aus gerösteten roten Paprikaschoten und Auberginen.",
        image: "https://www.grillkameraden.de/wp-content/uploads/2022/03/AdobeStock_458483311-2048x1365.jpeg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "ergreg",
        description: "Paprika-Dip aus gerösteten roten Paprikaschoten und Auberginen.",
        image: "https://www.grillkameraden.de/wp-content/uploads/2022/03/AdobeStock_458483311-2048x1365.jpeg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "regregregeg",
        description: "Paprika-Dip aus gerösteten roten Paprikaschoten und Auberginen.",
        image: "https://www.grillkameraden.de/wp-content/uploads/2022/03/AdobeStock_458483311-2048x1365.jpeg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      }
    ],
    "Italienische Gerichte": [
      {
        name: "Pizza Margherita",
        description: "Klassische Pizza mit Tomatensoße, Mozzarella und Basilikum.",
        image: "https://www.scattidigusto.it/wp-content/uploads/2017/09/I-Masanielli-Martucci-Sasa-pizza-margherita.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "Risotto",
        description: "Cremiges Reisgericht, gekocht mit Brühe und verfeinert mit Parmesan.",
        image: "https://th.bing.com/th/id/R.bc89904e0959e096aabfac27051b082f?rik=RBc%2b0sUjIn5vzg&pid=ImgRaw&r=0",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "TESf",
        description: "Klassische Pizza mit Tomatensoße, Mozzarella und Basilikum.",
        image: "https://www.scattidigusto.it/wp-content/uploads/2017/09/I-Masanielli-Martucci-Sasa-pizza-margherita.jpg",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "regr",
        description: "Cremiges Reisgericht, gekocht mit Brühe und verfeinert mit Parmesan.",
        image: "https://th.bing.com/th/id/R.bc89904e0959e096aabfac27051b082f?rik=RBc%2b0sUjIn5vzg&pid=ImgRaw&r=0",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      },
      {
        name: "Test 1",
        description: "Test 1 Description",
        image: "https://via.placeholder.com/150",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      
      },
      {
        name: "Test 2",
        description: "Test 2 Description",
        image: "https://via.placeholder.com/150",
        qrCode: require('../qrCodes/arabisch-falafel-qr-code.png').default
      }
    ],
    // Weitere Länder mit ihren Rezepten hinzufügen...
  };

  useEffect(() => {
    const recipesForCountry = recipesByCountry[country];
    if (recipesForCountry) {
      const totalRecipes = recipesForCountry.length;
  
      const getRandomUniqueRecipeIndices = () => {
        let indices = [];
        while (indices.length < 3) {
          const randomIndex = Math.floor(Math.random() * totalRecipes);
          if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
          }
        }
        return indices;
      };
  
      const timer = setTimeout(() => {
        const uniqueIndices = getRandomUniqueRecipeIndices();
        const firstRecipeIndex = uniqueIndices[0];
        const secondRecipeIndex = uniqueIndices[1];
        const thirdRecipeIndex = uniqueIndices[2];
        setCurrentRecipes([firstRecipeIndex, secondRecipeIndex, thirdRecipeIndex]);
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [country, recipesByCountry]);
  
  
  
  

  return (
    <div className="rezeptkarussell">
      <h2>{country}</h2>
      {currentRecipes.map(index => (
        <div key={index} className="rezept">
          <img src={recipesByCountry[country][index].image} alt={recipesByCountry[country][index].name} />
          <div className="rezept-details">
            <h3>{recipesByCountry[country][index].name}</h3>
            <p>{recipesByCountry[country][index].description}</p>
            <img src={recipesByCountry[country][index].qrCode} alt="QR Code" className="qr-code-bild" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rezeptkarussell;
