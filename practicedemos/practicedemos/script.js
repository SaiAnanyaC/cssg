document.getElementById("myButton").addEventListener("click", onClickFunction); /*call a function associated with object document. addEventListener: object is listening for a certain event to happen, in this case a click on button*/

function onClickFunction() {
    alert("Hello world!");
}

async function getPost() {
    const posts = await db.find(posts.user==="lilsaibird"); /* db is for database*/
                            /*a promise returned from this is the same thing as a promise that's returned from any other function in the world that takes time to run*/
                /*you await this function to finish -- await will wait for rest of the line to run before proceeding to the next line*/
    /*without "async" and "await", only promise would return not actual data. when data is eventually  returned, it doesn't overset promise bc it's already passed the line*/
    /*promise premade javascript object -- has a lot of metadata but it means nothing to us -- agreement bw web server and web server you are getting from*/
    return posts;
}

async function wait() {
    setTimeout(5000).then(() => {
        return;
    }); /*runs instaneously but specified 5 seconds so instantaneously it takes 5 seconds to run*/
    const posts = await db.find(); /*if await doesn't beat the above 5 seconds, automatic return occurs but if await does beait the 5 seconds, then await line occurs*/
}

/*async allows you to await things, async means nothing without await*/