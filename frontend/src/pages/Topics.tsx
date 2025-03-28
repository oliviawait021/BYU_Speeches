// import { useEffect, useState } from "react";
// // import "../App.css";

// function Topics() {
//   const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
//   const [speeches, setSpeeches] = useState<any[]>([]); // Adjusted type to any[]
//   const [loading, setLoading] = useState<boolean>(false); // Track loading state
//   const [error, setError] = useState<string | null>(null); // Track errors

//   useEffect(() => {
//     setLoading(true);
//     setError("");

//     fetch("https://localhost:5276/Speech") // Fetches all speeches
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched speeches:", data); // Debugging
//         setSpeeches(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching speeches:", error);
//         setError(error.message);
//       })
//       .finally(() => setLoading(false));
//   }, []); // Runs once when the component mounts

//   // Handles click on a topic
//   const handleClick = async (topic: string) => {
//     setSelectedTopic(topic); // Set selected topic
//     setLoading(true); // Set loading state
//     setError(null); // Reset error state

//     useEffect(() => {
//       setLoading(true);
//       setError("");

//       fetch("https://localhost:5276/Speech") // Fetches all speeches
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Fetched speeches:", data); // Debugging
//           setSpeeches(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching speeches:", error);
//           setError(error.message);
//         })
//         .finally(() => setLoading(false));
//     }, []); // Runs once when the component mounts

//     try {
//       // Fetch speeches related to the selected topic
//       const response = await fetch(
//         `https://localhost:5276/Speech}`
//         // ?topic=${encodeURIComponent(topic)
//       );

//       // Check if the response is successful
//       // if (!response.ok) {
//       //   throw new Error("Failed to fetch speeches.");
//       // }

//       const data = await response.json();

//       // Check if data is an array, indicating we received the correct format
//       if (Array.isArray(data)) {
//         setSpeeches(data); // Set the speeches state with the fetched data
//       } else {
//         throw new Error("Invalid data format received.");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching speeches. Please try again."); // Set error message
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   const filteredSpeeches = speeches.filter((s) =>
//     s.topic.toLowerCase().includes(selectedTopic.toLowerCase())
//   );

//   return (
//     <>
//       <h1>Topics</h1>
//       <div>
//         <img
//           height={200}
//           src="/src/img/jesus.webp"
//           alt="Jesus Christ"
//           onClick={() => handleClick("Jesus")}
//         />
//         <p>Jesus Christ</p>

//         <img
//           height={200}
//           src="/src/img/church_logo.png"
//           alt="Core Beliefs"
//           onClick={() => handleClick("Beliefs")}
//         />
//         <p>Core Beliefs</p>
//         <img
//           height={200}
//           src="/src/img/faith.jpg"
//           alt="Faith"
//           onClick={() => handleClick("Faith")}
//         />
//         <p>Faith</p>

//         <img
//           height={200}
//           src="/src/img/Repentance.png"
//           alt="Repentance"
//           onClick={() => handleClick("Repentance")}
//         />
//         <p>Repentance</p>

//         <img
//           height={200}
//           src="/src/img/baptism.png"
//           alt="Baptism"
//           onClick={() => handleClick("Baptism")}
//         />
//         <p>Baptism</p>

//         <img
//           height={200}
//           src="/src/img/washington_dc_temple.webp"
//           alt="Temple"
//           onClick={() => handleClick("Temple")}
//         />
//         <p>Temple</p>

//         <img
//           height={200}
//           src="/src/img/jesus.webp"
//           alt="Prayer"
//           onClick={() => handleClick("Prayer")}
//         />
//         <p>Prayer</p>

//         <img
//           height={200}
//           src="/src/img/service.jpeg"
//           alt="Service"
//           onClick={() => handleClick("Service")}
//         />
//         <p>Service</p>
//       </div>

//       {selectedTopic && (
//         <>
//           <h2>Speeches on "{selectedTopic}"</h2>
//           {loading && <p>Loading speeches...</p>}{" "}
//           {/* Display loading message */}
//           {error && <p>{error}</p>} {/* Display error message */}
//           {filteredSpeeches.length === 0 && !loading && !error ? (
//             <p>No speeches found.</p>
//           ) : (
//             <ul>
//               {filteredSpeeches.map((s) => (
//                 <li key={s.speechId}>
//                   <strong>{s.speechTitle}</strong> by {s.speaker} (
//                   {s.dateSpeechGiven})
//                 </li>
//               ))}
//             </ul>
//           )}
//           {/* {speeches.length === 0 && !loading && !error ? (
//             <p>No speeches found.</p> // If there are no speeches and not loading
//           ) : (
//             <ul>
//               {speeches.map(
//                 (
//                   s: any // Assuming the type of speech is 'any'
//                 ) => (
//                   <li key={s.speechId}>
//                     <strong>{s.speechTitle}</strong> by {s.speaker} (
//                     {s.dateSpeechGiven})
//                   </li>
//                 )
//               )}
//             </ul>
//           )} */}
//         </>
//       )}
//       <br />
//       <br />
//       <br />
//     </>
//   );
// }

// export default Topics;

import { useEffect, useState } from "react";

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [speeches, setSpeeches] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all speeches when the component mounts
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:5276/Speech") // Fetches all speeches
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched speeches:", data);
        setSpeeches(data);
      })
      .catch((error) => {
        console.error("Error fetching speeches:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []); // Runs only once when the component mounts

  // Handles topic click
  const handleClick = (topic: string) => {
    setSelectedTopic(topic); // Updates selected topic
  };

  // Filter speeches based on selected topic
  const filteredSpeeches = selectedTopic
    ? speeches.filter(
        (s) => s.topic?.toLowerCase() === selectedTopic.toLowerCase()
      )
    : [];

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
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
          {loading && <p>Loading speeches...</p>}
          {error && <p>{error}</p>}

          {filteredSpeeches.length === 0 && !loading && !error ? (
            <p>No speeches found.</p>
          ) : (
            <ul>
              {filteredSpeeches.map((s) => (
                <li key={s.speechId}>
                  <strong>{s.speechTitle}</strong> by {s.speaker} on{" "}
                  {formatDate(s.dateSpeechGiven)}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      <br />
      <br />
    </>
  );
}

export default Topics;
