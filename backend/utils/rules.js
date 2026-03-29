const checkRules = (message) => {
  const text = message.toLowerCase().trim();

if (
  text === "hello" ||
  text === "hi" ||
  text === "hey" ||
  text === "good morning" ||
  text === "good evening" ||
  text === "good afternoon" ||
  text.startsWith("hello ") ||
  text.startsWith("hi ") ||
  text.startsWith("hey ") ||
  text.startsWith("good morning") ||
  text.startsWith("good evening")
) {
  return "greeting";
}
 
  if (text.includes("hostel") && text.includes("fee")) {
    return "hostel_information";
  }

  if (text.includes("bus pass")) {
    return "bus_pass";
  }

  if (text.includes("admit card")) {
    return "admit_card";
  }

  if (text.includes("character certificate")) {
    return "character_certificate";
  }

  if (text.includes("semester registration")) {
    return "semester_registration";
  }

  if (text.includes("office timing")) {
    return "office_timings";
  }

  if (text.includes("portal login")) {
    return "portal_login_issues";
  }

  if (text.includes("night out") || text.includes("hostel leave")) {
    return "hostel_leave_permission";
  }

  if (text.includes("anti ragging") || text.includes("ragging")) {
    return "anti_ragging_support";
  }

  if (text.includes("branch change") || text.includes("course change")) {
    return "course_branch_change";
  }

  // ✅ GENERAL RULES

  if (text.includes("hostel")) {
    return "hostel_information";
  }

  if (text.includes("fee") || text.includes("fees") || text.includes("payment")) {
    return "fee_structure";
  }

  if (text.includes("admission")) {
    return "admission_queries";
  }

  if (text.includes("document")) {
    return "admission_documents";
  }

  if (text.includes("eligibility")) {
    return "admission_eligibility";
  }

  if (text.includes("deadline")) {
    return "fee_deadline";
  }

  if (text.includes("receipt")) {
    return "fee_receipt";
  }

  if (text.includes("refund")) {
    return "refund_policy";
  }

  if (text.includes("scholarship")) {
    return "scholarship_details";
  }

  if (text.includes("status")) {
    return "scholarship_status";
  }

  if (text.includes("exam") || text.includes("datesheet")) {
    return "exam_schedule";
  }

  if (text.includes("result")) {
    return "result_queries";
  }

  if (text.includes("revaluation") || text.includes("rechecking")) {
    return "revaluation_rechecking";
  }

  if (text.includes("backlog") || text.includes("supplementary")) {
    return "backlog_exam";
  }

  if (text.includes("attendance")) {
    return "attendance_rules";
  }

  if (text.includes("complaint")) {
    return "hostel_complaints";
  }

  if (text.includes("mess") || text.includes("food")) {
    return "mess_food_facility";
  }

  if (text.includes("library")) {
    return "library_timing";
  }

  if (text.includes("bus") || text.includes("transport")) {
    return "transport_bus_details";
  }

  if (text.includes("placement")) {
    return "placement_information";
  }

  if (text.includes("internship")) {
    return "internship_queries";
  }

  if (text.includes("id card")) {
    return "id_card_issues";
  }

  if (text.includes("bonafide")) {
    return "bonafide_certificate";
  }

  if (text.includes("migration")) {
    return "migration_certificate";
  }

  if (text.includes("verification")) {
    return "document_verification";
  }

  if (text.includes("timetable")) {
    return "class_timetable";
  }

  if (text.includes("holiday")) {
    return "holiday_list";
  }

  if (text.includes("syllabus")) {
    return "course_syllabus";
  }

  if (text.includes("assignment")) {
    return "assignment_submission";
  }

  if (text.includes("faculty") || text.includes("staff")) {
    return "faculty_contact";
  }

  if (text.includes("leave")) {
    return "leave_application";
  }

  if (text.includes("helpdesk") || text.includes("support")) {
    return "student_support_helpdesk";
  }

  if (text.includes("wifi") || text.includes("network")) {
    return "wifi_network_problems";
  }

  if (text.includes("medical")) {
    return "medical_facility";
  }

  if (text.includes("canteen") || text.includes("cafeteria")) {
    return "canteen_cafeteria";
  }

  if (text.includes("sports")) {
    return "sports_facility";
  }

  if (text.includes("lab")) {
    return "lab_timing";
  }

  if (text.includes("classroom") || text.includes("room")) {
    return "classroom_location";
  }

  if (text.includes("bye") || text.includes("goodbye")) {
    return "goodbye";
  }

  return null;
};

module.exports = { checkRules };