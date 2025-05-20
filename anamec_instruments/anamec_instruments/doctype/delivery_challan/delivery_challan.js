frappe.ui.form.on("Delivery Challan", {
    company(frm) {
        if (frm.doc.company) {
            console.log("Company selected:", frm.doc.company);

            frappe.db.get_list("Address", {
                filters: [
                    ["Dynamic Link", "link_doctype", "=", "Company"],
                    ["Dynamic Link", "link_name", "=", frm.doc.company]
                ],
                fields: ["name"],
                limit: 1
            }).then(addresses => {
                console.log("Addresses fetched from DB:", addresses);

                if (addresses.length > 0) {
                    const address_name = addresses[0].name;
                    console.log("First address name:", address_name);
                    frm.set_value("company_address", address_name);
                    // Now fetch the formatted address display
                }
            });

            frappe.db.get_list("Contact", {
                filters: [
                    ["Dynamic Link", "link_doctype", "=", "Company"],
                    ["Dynamic Link", "link_name", "=", frm.doc.company]
                ],
                fields: ["name", "first_name", "last_name", "email_id", "phone"],
                limit: 1
            }).then(contacts => {
                console.log("Contacts fetched from DB:", contacts);

                if (contacts.length > 0) {
                    const contact = contacts[0];
                    console.log("First contact found:", contact);

                    // Example: Set contact name in field `company_contact`
                    frm.set_value("company_contact_person", contact.name);

                    // You can also log or use additional fields
                    console.log("Full Name:", `${contact.first_name || ''} ${contact.last_name || ''}`);
                    console.log("Email:", contact.email_id);
                    console.log("Phone:", contact.phone);
                } else {
                    console.log("No contacts found linked to this company.");
                }
            });
        }
    }
});


frappe.ui.form.on("Delivery Challan Item", {
    expense_account: function (frm, dt, dn) {
        var d = locals[dt][dn];
        frm.update_in_all_rows("items", "expense_account", d.expense_account);
    },
    cost_center: function (frm, dt, dn) {
        var d = locals[dt][dn];
        frm.update_in_all_rows("items", "cost_center", d.cost_center);
    },
    qty: function (frm, cdt, cdn) {
        let row = locals[cdt][cdn];

        if (row.rate && row.qty) {
            let calculated_amount = row.rate * row.qty;
            frappe.model.set_value(cdt, cdn, 'amount', calculated_amount);
        } else {
            frappe.model.set_value(cdt, cdn, 'amount', 0);
        }

        frm.events.update_totals(frm); // update total_qty and total
    },
    rate: function (frm, cdt, cdn) {
        let row = locals[cdt][cdn];

        if (row.price_list_rate && row.rate) {
            let discount_amount = row.price_list_rate - row.rate;
            let discount_percentage = (discount_amount / row.price_list_rate) * 100;

            frappe.model.set_value(cdt, cdn, 'discount_amount', discount_amount);
            frappe.model.set_value(cdt, cdn, 'discount_percentage', discount_percentage);
        } else {
            frappe.model.set_value(cdt, cdn, 'discount_amount', 0);
            frappe.model.set_value(cdt, cdn, 'discount_percentage', 0);
        }

        frappe.model.set_value(cdt, cdn, 'amount', row.rate * row.qty);
        frm.events.update_totals(frm); // update total
    },
    delivery_challan_item_add: function (frm) {
        frm.events.update_totals(frm);
    },
    delivery_challan_item_remove: function (frm) {
        frm.events.update_totals(frm);
    }
});

// Utility method to calculate total amount and total quantity
frappe.ui.form.on("Delivery Challan", {
    update_totals: function (frm) {
        let total_qty = 0;
        let total_amount = 0;

        frm.doc.delivery_challan_item.forEach(item => {
            total_qty += flt(item.qty);
            total_amount += flt(item.amount);
        });

        frm.set_value('total_qty', total_qty);
        frm.set_value('total', total_amount);
    }
});
