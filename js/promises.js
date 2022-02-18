const baseURL = ('https://api.github.com')

function returnDateOfLastCommit(username){
    return fetch(baseURL + '/users/' + username + '/events/public', {heanders : {'Authorization': 'token ${JenniferToken}'}})
    .then(res => res.json())
        .then(events => console.log(events));
    for (let event of events) {
        if (event.type === "PushEvent") {
            return event;
        }
    }
}
returnDateOfLastCommit('topfunky').then(lastEventDate => console.log(lastEventDate));

const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(milliseconds)
        }, milliseconds)
        })
    }
    wait(1000).then((milliseconds) => console.log("You'll see this after ${milliseconds} second"));
    wait(3000).then(() => console.log("You'll see this after 3 seconds"));
