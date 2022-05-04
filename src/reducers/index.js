import { active_personalInfo } from "./active_personalInfo";
import { contacts_panel_reducer } from "./contacts_panel";
import { education_level } from "./education_level";
import { education_panel_reducer } from "./education_panel";
import { navReducer } from "./navigation";
import { personalinfo_panel_reducer } from "./personalinfo_panel";

export default {
  navigation: navReducer,
  contacts_panel: contacts_panel_reducer,
  personalinfo_panel: personalinfo_panel_reducer,
  education_panel: education_panel_reducer,
  active_persInfo: active_personalInfo,
  education_level: education_level,
};
