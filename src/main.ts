import { Kmath } from "./Kmath/Karray"
import { Kcommon } from "./Kcommon/Kbase"
//import { Kcommon } from "./Kcommon/Kcommon"

declare global {
    interface Window { Ktools: any; }
}

window.Ktools = window.Ktools || {};
window.Ktools.Kmath = Kmath;
window.Ktools.Kcommon = Kcommon
