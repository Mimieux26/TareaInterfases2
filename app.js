
const options={

    threshold:1,
    rootMargin:'50px'
}
const img= document.querySelectorAll('img');
function callback(entries, observer){
    
    entries.forEach(entry=>{
        console.log('Intercepcion', entry.target);
        if(entry.isIntersecting){
            
                entry.target.src= entry.target.dataset.src;
                observer.unobserve(entry.target);
        }



    });


}
const observer = new IntersectionObserver(callback,options)
observer.observe(imagen)

img.forEach(i=>{
    observer.observe(i);
})

/*const images = Array.from(document.querySelectorAll('.lazy-image img'));
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;

                image.src = image.dataset.src;
                image.onload = () => image.previousElementSibling.remove();

                imageObserver.unobserve(image);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}*/