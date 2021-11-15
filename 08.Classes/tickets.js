function ticket(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    const ticketObjs = [];
    tickets.forEach(element => {
        const [dest, price, status] = element.split('|')
        ticketObjs.push(new Ticket(dest, Number(price), status))
    });
    if (criteria == 'destination') {
        ticketObjs.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criteria == 'status') {
        ticketObjs.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    } else {
        ticketObjs.sort((a, b) => {
            return a.price - b.price;
        })
    }
    return ticketObjs;
}

console.log(ticket(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))