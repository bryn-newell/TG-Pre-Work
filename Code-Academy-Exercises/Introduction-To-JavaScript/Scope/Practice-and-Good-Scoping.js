const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
    	console.log(lightWaves);
      }
  console.log(lightWaves);
};

logVisibleLightWaves();

// Tightly scoping variables is the best practice to prevent future problems. It makes code more legible and
// easy to understand what variables work with which code blocks. It's easier to maintain and it saves memory.
// If a variable does not need to exist outside a block, assign it locally not globally.
