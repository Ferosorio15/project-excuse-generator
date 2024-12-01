
// This line of code will make sure the page is fully loaded
window.onload = function () {
  // Write the logic in this function

  // 1. Get the excuse element
  const excuse = document.getElementById('excuse');
  console.log(excuse);

  // 2. Generate a random excuse

  const whoToBlame = [
      "My pet Rooney",
      "The new intern ",
      "The copy machine ",
      "My car ",
      "I cannot leave because",       
    ];
    const whatTheyDid = [
      "chewed",
      "deleted ",
      "abducted",
      "I been trapped",
      "malfunctioned",        
    ];
    const whatToAvoid = [
      "my laptop charger",
      "my entire project",
      "by aliens",
      "in loop of Zoom meetings",
      "my hand ",        
    ];
    const WhenDidItHappen = [
      "this morning.",
      "yesterday.",
      "a week ago.",
      "this Afternoon.",
      "2 hours ago.",        
    ];     

    const indexPart1 = Math.floor(Math.random() * whoToBlame.length); 
    const indexPart2 = Math.floor(Math.random() * whatTheyDid.length);
    const indexPart3 = Math.floor(Math.random() * whatToAvoid.length);
    const indexPart4 = Math.floor(Math.random() * WhenDidItHappen.length);
  
  const excuseText = `${whoToBlame[indexPart1]} ${whatTheyDid[indexPart2]} ${whatToAvoid[indexPart3]} ${WhenDidItHappen[indexPart4]}`;
    
  // 3. Inseart the excuse into the excuse element
  excuse.innerHTML = excuseText;
}