app_name = "anamec_instruments"
app_title = "Anamec Instruments"
app_publisher = "Techsolvo LLP"
app_description = "ANAMEC INSTRUMENTS PRIVATE LIMITED"
app_email = "mishramradul29@gmail.com"
app_license = "mit"

# Apps
# ------------------

# on_login = "anamec_instruments.utils.on_login"

on_login = "anamec_instruments.utils.on_user_login"
app_include_js = "/assets/anamec_instruments/js/calibration_popup.js"

# doctype_js = {
#     "Calibration": "public/js/calibration_popup.js"
# }

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "anamec_instruments",
# 		"logo": "/assets/anamec_instruments/logo.png",
# 		"title": "Anamec Instruments",
# 		"route": "/anamec_instruments",
# 		"has_permission": "anamec_instruments.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/anamec_instruments/css/anamec_instruments.css"
# app_include_js = "/assets/anamec_instruments/js/anamec_instruments.js"

# include js, css files in header of web template
# web_include_css = "/assets/anamec_instruments/css/anamec_instruments.css"
# web_include_js = "/assets/anamec_instruments/js/anamec_instruments.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "anamec_instruments/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "anamec_instruments/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "anamec_instruments.utils.jinja_methods",
# 	"filters": "anamec_instruments.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "anamec_instruments.install.before_install"
# after_install = "anamec_instruments.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "anamec_instruments.uninstall.before_uninstall"
# after_uninstall = "anamec_instruments.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "anamec_instruments.utils.before_app_install"
# after_app_install = "anamec_instruments.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "anamec_instruments.utils.before_app_uninstall"
# after_app_uninstall = "anamec_instruments.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "anamec_instruments.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

scheduler_events = {
    "cron": {
        "*/15 * * * *": [
            "anamec_instruments.utils.on_user_login"
        ]
    }
}
# scheduler_events = {
# 	"all": [
# 		"anamec_instruments.tasks.all"
# 	],
# 	"daily": [
# 		"anamec_instruments.tasks.daily"
# 	],
# 	"hourly": [
# 		"anamec_instruments.tasks.hourly"
# 	],
# 	"weekly": [
# 		"anamec_instruments.tasks.weekly"
# 	],
# 	"monthly": [
# 		"anamec_instruments.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "anamec_instruments.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "anamec_instruments.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "anamec_instruments.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["anamec_instruments.utils.before_request"]
# after_request = ["anamec_instruments.utils.after_request"]

# Job Events
# ----------
# before_job = ["anamec_instruments.utils.before_job"]
# after_job = ["anamec_instruments.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"anamec_instruments.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

