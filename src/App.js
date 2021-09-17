import React from 'react'
import "./component/Basics/style.css"
import re2 from "./component/Basics/images/re2.png"
import re3 from "./component/Basics/images/re3.png"
import re4 from "./component/Basics/images/re4.png"
import re5 from "./component/Basics/images/re5.png"
import re6 from "./component/Basics/images/re6.png"
import re7 from "./component/Basics/images/re7.png"
import re8 from "./component/Basics/images/re8.png"
import re9 from "./component/Basics/images/re9.png"
import re10 from "./component/Basics/images/re10.png"
import re11 from "./component/Basics/images/re11.png"
import re12 from "./component/Basics/images/re12.png"
import re13 from "./component/Basics/images/re13.png"
import { useState } from 'react';

const App = () => {



  const refreshPage = () => {
    window.location.reload();
  }

  const [blogs, setBlogs] = useState([
    { title: <img src={re2} />, body: 'India, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east.', author: 'Jagrit', id: 1 },
    { title: <img src={re3} />, body: 'Afghanistan officially the Islamic Emirate of Afghanistan, is a landlocked country at the crossroads of Central and South Asia. It is bordered by Pakistan to the east and south, Iran to the west, Turkmenistan and Uzbekistan to the north, and Tajikistan and China to the northeast. Occupying 652,864 square kilometers (252,072 sq mi), the country is predominately mountainous with plains in the north and southwest.', author: 'Jagrit', id: 2 },
    { title: <img src={re4} />, body: 'Argentina officially the Argentine Republic is a country in the southern half of South America. It shares the bulk of the Southern Cone with Chile to the west, and is also bordered by Bolivia and Paraguay to the north, Brazil to the northeast, Uruguay and the South Atlantic Ocean to the east, and the Drake Passage to the south. Argentina covers an area of 2,780,400 km2 (1,073,500 sq mi), making it the largest Spanish-speaking nation in the world.', author: 'Jagrit', id: 3 },
    { title: <img src={re5} />, body: 'England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.', author: 'Jagrit', id: 4 },
    { title: <img src={re6} />, body: 'The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions. At 3.8 million square miles (9.8 million square kilometers), it is the worlds  third- or fourth-largest country by total area.', author: 'Jagrit', id: 5 },
    { title: <img src={re7} />, body: 'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country by area in Oceania and the worlds sixth-largest country. Australias population of nearly 26 million, in an area of 7,617,930 square kilometres (2,941,300 sq mi), is highly urbanised and heavily concentrated on the eastern seaboard.', author: 'Jagrit', id: 6 },
    { title: <img src={re8} />, body: 'Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Part of the Ring of Fire, Japan spans an archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is Japans capital and largest city.', author: 'Jagrit', id: 7 },
    { title: <img src={re9} />, body: 'Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the worlds second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the worlds longest bi-national land border. Canadas capital is Ottawa.', author: 'Jagrit', id: 8 },
    { title: <img src={re10} />, body: 'Ireland YRE-lənd; Irish: Éire [ˈeːɾʲə] (About this soundlisten); Ulster-Scots: Airlann [ˈɑːrlən]) is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St Georges Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest on Earth.', author: 'Jagrit', id: 9 },
    { title: <img src={re11} />, body: 'France, officially the French Republic is a transcontinental country spanning Western Europe and several overseas regions and territories. Its metropolitan area extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans.', author: 'Jagrit', id: 10 },
    { title: <img src={re12} />, body: 'Brazil (Portuguese: Brasil; Brazilian Portuguese: [bɾaˈziw]), officially the Federative Republic of Brazil (Portuguese: About this soundRepública Federativa do Brasil), is the largest country in both South America and Latin America. At 8.5 million square kilometers (3.2 million square miles) and with over 211 million people, Brazil is the worlds fifth-largest country by area and the sixth most populous. Its capital is Brasília, and its most populous city is São Paulo.', author: 'Jagrit', id: 11 },
    { title: <img src={re13} />, body: 'Bangladesh  Bengali: বাংলাদেশ, romanized: Bānlādēśa; pronounced [ˈbaŋlaˌdeʃ] (About this soundlisten)), officially the Peoples Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people, in an area of 148,560 square kilometres (57,360 sq mi),[8] making it one of the most densely populated countries in the world.', author: 'Jagrit', id: 12 },




  ]);



  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blogs => blogs.id !== id);
    setBlogs(newBlogs);
  }


  return (



    <div className="home1">
      <div className="navbar">
        <ul className="sec3">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Countries</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="sec2"><button onClick={refreshPage}><p>Refresh</p></button></div>
      <h2>{blogs.title}</h2>
      {blogs.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <h2>{blogs.title}</h2>
          <p className="sec1"> Written by {blogs.author}</p>
          <p>About- {blogs.body}</p>
          <button onClick={() => handleDelete(blogs.id)}> Delete blog</button>
        </div>

      ))}

    </div>
  );
}

export default App
