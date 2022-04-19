let h1 = document.getElementById('headline');
let div = document.getElementById('list');

function myBucket() {
    console.log("head");
    h1.classList.add('buckethead');
    document.getElementById("headline").innerHTML = "myBucketList";
    console.log("list");
    div.classList.add('bucketlist');
};
myBucket();






