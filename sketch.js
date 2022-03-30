// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('models/asyoulikeit/', modelLoaded);

// When the model is loaded
function modelLoaded () {
  console.log('Model Loaded!');
}

// Generate content
rnn.generate({ seed: 'the meaning of pizza is' }, (err, results) => {
  console.log(results);
});
