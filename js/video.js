const botao = document.querySelector('#botao')
const video = document.querySelector('#video')
const backward = document.querySelector('#botaoback')
const forward = document.querySelector('#botaofoward')
const btnstop = document.querySelector('#botaostop')
const mais10 = document.querySelector('#botaoplus10')
const menos10 = document.querySelector('#botaominus10')

botao.addEventListener('click', controleVideo)
backward.addEventListener('click', slowVideo)
forward.addEventListener('click', speedVideo)
btnstop.addEventListener('click', stopVideo)
mais10.addEventListener('click', plus)
menos10.addEventListener('click', minus)


function controleVideo(){
    if(video.paused){
        video.play()
        botao.innerHTML = '<i class="fa fa-pause"></i> Pause'
    }else{
        video.pause()
        botao.innerHTML = '<i class="fa fa-play"></i> Play'
        video.playbackRate = 1
    }
}

function slowVideo(){
    video.playbackRate = 0.5;
}

function speedVideo(){
    video.playbackRate = 2;
}

function stopVideo(){
    video.pause()
    video.currentTime = 0
}

function plus(){
    video.currentTime += 10
}

function minus(){
    video.currentTime -= 10
}
