const myOptions = document.getElementById("weekdays");
const myResults = document.querySelector(".results");

/*
 i dont know what im doing...
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
        <p> Warm up first. Do five minutes of treadmill, some squats with just the bar, or run around in circles - I don't care what you do here. Just warm up. </p> 
        <ul> 
            <li> <a href="https://youtube.com/shorts/8_6qdQ-TaNY?si=W-RYGBvoUHa3ZLay" target="_blank">HEEL-ELEVATED SQUATS</a> 3 sets of 8-10 reps </li>
            <p> You don't know how to do squats & I cannot teach you without being there, so you're not going to do it because you will hurt yourself. </p>
            <p> You're going to walk over to the squat rack, you're going to grab one of the bumper plates, place it on the ground, put ur weak little heels on the edge and squat. </p> 
            <li> <a href="https://youtube.com/shorts/FMCq0hT3KRU?si=gHX8Qm89e3nqkGUd" target="_blank">Leg Curls</a> 3 sets of 10-12 reps </li> 
            <p> Do these slow and focus on the movement. You shouldn't be kicking the weight to your ass. Slow and controlled throughout the whole movement. </p>
            <li> <a href="https://youtube.com/shorts/2zZ3vkPsExQ?si=WY8WQEhbZ3TywdVK" target="_blank">Leg Extenstions</a> 2 sets of 10-12 reps </li> 
            <p> SLOWWWWW AND CONTROLLLLEEDDDDD </p>
            <p> You're going to be tempted to do more exercises because you might be thinking to yourself, "I feel great - I can do more". </p>
            <p> You can't. You're not built like that, trust me. </p> 
            <p> Me, personally, I like to do 5-10 minutes on treadmill after my Leg workouts to try and get rid of some of that "stiff-leg" feeling after the workout, but you don't have to. </p>
        </ul> 
        <h2> Congrats, you're done with the workout. You are so freaking cool, and so fit! <a href="https://youtube.com/shorts/WcvcoYry9W0?si=2dMyUrlAK0PgPv10" target="_blank" > HIGH FIVE </a> </h2>  
        `   
    } else if (this.value === "Tuesday") {
        myResults.innerHTML = `
        <h2> PUSHHHHH DAYYYYY </h2> 
        <p style="display: inline;"> Push day = exercises that require you to PUSH the weight outward. Woowww </p> 
        <img src="images/wow.jpg" style="width:25px;height:25px;" /> 
        <ul>    
            <li> <a href="https://youtu.be/6wieomRYA70?si=yaJ-PB05UZBbVylN" target="_blank">Hammer Strength Incline Press</a> 3 sets of 8-10 reps </li>
            <h2 style="display:flex; justify-content:center; align-items:center;"> Now let's make sure that we are looking for the right machine. </h2>
            <p style="display: inline;"> We are looking for the machine that looks like this ----> </p>
            <img src="images/inclinepress.jpg" style="width: 150px; height:150px;"/> 
            <p style="display: inline;float:right; padding-left: 3px;"> We are NOT looking for the one that looks like this </p>
            <p style="display: inline;float:right; padding-left: 5px;"> <--------- </p>
            <img src="images/notinclinepress.jpg" style="width: 150px; height:150px; float:right;"/> 
            <li> <a href="https://youtube.com/shorts/o7TvO377OqA?si=5eL4MwYqiiEdl8Sf" target="_blank"> Flat Dumbbell Chest Press</a> 3 sets of 8-10 reps </li> 
            <li> <a href="https://youtube.com/shorts/VYiM6sDpCfg?si=clgFEYj3VEu2vuLT" target="_blank"> Shoulder Press </a> 3 sets of 8-10 reps </li>
            <li> <a href="https://youtube.com/shorts/KoRDmXocJII?si=1HXF0-ObBgBSgpRi" target="_blank"> Dumbbell Rear Delt Fly </a> 3 sets of 10-12 reps </li>  
            <li> <a href="https://youtube.com/shorts/9Ark9S11uXw?si=z0vOk48OGFImMOoH" target="_blank"> Overhead Rope Tricep Extension </a> 4 sets of 10-12 reps </li> 
            <p> Ignore the cringe music on the last video. I couldn't find a better video, so I had to use that one. </p>
        </ul>

        `
    } else if (this.value === "Wednesday") {
        myResults.innerHTML =  `
        <h2> PULLLLLL DAYYYYYYY </h2>  
        <h4> The Best Day. </h4> 
        <img src="images/screamingemoji.png" />  
        <br>
        <p style="display: inline;"> Pull day = exercises that require you to PULL the weight inward. Woowww </p> 
        <img src="images/wow.jpg" style="width:25px;height:25px;" /> 
        <ul> 
            <li> <a href="https://youtube.com/shorts/hnSqbBk15tw?si=B2dr57jfm7QgHmCu" target="_blank">Lat Pulldown</a> 3 sets of 8-10 reps </li> 
            <li> <a href="https://youtube.com/shorts/S5jNFL_jzBU?si=Pfeq66GnFDy_h_Fk" target="_blank">Cable Rows</a> 3 sets of 8-10 reps </li> 
            <li> <a href="https://youtube.com/shorts/hAMcfubonDc?si=zFHZga9xRApiHCNm" target="_blank">Straight-Arm Pulldown</a> 3 sets of 10-12 reps </li> 
            <p> Ignore the cringe music on the last video. I couldn't find a better video, so I had to use that one. </p> 
            <li> <a href="https://youtu.be/DMo3HJoawrU?si=D85XiapUqRwu4R4s" target="_blank"> Single Arm Supported Dumbbell Row </a> 3 sets of 10-12 reps </li> 
            <li> <a href="https://youtube.com/shorts/VCw_uIxW8WE?si=kX5MnN55gYFJ5DGK" target="_blank"> Bicep Curl </a> 4 sets of 8-10 reps </li> 
            <li> <a href="https://youtube.com/shorts/0qzSDAfBzSw?si=1L0UckpF4W-FDG4Tbgtt7g67666" target="_blank"> Hammer Curl </a> 4 sets of 8-10 reps </li> 

        </ul>
        
        `
    } else if (this.value === "Thursday") {
        myResults.innerHTML =  `
        <h2> Walk on the treadmill </h2> 
        <ul> 
            <li> You can throw in some ab exercises afterwards, or try out a machine/exercise that you want to do. Just don't over-do it. 
        </ul>
        <p> What I like to do is - I'll put an episode of New Girl or whatever random show I'm watching & just walk on the treadmill for the full episode. </p>
        <p> This also serves as a 'Mental Reset' kinda day too. You're going to be very sore from the last 3 days, so you probably won't be able to lift shit. </p>
        <h4> It's important that you still go to the gym, even if you're just going to walk on the treadmill. You have to get into the routine of just physically going & being at the gym. </h4> 
        `
    } else if (this.value === "Friday") {
        myResults.innerHTML =  `
        <h2> Walk on the treadmill </h2> 
        <ul> 
            <li> You can throw in some ab exercises afterwards, or try out a machine/exercise that you want to do. Just don't over-do it. 
        </ul>
        <p> What I like to do is - I'll put an episode of New Girl or whatever random show I'm watching & just walk on the treadmill for the full episode. </p>
        <p> This also serves as a 'Mental Reset' kinda day too. You're probably still pretty sore from your workouts earlier this week, so you probably won't be able to lift shit. </p>
        <h4> It's important that you still go to the gym, even if you're just going to walk on the treadmill. You have to get into the routine of just physically going & being at the gym. </h4> 
        `
    } else {
        myResults.innerHTML = " "
    }
    
});