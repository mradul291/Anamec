frappe.listview_settings['Calibration'] = {
    formatters: {
        "next_due_date": function (value, df, doc) {
            if (!doc.next_due_date) return "";

            const due = moment(doc.next_due_date, "YYYY-MM-DD");
            const today = moment();

            console.log("next_due_date:", doc.next_due_date);

            let color_class = "red"; // default

            if (due.isSame(today, 'day')) {
                console.log(`1 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
                color_class = "red";
            } else if (due.isAfter(today, 'day')) {
                console.log(`2 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
                color_class = "green";
            } else {
                console.log(`3 Due: ${due.format("DD-MM-YYYY")} | Today: ${today.format("DD-MM-YYYY")}`);
                color_class = "dark";
            }

            return `<span class="indicator-pill ${color_class} filterable no-indicator-dot ellipsis">${doc.next_due_date}</span>`;
        }
    }
};
