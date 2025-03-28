// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import BYUSpeech from "./speech.tsx";

// function Topics() {
//   const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
//   // const [speeches, setSpeeches] = useState<(typeof BYUSpeech)[]>([]);
//   const navigate = useNavigate();

//   const handleClick = async (topic: string) => {
//     setSelectedTopic(topic);

//     const response = await fetch(
//       `https://localhost:5000/Speech?topic=${encodeURIComponent(topic)}`
//     );
//     const data = await response.json();
//     // setSpeeches(data);
//   };

//   return (
//     <>
//       <h1>Topics</h1>

//       <div>
//         <img
//           src="../img/jesus.webp"
//           alt="Jesus Christ"
//           onClick={() => handleClick("Jesus")}
//         />
//         <p>Jesus Christ</p>

//         <img
//           src="../img/church_logo.png"
//           alt="Core Beliefs"
//           onClick={() => handleClick("Beliefs")}
//         />
//         <p>Core Beliefs</p>

//         <img
//           src="../img/faith.jpg"
//           alt="Faith"
//           onClick={() => handleClick("Faith")}
//         />
//         <p>Faith</p>

//         <img
//           src="../img/repentance.png"
//           alt="Repentance"
//           onClick={() => handleClick("Repentance")}
//         />
//         <p>Repentance</p>

//         <img
//           src="../img/baptism.png"
//           alt="Baptism"
//           onClick={() => handleClick("Baptism")}
//         />
//         <p>Baptism</p>

//         <img
//           src="../img/temple.png"
//           alt="Temple"
//           onClick={() => handleClick("Temple")}
//         />
//         <p>Temple</p>

//         <img
//           src="../img/jesus.webp"
//           alt="Prayer"
//           onClick={() => handleClick("Prayer")}
//         />
//         <p>Prayer</p>

//         <img
//           src="../img/jesus.webp"
//           alt="Church History"
//           onClick={() => handleClick("History")}
//         />
//         <p>Church History</p>
//       </div>

//       {selectedTopic && (
//         <>
//           <h2>Speeches on "{selectedTopic}"</h2>
//           {speeches.length === 0 ? (
//             <p>No speeches found.</p>
//           ) : (
//             <ul>
//               {speeches.map((s) => (
//                 <li
//                   key={s.speechId}
//                   // onClick={() => navigate(`speech?speechId=${s.speechId}`)}
//                 >
//                   <strong>{s.title}</strong> by {s.speaker} ({s.dateSpeechGiven}
//                   )
//                 </li>
//               ))}
//             </ul>
//           )}
//         </>
//       )}
//     </>
//   );
// }

// export default Topics;

import { useState } from "react";
// import "../App.css";
import faithImage from "../img/faith.jpg";

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [speeches, setSpeeches] = useState<any[]>([]); // Adjusted type to any[]
  const [loading, setLoading] = useState<boolean>(false); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track errors

  // Handles click on a topic
  const handleClick = async (topic: string) => {
    setSelectedTopic(topic); // Set selected topic
    setLoading(true); // Set loading state
    setError(null); // Reset error state

    try {
      // Fetch speeches related to the selected topic
      const response = await fetch(
        `https://localhost:5000/Speech?topic=${encodeURIComponent(topic)}`
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch speeches.");
      }

      const data = await response.json();

      // Check if data is an array, indicating we received the correct format
      if (Array.isArray(data)) {
        setSpeeches(data); // Set the speeches state with the fetched data
      } else {
        throw new Error("Invalid data format received.");
      }
    } catch (err) {
      setError("An error occurred while fetching speeches. Please try again."); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <h1>Topics</h1>
      <div>
        <img
          height={200}
          src="/src/img/jesus.webp"
          alt="Jesus Christ"
          onClick={() => handleClick("Jesus")}
        />
        <p>Jesus Christ</p>

        <img
          height={200}
          src="/src/img/church_logo.png"
          alt="Core Beliefs"
          onClick={() => handleClick("Beliefs")}
        />
        <p>Core Beliefs</p>
        <img
          height={200}
          src="/src/img/faith.jpg"
          alt="Faith"
          onClick={() => handleClick("Faith")}
        />
        <p>Faith</p>

        <img
          height={200}
          src="/src/img/Repentance.png"
          alt="Repentance"
          onClick={() => handleClick("Repentance")}
        />
        <p>Repentance</p>

        <img
          height={200}
          src="/src/img/baptism.png"
          alt="Baptism"
          onClick={() => handleClick("Baptism")}
        />
        <p>Baptism</p>

        <img
          height={200}
          src="/src/img/washington_dc_temple.webp"
          alt="Temple"
          onClick={() => handleClick("Temple")}
        />
        <p>Temple</p>

        <img
          height={200}
          src="/src/img/jesus.webp"
          alt="Prayer"
          onClick={() => handleClick("Prayer")}
        />
        <p>Prayer</p>

        <img
          height={200}
          src="/src/img/service.jpeg"
          alt="Service"
          onClick={() => handleClick("Service")}
        />
        <p>Service</p>
      </div>

      {selectedTopic && (
        <>
          <h2>Speeches on "{selectedTopic}"</h2>
          {loading && <p>Loading speeches...</p>}{" "}
          {/* Display loading message */}
          {error && <p>{error}</p>} {/* Display error message */}
          {speeches.length === 0 && !loading && !error ? (
            <p>No speeches found.</p> // If there are no speeches and not loading
          ) : (
            <ul>
              {speeches.map(
                (
                  s: any // Assuming the type of speech is 'any'
                ) => (
                  <li key={s.speechId}>
                    <strong>{s.speechTitle}</strong> by {s.speaker} (
                    {s.dateSpeechGiven})
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </>
  );
}

export default Topics;
