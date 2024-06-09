window.addEventListener(
    "load",
    (event) => {

        //identifierClass, appliedClass
        const actions = [
            {
                id: ".slide-from-left",
                do: "left-slide"
            },
            {
                id: ".slide-from-right",
                do: "right-slide"
            },
            {
                id: ".slide-from-top",
                do: "slide-down"
            },
            {
                id: ".slide-from-bottom",
                do: "slide-up"
            },
            {
                id: ".fade-in",
                do: "fade-in-image"
            },
        ];

        actions.forEach( action =>{
            const elements = document.querySelectorAll(action.id);
            elements.forEach(element => {
                if (element) {
                    const observer = new IntersectionObserver(entries => {
                        if (entries[0].isIntersecting) {
                            element.classList.remove("hide")
                            element.classList.add( action.do );
                        } else {
                            element.classList.add( "hide" );
                        }
                    }, {threshold: 0.1});
                    observer.observe( element );
                } else {
                    console.log("Element was",element)
                }
            });
        });
    }, 
    false
);