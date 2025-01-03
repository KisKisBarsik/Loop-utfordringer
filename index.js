// Oppgave 1



function oppgave1() {

    let text = "røyken VGS"
    document.write("<table>")

    for (let i = 0; i < 3; i++) {

        document.write("<tr>")

        for (let j = 0; j < 3; j++) {

            document.write("<td>Royken VGS</td>")  

        }

        document.write("</tr>")
        
        
    }
    document.write("</table>")
    
}

oppgave1()



// Oppgave 2

function oppgave2() {

    let stjerne = "*"

    for (let i = 0; i < 10; i++) {
        
        stjerne = " " + stjerne

        document.write(`<br>`)
        document.write(stjerne)
        
    }
    
}

oppgave2()



// Oppgave 3

