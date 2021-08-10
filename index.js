document.getElementById("btn").addEventListener("click", function() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('bot').textContent = "HappyBot"
            document.getElementById('activity').textContent = data.activity
            document.body.classList.add("fun")
        })
})
