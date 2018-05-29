import { Kmath } from "./Kmath/Kmath"
//import { Kcommon } from "./Kcommon/Kcommon"

declare global {
    interface Window { Ktools: any; }
}

window.Ktools = window.Ktools || {};
window.Ktools.Kmath = Kmath;
