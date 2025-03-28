import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Topics () {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [speeches, setSpeeches] = useState<BYUSpeech[]>([]);
const navigate = useNavigate();


  const handleClick = async (topic: string) => {
    setSelectedTopic(topic);

    const response = await fetch(`https://localhost:5000/Speech?topic=${encodeURIComponent(topic)}`);
    const data = await response.json();
    setSpeeches(data);
  };

return(
<>
 <h1>Topics</h1>

<div>
<img src="./img/jesus.webp" alt="Jesus Christ" onClick={() => handleClick('Jesus')} />
<p>Jesus Christ</p>

<img src="./img/church_logo.png" alt="Core Beliefs" onClick={() => handleClick('Beliefs')} />
<p>Core Beliefs</p>

<img src="./img/faith.png" alt="Faith" onClick={() => handleClick('Faith')} />
<p>Faith</p>

<img src="./img/repentance.png" alt="Repentance" onClick={() => handleClick('Repentance')} />
<p>Repentance</p>

<img src="./img/baptism.png" alt="Baptism" onClick={() => handleClick('Baptism')} />
<p>Baptism</p>

<img src="./img/temple.png" alt="Temple" onClick={() => handleClick('Temple')} />
<p>Temple</p>

<img src="./img/jesus.webp" alt="Prayer" onClick={() => handleClick('Prayer')} />
<p>Prayer</p>

<img src="./img/jesus.webp" alt="Church History" onClick={() => handleClick('History')} />
<p>Church History</p>
</div>


{selectedTopic && (
        <>
          <h2>Speeches on "{selectedTopic}"</h2>
          {speeches.length === 0 ? (
            <p>No speeches found.</p>
          ) : (
            <ul>
              {speeches.map((s) => (
                <li key={s.speechId} onClick={() => navigate(`speech?speechId=${s.speechId}`)}>
                  <strong>{s.title}</strong> by {s.speaker} ({s.dateSpeechGiven})
                </li>

              ))}
            </ul>
          )}
             </>

)}
          
</>
);
}

export default Topics;
