// // React Refresher => Currently at: 00:46:30

// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// // // Class Components
// // class ClassComponents extends React.Component {
// //   render( ) {
// //     return <h2>Class Component</h2>
// //   }
// // }

// const hasLiked = true;

// const Card = ({ title }) => {
//   const [count, setCount] = useState(0);

//   const [hasLiked, setHasLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} has been liked: ${hasLiked}`);
//   }, [hasLiked]);

//   return (
//     <div className="card" onClick={() => setCount(count + 1)}>
//       <h2>
//         {title} <br /> {count || null}
//       </h2>

//       <button onClick={() => setHasLiked(!hasLiked)}>
//         {hasLiked ? "❤️" : "🤍"}
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="card-container">
//       <Card title="Star Wars" rating={5} isCool={true} hasLiked={hasLiked} />
//       <Card title="Avatar" />
//       <Card title="The Lion King" />
//     </div>
//   );
// };

// export default App;

import { React } from "react";

const App = () => {
  return <div>App</div>;
};

export default App;
