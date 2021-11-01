//Create Timer

const timer = document.querySelector('#counter');
const pauseButton = document.querySelector('#pause')
const heartButton = document.querySelector('#heart')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const commentButton = document.querySelector('#submit')
const commentList = document.querySelector('#list')
const commentInput = document.querySelector('#comment-input')
const commentForm = document.querySelector('#comment-form')
let likesList = document.querySelector('.likes')
let count = 0
let intervalID


document.addEventListener("DOMContentLoaded", function(){
    intervalID = setInterval(function(){
        count += 1
        timer.textContent = count
    }, 1000)
})

//Pause timer - Resume timer

pauseButton.addEventListener('click', function(){
    if (pauseButton.innerText === 'pause'){
        pauseButton.innerText = 'resume'
        clearInterval(intervalID)
        heartButton.disabled = true
        minusButton.disabled = true
        plusButton.disabled = true
        commentButton.disabled = true
    }
    else {
        pauseButton.innerText = 'pause'
        intervalID = setInterval(function(){
            count += 1
            timer.textContent = count
        }, 1000)
        heartButton.disabled = false
        minusButton.disabled = false
        plusButton.disabled = false
        commentButton.disabled = false
    }

    

})

//Plus timer

plusButton.addEventListener('click', function(){
    count += 1
    timer.textContent = count
})

//Minus timer

minusButton.addEventListener('click', function(){
    count -= 1
    timer.textContent = count
})

//Like number on timer prints 'number has been liked x times' in ul

heartButton.addEventListener('click', function(){
    if (document.getElementById(`${count}`)){
        let li = document.getElementById(`${count}`)
        console.log('already liked', li)
        li.dataset.likecount = parseInt(li.dataset.likecount) +1
        console.log(typeof li.dataset.likecount)
        li.innerText = `${count} has been liked ${li.dataset.likecount} times`
    }else {

    let li = document.createElement('li')
    li.id = count
    li.innerText = `${count} has been liked 1 time`
    li.dataset.likecount = 1
    li.dataset.test = [1, 2, 3]
    likesList.append(li)
    
    console.log('new like')
    }

})

//Leave a comment

commentButton.addEventListener('click', function(e){
    e.preventDefault()
    const value = commentInput.value
    commentP = document.createElement('p')
    commentP.innerText = value
    commentList.append(commentP)
    commentForm.reset()
})











