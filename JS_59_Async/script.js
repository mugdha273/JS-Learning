async function myFun(){
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("delhi weather is 27 deg"), 3000);
    });

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("mumbai weather is 30 deg"), 5000);
    });

    console.log("waiting for delhi weather");
    let delhiW = await promise1;
    console.log(delhiW);

    console.log("waiting for mumbai weather");
    let mumbaiW = await promise2;
    console.log(mumbaiW);

    return [delhiW, mumbaiW];
}

const sample = async () => {
    console.log("This function is waiting myFun to complete");
}

const main1 = async () => {
    await myFun();
    await sample();
}

main1();