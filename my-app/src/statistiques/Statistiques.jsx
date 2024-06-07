export const Statistiques = ({liste}) => {   
    let count = 0;
    let countMasculin = 0;
    let countFeminin= 0;

    count = liste.length;

    liste.forEach(personne => {
        if (personne.genre === "Masculin") {
            countMasculin++;
        } else if (personne.genre === "Féminin") {
            countFeminin++;
        }
    });


    return (
        <div class="w-80 d-flex justify-content-start">
            <div class="d-flex p-3 flex-column align-items-start shadow-sm border br-20">
                <h5>
                    Contact
                </h5>

                <div>
                    Nombre de contact : {count}
                </div>
                <div>
                    👨 Contact masculin : {countMasculin}
                </div>
                <div>
                    👩 Contact féminin : {countFeminin}
                </div>
            </div> 
        </div>
    )
}