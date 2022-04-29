import {useSelector} from "react-redux";

import english from "../Language System/Language/english.json";
import russian from "../Language System/Language/russian.json";
import uzbek from "../Language System/Language/uzbek.json";

function  LangText ({id}) {
    const language = useSelector(state =>state.languageReducer)
    switch (language){
        case "english":
            return english[id];
        case "russian":
            return russian[id];
        case "uzbek":
            return uzbek[id];
        default:
            return [id]

    }
}
export default LangText;