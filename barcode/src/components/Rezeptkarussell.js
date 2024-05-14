import React, { useState, useEffect } from 'react';
import './Rezeptkarussell.css';


const Rezeptkarussell = ({ country }) => {
  const [currentRecipes, setCurrentRecipes] = useState([]);

  const recipesByCountry = {
    "Arabische Gerichte": [
      {
        name: "Falafel",
        description: "Falafel is a deep-fried ball or patty made from ground chickpeas, fava beans, or both.",
        image: "https://beat.com.au/wp-content/uploads/2019/07/falafel.jpg",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3lT3&Expires=1715777403&Signature=p2s8AI~9PYcxlMm-qSkix5Vkc9j1mtTJPN8HaNv5pW7-Y78wXLSjxbe-MeuyAgLJRXUJatWBbhJ-XLAMaCrpjNJpUMW5clD3Ie9j1N9MrEaFpAxAmZLmNd72h-exhLHR1dcQee4wXz5lwLf2nw04wSjONzoH3T5BZQokMhrkyTJhGyhN5Fv43IMvclFZz7X3PNCXf695S1-8jeQ7v1r-77-2wjDWHl8bG3xWdpaF6BF9CCTZOZiQYEvoQxTeGQChennaZaZy7aAu8I5-Js8Z13RNencFb4-fppBe1XdqHssP3rszWg-i0ukB5tyPcJ0khrFxkKGrVSrA~Bd8jK1qXQ__&Key-Pair-Id=KKMPOJU8AYATR",
      },

      {
        name: "Hummus",
        description: "Hummus is a Levantine dip or spread made from cooked, mashed chickpeas or other beans, blended with tahini, olive oil, lemon juice, salt, and garlic.",
        image: "https://www.heilpraxisnet.de/wp-content/uploads/2016/11/Hummus-Mineralstoffe.jpg",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3lz3&Expires=1715779045&Signature=KqGZnzeIB6-aXsYhE7XXCu0e6sC47FN9psQbqJ~ZyCDgj1svTXMPi~OE2v6ZpLDiP~fveSKerJylgT44TNe~ZU9crRkLBl-BVEt~V2Paah8hyKL637WBJq7Cwv6wnJ5QxJo0thddDdFVzq8sbHwSLWefeMpxci5Kc7RM-GAIB2wExanFhL7CEcKx-Ao0n3oj5Et1xU~sGQSPVqeuOsljjqWbL-54Z04Yxh7BjfZLwrkxn8AWjGzVMXytM7h5FfwO070WAcZtjHsBxpB3HuB24TM8Mf6feJ5af6xC0D0QYk5A0R6EcSn1HYyDrKx4mfkqJz53LgLHTUS1~IokGmOgcg__&Key-Pair-Id=KKMPOJU8AYATR",
      },
      
    ],
    "Serbische Gerichte": [
      {
        name: "Ćevapi",
        description: "Ćevapi is a grilled dish of minced meats, a type of kebab, found traditionally in the countries of southeastern Europe.",
        image: "https://mystischereisen.de/wp-content/uploads/2020/04/Sarma-.jpg",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3m23&Expires=1715779206&Signature=ws5dneZu6Z~VBv9dSEtHQVCqBLSMrxFQtYFqaldVtlRtf~WmPee2QQTm5uDqVG2rj0HkmwZ48rgwyeBwFMmosbWul3EuMjx2vJSlXzU~DwGczxF4bOTht0mcpHs-Ir-CMClvunCS8Slr9B1xMUxgweSbAtx9Zgsaj1heS~UPVehbReJ5YfYCe~dOsxr8gNzfPT~prrJWcP-l0WxqJ9mHHqKE4GPqDc2DlBpWe5cGC4xtH70WPUiwX0~kh9bHz7MuFoFkHhwhIX1j90NOKgRAb1DNwQbzS50qq4gBOCzSOq0pVCzba02bCUKR6A9Arpt6V36E61gMam6FzzMS03fgoQ__&Key-Pair-Id=KKMPOJU8AYATR",
      },
      {
        name: "Ajvar",
        description: "Ajvar is a roasted red pepper and eggplant relish, often made with garlic, that is common in the cuisines of the former Yugoslavia.",
        image: "https://www.grillkameraden.de/wp-content/uploads/2022/03/AdobeStock_458483311-2048x1365.jpeg",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3m2d&Expires=1715779246&Signature=KeqQiHH1XCzHkqpSKrtsxbUfQFD7KJ8M~TXMqU1xMADnNcI5hC5hAp2AryZ3V-6wMlcT1AJ6H8Ya6LukCRejswPnyDPCGOk0~~dcmsOVy4FCPeT2WmzxF0kgUKAGAZtaT7fabmzcg-zlHmnJd7P-S9ky3yFHnZhFRjK9PFnbfkRMOoLYUlKwD4SHOdfM7CN33-ZkyaT1MgYp6ZMX17Ir5BclpjtsJ7lFsgClWNVVzwExDVmxadJHMvzBieYaq0~xawRy~jT2PuAsWOZxUDFjcZU0CHKz3OohbgNJw8baXqF2LUigl6kLbIfY1iCFWWd5WC10goqcTQbTbkX9fP0qig__&Key-Pair-Id=KKMPOJU8AYATR",
      },
      // ...
    ],
    "Italienische Gerichte": [
      {
        name: "Pizza Margherita",
        description: "Pizza Margherita is a style of pizza that is named after Queen Margherita of Savoy.",
        image: "https://www.scattidigusto.it/wp-content/uploads/2017/09/I-Masanielli-Martucci-Sasa-pizza-margherita.jpg",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3m0g&Expires=1715779119&Signature=AYY7~2TnswcgQKVQupJcrGJx3AqyKg0NBy3XDM70Om2BQrhUHrKGynjBnCiq4bFkyvoOurtQLqQOlQ9hNPX8VtWos3Xe1AECMTBn2MjY8EslU9WMshmyLaFboCYTStwO17N90LTQVV5lfejqKY6XOe5eQJsAwWguLNCY~8~EInmAJ63x7v~lCY~KJEoj3U9p1btKSNyNWmUIPaw6zPax9JzLkffVru9~YymsMPGNrYWPYeomOFYO6ohnYIMusWpHiY4JfV4MBqfmZq7lqC~csGGUi~8A0I0KguN9CeyWgQlC9pentNRlwtllwK5O1VV66VHbOz55MpXqgtMyEgCHyA__&Key-Pair-Id=KKMPOJU8AYATR",
      },
      {
        name: "Risotto",
        description: "Pasta Carbonara is an Italian pasta dish from Rome made with eggs, cheese, bacon, and pepper.",
        image: "https://th.bing.com/th/id/R.bc89904e0959e096aabfac27051b082f?rik=RBc%2b0sUjIn5vzg&pid=ImgRaw&r=0",
        qrCode: "https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2Fbf3m1R&Expires=1715779161&Signature=gt4BKtpFfnihUyD~H-zOVKu2mlZ5lzhM5pkFq7ghcdVVUQUmgsofczeAcGjK-qgyVlPUreAoZB5mKN6xfhVPf7du2D9~azOXJy4DokkLwzW~zbWHlaYDK9zax81v65WSQ~zry4-WFrfKERHSTgpC3gkAVjOQKFm10r1TI5BWFIKZP3E5Z7til~4ym4JiToMDS2hYOpWE5dBj1sVv5vuVYOzzECEfkdnpSci~I11DPJf6lErWd5Z6HLvafLDszESmfA2CW0L1WVsR3CmCAmFwGAJ87Q-LY3L7z1Xutt4q12YivPP9AhfYCB9oNWs091TIp406PLLljs9Ab4P~SDovzw__&Key-Pair-Id=KKMPOJU8AYATR",
      },
      // ...
    ],
    // ...
  };

  useEffect(() => {
    const recipesForCountry = recipesByCountry[country];
    if (recipesForCountry) {
      const totalRecipes = recipesForCountry.length;
      const getRandomUniqueRecipeIndices = () => {
        let indices = [];
        while (indices.length < 2) {
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
        setCurrentRecipes([recipesForCountry[firstRecipeIndex], recipesForCountry[secondRecipeIndex]]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [country, recipesByCountry]);

  return (
    <div className="rezeptkarussell">
      <h2>{country}</h2>
      {currentRecipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <img src={recipe.image} alt={recipe.name} />
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
          <img src={recipe.qrCode} alt="QR Code" />
        </div>
      ))}
    </div>
  );
};

export default Rezeptkarussell;