import frappe
from frappe.utils import today, getdate

def sync_due_calibrations():
    """Insert Calibration Tracker records for today's due calibrations."""
    print("Syncing due calibrations...", today())
    today_date = frappe.utils.getdate(today()).strftime("%d-%m-%Y")
    calibrations = frappe.get_all("Calibration", filters={"next_due_date": today_date}, fields=["name", "next_due_date"])
    
    for c in calibrations:
        if not frappe.db.exists("Calibration Tracker", {"ref_doctype": "Calibration", "ref_name": c.name}):
            doc = frappe.get_doc({
                "doctype": "Calibration Tracker",
                "ref_name": c.name,
                "due_date": c.next_due_date,
                "is_read": 0
            })
            doc.insert(ignore_permissions=True)

@frappe.whitelist()
def get_due_today_unread_calibrations():
    
    print("Syncing due calibrations.1", today())
    today_date = getdate(today()).strftime("%d-%m-%Y")
    return frappe.get_all("Calibration Tracker", filters={
        
        "due_date": today_date,
        "is_read": 0
    }, fields=["name", "ref_name", "calibration_name"])

@frappe.whitelist()
def mark_all_calibrations_as_read():
    today_date = getdate(today()).strftime("%d-%m-%Y")
    docs = frappe.get_all("Calibration Tracker", filters={
        
        "due_date": today_date,
        "is_read": 0
    })

    for doc in docs:
        frappe.db.set_value("Calibration Tracker", doc.name, "is_read", 1)

    frappe.db.commit()

def on_user_login():
    if frappe.session.user == "Administrator":
        sync_due_calibrations()

@frappe.whitelist()
def mark_single_calibration_as_read(tracker_name):
    if tracker_name:
        doc = frappe.get_doc("Calibration Tracker", tracker_name)
        doc.is_read = 1
        doc.save(ignore_permissions=True)
        frappe.db.commit()