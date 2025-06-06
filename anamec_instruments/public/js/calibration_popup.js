function showCalibrationDuePopup() {
    console.log("Checking for due calibrations...");

    frappe.call({
        method: "anamec_instruments.utils.get_due_today_unread_calibrations",
        callback(r) {
            if (r.message && r.message.length > 0) {
                const items = r.message.map(row => `
                    <li 
                        style="
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            padding: 8px 10px; 
                            border-bottom: 1px solid #ddd; 
                            cursor: pointer;
                        " 
                        onclick="viewAndMarkCalibration('${row.name}', '${row.ref_name}')"
                    >
                        <span><b>${row.calibration_name}</b> (${row.ref_name})</span>
                        <span style="color: #007bff; font-size: 13px;">View & Mark as Read</span>
                    </li>
                `).join("");

                const container = `
                    <div style="max-height: 230px; overflow-y: auto;">
                        <ul style="list-style-type: none; padding-left: 0; margin: 0;">
                            ${items}
                        </ul>
                    </div>
                    <div style="text-align: right; margin-top: 10px;">
                        <button class="btn btn-sm btn-primary" onclick="markAllCalibrationsAsRead()">Mark All as Read</button>
                    </div>
                `;

                frappe.msgprint({
                    title: __("Today's Due Calibrations"),
                    message: container,
                    indicator: "red"
                });
            }
        }
    });
}

// View and mark individual calibration as read
function viewAndMarkCalibration(trackerName, refName) {
    console.log(`Marking calibration ${trackerName} as read and opening form for ${refName}`);
    frappe.call({
        method: "anamec_instruments.utils.mark_single_calibration_as_read",
        args: { tracker_name: trackerName },
        callback: () => {
            frappe.set_route('Form', 'Calibration', refName);
        }
    });
}

// Mark all calibrations as read
function markAllCalibrationsAsRead() {
    frappe.call({
        method: "anamec_instruments.utils.mark_all_calibrations_as_read",
        callback: () => {
            frappe.hide_msgprint();
            frappe.show_alert({ message: __('All marked as read'), indicator: 'green' });
        }
    });
}

frappe.after_ajax(() => {
	console.log("AJAX IN")
    showCalibrationDuePopup();
    setInterval(showCalibrationDuePopup, 5 * 60 * 1000); // every 5 minutes
});
