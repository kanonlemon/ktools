import { Kcommon } from "./Kcommon/Kcommo";
import { Kmath } from "./Kmath/Kmath";



declare global{
    interface Window{
        Ktools : any
    }
}

window.Ktools = {
    Kcommon : Kcommon,
    Kmath   : Kmath
}