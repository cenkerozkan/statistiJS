// Mean calculator.
function calcMean(dataset){
    let temp=0;
    for(let i=0; i<dataset.length; i++){
        temp = temp + dataset[i];
    }
    return temp/(dataset.length);
}

// Median calculator.
function calcMedian(dataset){
    let len = dataset.length;
    let temp=0;
    switch(len%2){
        // Even.
        case 0:
            return (dataset[(len/2)] + dataset[(len/2)+1])/2;

        // Odd
        default:
            return dataset[(len-1)/2];
    }
}

// Quartile calculator.
// For now, I'm not sure if it works right !!!!!
/*function calcQuarts(dataset){
    // C version of statistiCs has an ability
    // to perform a basic interpolation calculation
    // but I think it is not as useful as I imagine.
    // So I decided not to include that part in this
    // web based version.
    let temp1 = 0.25 * (dataset.length + 1);
    let temp2 = 0.75 * (dataset.length + 1);
    window.alert(dataset.length);
    window.alert(dataset[Math.floor(temp1)],dataset[Math.floor(temp2)]);
    return[dataset[temp1],dataset[temp2]];
}*/

// Deviation & variance calculator.
// DOES NOT WORK FOR NOW, I'LL FIX IT LATER.
function calcDevVar(dataset,mean){
    let temp_dev=0, temp_var=0;
    //window.alert(typeof(temp_var));
    //window.alert(dataset.length)
    //window.alert(typeof(dataset.length))
    for(let i=0; i<dataset.length; i++){
        temp_var += ((Number(dataset[i]-mean))*((Number(dataset[i]-mean))))/dataset.length;
    }
    temp_dev = Math.sqrt(temp_var);
    //window.alert("DEBUG")
    return [temp_dev,temp_var];
}

// Clears the text box.
function clearScreen(){
    document.getElementById("mean").innerHTML = "Mean:";
    document.getElementById("median").innerHTML = "Median:";
    //document.getElementById("q1").innerHTML = "Quartile 1:";
    //document.getElementById("q3").innerHTML = "Quartile 3:";
    //document.getElementById("q2").innerHTML = "IQR:";
    document.getElementById("dev").innerHTML = "Standard Dev:";
    document.getElementById("var").innerHTML = "Variance:";
    document.getElementById("size").innerHTML = "Sample count:";
    document.getElementById("dataset").value="";
}


// Driver function.
function statistiJs(){
    // Note to myself:
    // Variable sample_arr was taken as a string at the
    // beginning, then converted into a string array with
    // split method containing 3 different delimeters,
    // being mapped as default number variable of javascript
    // into an array of numbers and sorted lastly.
    let sample_arr = ((document.getElementById("dataset").value).split(/[\n, ' ']+/).map(Number)).sort(function(a,b){return a - b});
    //window.alert(typeof(sample_arr));
    console.log(sample_arr);   // DEBUG
    if(sample_arr.length < 5){
        window.alert("At least 5 elements required !");
        clearScreen();
    }
    else{
        // Result variables.
        let mean = calcMean(sample_arr);
        let median = calcMedian(sample_arr);
        let [std_dev, pop_var] = calcDevVar(sample_arr,mean);
        //let [quart1, quart3] = calcQuarts(sample_arr);

        document.getElementById("mean").innerHTML = "Mean: " + Math.floor(mean*100)/100;
        document.getElementById("median").innerHTML = "Median: " + median;
        //document.getElementById("q1").innerHTML = "Quartile 1: " + quart1;
        //document.getElementById("q3").innerHTML = "Quartile 3: " + quart3;
        //document.getElementById("q2").innerHTML = "IQR: " + (quart3 - quart1);
        document.getElementById("dev").innerHTML = "Standard Dev: " + Math.floor(std_dev*100)/100;
        document.getElementById("var").innerHTML = "Variance: " + Math.floor(pop_var*100)/100;
        document.getElementById("size").innerHTML = "Sample count: " + sample_arr.length;
    }
}