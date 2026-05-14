const myOptions = document.getElementById("weekdays");
const myResults = document.querySelector(".results");

/*

myOptions.addEventListener("change", (event) => {
    // myResults.textContent = `this is ${event.target.value}`
    if (event.target.value === "Monday") {
            const newLink = document.createElement("a");
            newLink.setAttribute("href", "https://youtu.be/cbKkB3POqaY?si=LVzfTU_w6hXPt_fo");
            myResults.appendChild(newLink);
    };
    
});
*/

myOptions.addEventListener("change", function() {
    if (this.value === "Monday") {
        myResults.innerHTML = `
        <h2> LEG DAYYYYYYY </h2>
        <p> Warm up first. Do five minutes of treadmill, some squats with just the bar, or run around in circles - I don't care what you do here. Just warm up. 
        <ul> 
            <li> <a href="https://youtube.com/shorts/8_6qdQ-TaNY?si=W-RYGBvoUHa3ZLay" target="_blank">HEEL-ELEVATED SQUATS</a> 3 sets of 8-10 reps </li>
            <p> You don't know how to do squats & I cannot teach you without being there, so you're not going to do it because you will hurt yourself. </p>
            <p> You're going to walk over to the squat rack, you're going to grab one of the bumper plates, place it on the ground, put ur weak little heels on the edge and squat. </p> 
            <li> <a href="https://youtube.com/shorts/FMCq0hT3KRU?si=gHX8Qm89e3nqkGUd">Leg Curls</a> 3 sets of 10-12 reps </li> 
            <p> Do these slow and focus on the movement. You shouldn't be kicking the weight to your ass. Slow and controlled throughout the whole movement. </p>
            <li> <a href="https://youtube.com/shorts/2zZ3vkPsExQ?si=WY8WQEhbZ3TywdVK">Leg Extenstions</a> 2 sets of 10-12 reps </li> 
            <p> SLOWWWWW AND CONTROLLLLEEDDDDD </p>
            <p> You're going to be tempted to do more exercises because you might be thinking to yourself, "I feel great - I can do more". </p>
            <p> You can't. You're not built like that, trust me. </p> 
            <p> Me, personally, I like to do 5-10 minutes on treadmill after my Leg workouts to try and get rid of some of that "stiff-leg" feeling after the workout, but you don't have to. </p>
        </ul> 
        <h2> Congrats, you're done with the workout. You are so freaking cool, and so fit! <a href="https://youtube.com/shorts/WcvcoYry9W0?si=2dMyUrlAK0PgPv10"> HIGH FIVE </a> </h2>  
        `   
    } else if (this.value === "Tuesday") {
        myResults.innerHTML = `
        <p> Today is Tueday </p> `
    } else if (this.value === "Wednesday") {
        myResults.innerHTML =  `
        <p> Today is Wed </p> `
    } else if (this.value === "Thursday") {
        myResults.innerHTML =  `
        <p> Today is Thurs </p> `
    } else if (this.value === "Friday") {
        myResults.innerHTML =  `
        <p> Today is Fri </p> `
    } else {
        myResults.innerHTML = " "
    }
    
});