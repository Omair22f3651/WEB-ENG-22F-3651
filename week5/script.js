// const myPromise = new Promise((resolve, reject) => {
//     let success = false; // Change to false to simulate rejection

//     setTimeout(() => {
//         success ? resolve("Operation successful!") : reject("Operation failed!");
//     }, 2000);
// });

// // Using the Promise
// myPromise
//     .then((message) => console.log("Resolved:", message))
//     .catch((error) => console.log("Rejected:", error));

// Replace with any GitHub username

// fetch(`https://api.github.com/users/${username}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // Convert response to JSON
//     })
//     .then(data => {
//         console.log("GitHub User Info:", data);
//         console.log(`Name: ${data.name}`);
//         console.log(`Bio: ${data.bio}`);
//         console.log(`Public Repos: ${data.public_repos}`);
//     })
//     .catch(error => console.error("Error fetching data:", error));


    async function getGitData()
    {
        const username = "walifile"
        console.log(username)

        const gitData = await fetch(`https://api.github.com/users/${username}`)

        const profile = await gitData.json

        console.log(profile)


    }

    const users=[  

        {name:"Teachers Tatta", age:52},
        {name:"mujji", age: 69}



    ]

    console.log((users[0]))

   // getGitData();