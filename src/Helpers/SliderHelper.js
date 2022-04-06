export const scrollNext = (ref) => {
    const conteiner = ref;


    let adding = conteiner.scrollWidth / 8;

    if(conteiner.scrollLeft + conteiner.clientWidth >= conteiner.scrollWidth - 10){
        conteiner.scrollTo({
            behavior: "smooth",
            left: 0,
        })
    }else{
        conteiner.scrollTo({
            behavior: "smooth",
            left: conteiner.scrollLeft + adding,
        })
    }
}

export const scrollPrev = (ref) => {
    const conteiner = ref;


    let adding = conteiner.scrollWidth / 6;

    if(conteiner.scrollLeft < 15){
        conteiner.scrollTo({
            behavior: "smooth",
            left: conteiner.scrollWidth,
        })
    }else{
        conteiner.scrollTo({
            behavior: "smooth",
            left: conteiner.scrollLeft - adding,
        })
    }
}