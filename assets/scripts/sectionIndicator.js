window.addEventListener(
    "load",
    (event) => {

        //identifierClass, target, appliedClass
        const actions = [
            {
                id: "#home",
                target: "#step1",
                do: "selected"
            },
            {
                id: "#about",
                target: "#step2",
                do: "selected"
            },
            {
                id: "#trading",
                target: "#step3",
                do: "selected"
            },
            {
                id: "#utility",
                target: "#step4",
                do: "selected"
            },
            {
                id: "#launch",
                target: "#step5",
                do: "selected"
            },
            {
                id: "#security",
                target: "#step6",
                do: "selected"
            },
            {
                id: ".fade",
                target: "#step6",
                do: "selected"
            },
            {
                id: "#copyright",
                target: "#step7",
                do: "selected"
            },
        ];

        actions.forEach( action =>{
            const element = document.querySelector(action.id);
                if (element) {
                const observer = new IntersectionObserver(entries => {
                    const target = document.querySelector(action.target);
                    if (entries[0].isIntersecting) {
                        target.classList.add( action.do );
                    } else {
                        target.classList.remove ( action.do );
                    }
                }, {threshold: 0.51});
                observer.observe( element );
            } else {
                console.log("Element was",element)
            }       
        });
    }, 
    false
);