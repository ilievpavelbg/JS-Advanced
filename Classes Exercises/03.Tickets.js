
function solve(array, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let result = []

    for (const ticketInfo of array) {
        
        [destinationT, priceT, statusT] = ticketInfo.split(`|`)

        let ticket = new Ticket(destinationT, Number(priceT), statusT)

        result.push(ticket)
    
    }

    if (sortingCriteria === `price`) {
       result.sort((a,b) => a[sortingCriteria] - b[sortingCriteria])
    }
    else{
        result.sort((a,b) => a[sortingCriteria].localeCompare(b[sortingCriteria]))
    }

    return result

}

solve([`Philadelphia|94.20|available`,
`New York City|95.99|available`,
`New York City|95.99|sold`,
`Boston|126.20|departed`],
`price`)

