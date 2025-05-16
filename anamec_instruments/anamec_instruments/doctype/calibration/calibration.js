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

        // Add 10 rows with equal parts
        for (let i = 0; i < 10; i++) {
            let row = frm.add_child("calibration_result");
            row.std_weight = part_weight;
        }

        // Refresh the field to show changes
        frm.refresh_field("calibration_result");
    }
});
