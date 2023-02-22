function ticketPrice(quantity) {
    const lowTicket = 100;
    const midTIcket = 90;
    const highTicket = 70;
    let totalAmount = 0;
    if (quantity <= 100) {
        totalAmount = lowTicket * quantity;
    }
    else if (quantity >= 100 && quantity <= 200) {
        const lowTicketPrice = lowTicket * 100;
        const midTicketQuantity = quantity - 100;
        const midTIcketPrice = midTIcket * midTicketQuantity;
        totalAmount = midTIcketPrice + lowTicketPrice;
    } else {
        const lowTicketPrice = lowTicket * 100;
        const midTIcketPrice = midTIcket * 100;
        const highTicketQuantity = quantity - 200;
        const highTicketPrice = highTicket * highTicketQuantity;
        totalAmount = lowTicketPrice + midTIcketPrice + highTicketPrice;
    }
    return totalAmount;
}

const buyTicket = ticketPrice(305);
console.log(buyTicket);