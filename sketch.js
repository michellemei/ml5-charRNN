// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('models/anallegoryofourpoetry.txt/', modelLoaded);

// When the model is loaded
function modelLoaded () {
  console.log('Model Loaded!');
}

// Generate content
rnn.generate({ seed: 'we have' }, (err, results) => {
  console.log(results);
});
