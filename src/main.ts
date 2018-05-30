import { Kmath } from "./Kmath/Kmath"
import { Kcommon } from "./Kcommon/Kcommon"
//import { Kcommon } from "./Kcommon/Kcommon"

declare global {
    interface Window { Ktools: any; }
}

window.Ktools = window.Ktools || {};
window.Ktools.Kmath = Kmath;
window.Ktools.Kcommon = Kcommon
