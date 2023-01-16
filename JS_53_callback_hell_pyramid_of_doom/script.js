//one should avoid callback because it gives control to another function as it as a parameter.
/*
The "pyramid of doom" and "callback hell" are terms used to describe a common pattern in JavaScript code where multiple nested callback functions are used to execute asynchronous code. This can lead to code that is difficult to read, understand, and maintain. Promises are used to avoid this problem.
As the call becomes deeper (callbacks inside callbacks), the code becomes more difficult to read and spirals out of control. 
*/

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
            console.log(error)
            return
    }
    alert('Hello World!' + src);
}




loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                            console.log(error)
                                            sendEmergencyMessageToCeo();
                                            return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                            if (error) {
                                                    console.log(error)
                                                    sendEmergencyMessageToCeo();
                                                    return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                    if (error) {
                                                            console.log(error)
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                            if (error) {
                                                                    console.log(error)
                                                                    sendEmergencyMessageToCeo();
                                                                    return
                                                            }
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})