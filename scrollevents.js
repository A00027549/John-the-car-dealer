window.addEventListener("DOMContentLoaded",()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry.target.classList.toString())
        })
    })

    observer.observe()
})