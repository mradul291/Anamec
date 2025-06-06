// frappe.listview_settings['Calibration'] = {
//     get_indicator: function (doc) {
//         if (!doc.next_due_date) return;

//         const due = moment(doc.next_due_date, "DD-MM-YYYY");  // parse from custom format
//         const today = moment(); // today's date in moment



//         if (due.isSame(today, 'day')) {
//             console.log(` 1 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
//             return [doc.next_due_date, 'red'];
//         } else if (due.isAfter(today, 'day')) {
//             console.log(` 2 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
//             return [doc.next_due_date, 'green',];
//         } else {
//             console.log(` 3 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
//             return [doc.next_due_date, 'darkgrey',];
//         }
//     }
// };
