import { Kcommon } from "./Kcommon/Kcommon";
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