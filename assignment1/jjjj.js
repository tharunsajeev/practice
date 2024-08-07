// JavaScript source code
document.getElementById('voteForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const vote = formData.get('vote');

    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vote: vote })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Vote submitted! Option ${data.option} now has ${data.votes} votes.`;
        })
        .catch(error => console.error('Error:', error));
});
