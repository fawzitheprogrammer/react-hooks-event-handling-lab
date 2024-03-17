// Code EyesOnMe Component Here


function EyesOnMe() {
  return (
    <div>
      <button
        onFocus={(e) => {
          console.log('Good!');
        }}

        onBlur={(e) => {
          console.log('Hey! Eyes on me!');
        }}
        placeholder="onFocus is triggered when you click this input."
      >Eyes on me</button>
    </div>
  )
}


export default EyesOnMe;