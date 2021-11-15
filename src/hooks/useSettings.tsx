import { SettingsContext } from "contexts/SettingsContext";
import { useContext } from "react";

const useSettings = () => useContext(SettingsContext);

export default useSettings;
