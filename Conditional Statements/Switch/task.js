let dayOfWeek = "Sunday";
let isWeekend;
switch(dayOfWeek) {
    // handle Saturday and Sunday cases
    case "Sunday":
        isWeekend = true;
        break;

        case "Saturday":
            isWeekend = true;

    default: // update isWeekend with the corresponding value
        isWeekend = false;
}

console.log(isWeekend);
