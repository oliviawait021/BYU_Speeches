// import { useEffect, useState } from 'react';
// import { topics } from './topics.ts';

function Topics () {
    return (
        <>
            <h1>Topics</h1>

          {/* {topics.map((t) => (
  <div key={t.bowlerId}>
    <img src={`${t.topicImage}.jpeg`} alt="T" />
    {t.topicName}
  </div>
))} */}


        </>
    )
}

export default Topics;





function BowlerList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);
  
    useEffect(() => {
      const fetchBowler = async () => {
        const response = await fetch('https://localhost:5000/api/Bowler');
        const data = await response.json();
        setBowlers(data);
      };
      fetchBowler();
    }, []);