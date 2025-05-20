// Copyright (c) 2025, Techsolvo LLP and contributors
// For license information, please see license.txt

frappe.ui.form.on("Calibration", {
    refresh(frm) {
    },

    test_weight(frm) {
        // Ensure test_weight exists and is a number
        let test_weight = frm.doc.test_weight;
        if (!test_weight || isNaN(test_weight)) {
            frappe.msgprint("Please enter a valid Test Weight.");
            return;
        }

        // Clear the existing child table rows
        frm.clear_table("calibration_result");

        // Calculate the weight for each part
        let part_weight = test_weight / 10;

        // Add 10 rows with equal parts (cumulative)
        for (let i = 1; i < 11; i++) {
            let row = frm.add_child("calibration_result");
            row.std_weight = Number((part_weight * i).toFixed(2));
        }

        // Refresh the field to show changes
        frm.refresh_field("calibration_result");
    }
});

frappe.ui.form.on("Calibration Item", {
    displayed_weight(frm, cdt, cdn) {
        console.log("Inside displayed_weight");
        let row = locals[cdt][cdn];

        // Ensure both std_weight and displayed_weight are present
        if (row.std_weight && row.displayed_weight) {
            row.deviation = Number((row.std_weight - row.displayed_weight).toFixed(2));
        } else {
            row.deviation = 0;
        }

        // Refresh just the row to avoid redrawing the entire child table
        frm.fields_dict["calibration_result"].grid.refresh();
    }
});