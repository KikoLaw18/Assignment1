// import React, { useState } from 'react';

// function LikeButton() {
//   // State to track if the button is liked or not
//   const [liked, setLiked] = useState(false);

//   // Function to toggle the "liked" state
//   const toggleLike = () => {
//     setLiked(!liked);
//   };

//   return (
//     <button onClick={toggleLike} >{liked ? '♥︎' : '♡'}
//     </button>
//   );
// }

// export default LikeButton;

// import React, { useState } from 'react';
// import unlike from './img/heart-outline.svg'
// import like from './img/heart.svg'

// function LikeButton() {
//   // State to track if the button is liked or not
//   const [liked, setLiked] = useState(false);

//   // Function to toggle the "liked" state
//   const toggleLike = () => {
//     setLiked(!liked);
//   };

//   return (
//     <button onClick={toggleLike} >
//       {liked ? (
//         <img src={like} alt='liked'></img>
//       ): (
//         <img src={unlike} alt='unliked'></img>
//       )}
//     </button>
//   );
// }

// export default LikeButton;

import React, { useState } from 'react';
import unlike from './img/heart-outline.svg';
import like from './img/heart.svg';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button 
      onClick={toggleLike} 
      className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 text-white`}
    >
      <img src={liked ? like : unlike} alt={liked ? 'liked' : 'unliked'} className="w-6 h-6" />
    </button>
  );
}

export default LikeButton;