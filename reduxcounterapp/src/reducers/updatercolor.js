const initialcolor="white"

const updateColor = (state=initialcolor,action) => {
    switch(action.type){
        case "RED": return "red";
        case "GREEN": return "green";
        case "YELLOW": return "yellow";
        default: return state;
    }
}

export default updateColor