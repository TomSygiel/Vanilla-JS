//Count how many letter 'i' there are in the provided text
// Use both 'For and 'While' loop 

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed virtutem ipsam inchoavit, nihil amplius. Quod totum contra est. Si quicquam extra virtutem habeatur in bonis. At ille pellit, qui permulcet sensum voluptate. Non est ista, inquam, Piso, magna dissensio. Quis non odit sordidos, vanos, leves, futtiles? Venit ad extremum; Duo Reges: constructio interrete."
let count = 0



// do something here, with for look and while loop
function checkOccurances(char) {
    for (let i = str.length; i >= 0; i--) {
        if (str[i] == char) {
            count++;
        }
    }
}

checkOccurances('i')
console.log('Using for loop I get the count of: ' + count)

let countTwo = 0;

function checkOccuranceAgain(character) {
    
    let i = 0;

    while(i < str.length) {
        if (str[i] == character) {
            countTwo++;
        }
        i++;
    }

}

checkOccuranceAgain('i');
console.log('Using while loop I get the count of: ' + countTwo)
