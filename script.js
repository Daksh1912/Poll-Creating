let pollData = {
    question: '',
    option1: '',
    option2: '',
    votes1: 0,
    votes2: 0
};

function createPoll() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;

    if (question && option1 && option2) {
        pollData.question = question;
        pollData.option1 = option1;
        pollData.option2 = option2;

        document.getElementById('pollQuestion').innerText = pollData.question;
        document.getElementById('opt1Text').innerText = pollData.option1;
        document.getElementById('opt2Text').innerText = pollData.option2;

        document.getElementById('pollForm').reset();
        document.getElementById('pollArea').classList.remove('hidden');
        document.getElementById('resultsArea').classList.add('hidden');
    } else {
        alert('Please fill out all fields!');
    }
}

function submitVote() {
    const selectedVote = document.querySelector('input[name="vote"]:checked');

    if (selectedVote) {
        if (selectedVote.id === 'vote1') {
            pollData.votes1++;
        } else if (selectedVote.id === 'vote2') {
            pollData.votes2++;
        }

        document.getElementById('resultsQuestion').innerText = pollData.question;
        document.getElementById('resultsOpt1Text').innerText = pollData.option1;
        document.getElementById('resultsOpt2Text').innerText = pollData.option2;
        document.getElementById('opt1Votes').innerText = pollData.votes1;
        document.getElementById('opt2Votes').innerText = pollData.votes2;

        document.getElementById('resultsArea').classList.remove('hidden');
    } else {
        alert('Please select an option to vote!');
    }
}
